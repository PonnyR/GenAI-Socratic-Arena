import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html", host: "localhost" },
    }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the finished product homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>GenAI Socratic Arena<\/title>/i);
  assert.match(html, /Where business ideas learn to/);
  assert.match(html, /Start a debate/);
  assert.match(html, /Sceptical CFO/);
  assert.match(html, /href="\/arena"/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("renders all prototype routes", async () => {
  for (const [pathname, expected] of [
    ["/student", "Good afternoon, Alex"],
    ["/arena", "Today’s motion"],
    ["/results", "Your argument held"],
    ["/instructor", "Instructor workspace"],
  ]) {
    const response = await render(pathname);
    assert.equal(response.status, 200, pathname);
    assert.match(await response.text(), new RegExp(expected), pathname);
  }
});

test("uses site-specific metadata and social artwork", async () => {
  const [layout, packageJson] = await Promise.all([
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(layout, /GenAI Socratic Arena/);
  assert.match(layout, /\/og\.png/);
  assert.doesNotMatch(layout, /Starter Project|codex-preview|_sites-preview/);
  assert.match(packageJson, /"name": "genai-socratic-arena"/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});
