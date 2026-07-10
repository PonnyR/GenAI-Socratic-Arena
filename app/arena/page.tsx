"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { BrandMark } from "../components/SiteChrome";

type Message = { role: "agent" | "student"; name: string; text: string; source?: string; tone?: string };

const agents = [
  { code: "CFO", name: "Sceptical CFO", focus: "Risk & margin", tone: "cyan" },
  { code: "BV", name: "Brand Visionary", focus: "Trust & growth", tone: "amber" },
  { code: "DA", name: "Devil’s Advocate", focus: "Assumptions", tone: "violet" },
];

const challenges = [
  { name: "Brand Visionary", tone: "amber", text: "Your pilot protects margin, but does a cautious rollout weaken the public commitment? Explain how the brand communicates ambition without making claims it cannot yet prove.", source: "Consumer Trust & Transition Claims · 2024" },
  { name: "Devil’s Advocate", tone: "violet", text: "You are treating customer retention as evidence of acceptance. What alternative explanation could produce the same retention numbers, and how would you test it?", source: "Causal Reasoning in Market Experiments · 2025" },
  { name: "Sceptical CFO", tone: "cyan", text: "Name the decision threshold. At what measured margin impact would you stop, adapt, or scale the programme?", source: "Packaging Economics Review · 2025" },
];

export default function ArenaPage() {
  const [activeAgent, setActiveAgent] = useState(0);
  const [round, setRound] = useState(2);
  const [response, setResponse] = useState("");
  const [untimed, setUntimed] = useState(false);
  const [seconds, setSeconds] = useState(8 * 60 + 42);
  const [showHint, setShowHint] = useState(true);
  const [showSources, setShowSources] = useState(true);
  const [notice, setNotice] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "student", name: "You", text: "I recommend a staged rollout: begin in two high-retention markets, measure both unit economics and customer response, then scale only if the evidence supports it." },
    { role: "agent", name: "Sceptical CFO", tone: "cyan", text: "Your proposal assumes customers will absorb a 6–9% cost increase. What evidence shows that loyalty will hold when lower-priced competitors keep conventional packaging?", source: "Packaging Economics Review · 2025" },
  ]);

  useEffect(() => {
    if (untimed || seconds <= 0) return;
    const timer = window.setInterval(() => setSeconds((value) => Math.max(0, value - 1)), 1000);
    return () => window.clearInterval(timer);
  }, [untimed, seconds]);

  const timeLabel = useMemo(() => `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`, [seconds]);

  function submitArgument() {
    const cleaned = response.trim();
    if (!cleaned) { setNotice("Write a response before submitting your argument."); return; }
    const nextIndex = Math.min(round - 2, challenges.length - 1);
    const next = challenges[nextIndex];
    setMessages((current) => [...current, { role: "student", name: "You", text: cleaned }, { role: "agent", ...next }]);
    setActiveAgent((nextIndex + 1) % agents.length);
    setRound((current) => Math.min(4, current + 1));
    setResponse("");
    setShowHint(true);
    setNotice(round >= 3 ? "Strong progress. You can now complete the session or continue refining." : "Argument submitted. A new perspective has entered the discussion.");
  }

  return (
    <div className="arena-page">
      <header className="arena-header">
        <Link href="/" className="arena-brand" aria-label="Back to GenAI Socratic Arena home"><BrandMark /><span><strong>Strategy Arena</strong><small>MGMT 302 · Sustainable Growth</small></span></Link>
        <div className="arena-progress"><span>Round {round} of 4</span><i><b style={{ width: `${round * 25}%` }} /></i></div>
        <div className="arena-header-actions">
          <label className="untimed-toggle"><input type="checkbox" checked={untimed} onChange={(event) => setUntimed(event.target.checked)} /><span /> Untimed mode</label>
          <span className="timer">{untimed ? "No limit" : timeLabel}</span>
          <Link href="/results" className="end-session">End session</Link>
        </div>
      </header>

      <main className="arena-workspace">
        <aside className="brief-panel">
          <div><span className="kicker amber-text">Today’s motion</span><h1>Northstar Coffee should replace single-use packaging across all markets by 2027.</h1></div>
          <section><span className="kicker">Your objective</span><p>Defend a financially credible transition strategy while protecting customer trust.</p></section>
          <section><span className="kicker">Success criteria</span><ul><li>Respond to all three perspectives</li><li>Use at least two approved sources</li><li>Name a measurable decision rule</li></ul></section>
          <button className="report-button" type="button" onClick={() => setNotice("The current message has been marked for instructor review.")}>Flag for review</button>
        </aside>

        <section className="debate-panel" aria-label="Debate transcript">
          <div className="agent-tabs" role="tablist" aria-label="AI personas">
            {agents.map((agent, index) => <button role="tab" aria-selected={activeAgent === index} className={`${agent.tone} ${activeAgent === index ? "active" : ""}`} key={agent.code} onClick={() => setActiveAgent(index)}><span>{agent.code}</span><div><strong>{agent.name}</strong><small>{agent.focus}</small></div>{activeAgent === index && <em>Active</em>}</button>)}
          </div>

          <div className="conversation" aria-live="polite">
            {messages.map((message, index) => (
              <article className={`message ${message.role} ${message.tone ?? ""}`} key={`${message.name}-${index}`}>
                <div className="message-meta"><strong>{message.name}</strong><time>{index === messages.length - 1 ? "Just now" : "Earlier"}</time></div>
                <p>{message.text}</p>
                {message.source && <button type="button" className="source-chip" onClick={() => setShowSources(true)}>↗ {message.source}</button>}
              </article>
            ))}
          </div>

          {showHint && <aside className="live-hint"><div><span className="kicker amber-text">Socratic coaching prompt</span><strong>Separate conviction from evidence.</strong></div><p>Address the risk directly, then identify the evidence and threshold that would change your decision.</p><button type="button" onClick={() => setShowHint(false)} aria-label="Dismiss coaching prompt">×</button></aside>}

          <div className="response-composer">
            <div className="composer-label"><label htmlFor="student-response">Your response</label><span>{response.length} / 900</span></div>
            <textarea id="student-response" maxLength={900} value={response} onChange={(event) => setResponse(event.target.value)} placeholder="State your decision, support it with evidence, and respond to the objection…" />
            <div className="composer-actions"><div><button type="button" onClick={() => setShowSources((value) => !value)}>＋ Add source</button><button type="button" onClick={() => setShowHint(true)}>◇ Ask for a hint</button></div>{round >= 4 ? <Link className="button button-primary" href="/results">Complete & view scorecard →</Link> : <button className="button button-primary" type="button" onClick={submitArgument}>Submit argument →</button>}</div>
          </div>
          {notice && <div className="notice" role="status"><span>{notice}</span><button type="button" onClick={() => setNotice("")} aria-label="Dismiss message">×</button></div>}
        </section>

        <aside className={`sources-panel ${showSources ? "open" : ""}`}>
          <div className="sources-heading"><div><span className="kicker">Approved evidence</span><h2>Source library</h2></div><button type="button" onClick={() => setShowSources(false)} aria-label="Close source library">×</button></div>
          <p>Use these sources to ground your argument. The Arena will verify that each citation supports your claim.</p>
          <div className="source-list">
            <button type="button" onClick={() => { setResponse((value) => `${value}${value ? "\n\n" : ""}According to the Packaging Economics Review (2025), `); setNotice("Source added to your draft."); }}><span>01</span><div><strong>Packaging Economics Review</strong><small>Margin impact · 2025</small></div><em>＋</em></button>
            <button type="button" onClick={() => { setResponse((value) => `${value}${value ? "\n\n" : ""}The Consumer Trust study (2024) indicates that `); setNotice("Source added to your draft."); }}><span>02</span><div><strong>Consumer Trust & Transition Claims</strong><small>Brand credibility · 2024</small></div><em>＋</em></button>
            <button type="button" onClick={() => { setResponse((value) => `${value}${value ? "\n\n" : ""}Evidence from the Circular Retail Pilot (2025) shows that `); setNotice("Source added to your draft."); }}><span>03</span><div><strong>Circular Retail Pilot</strong><small>Market experiment · 2025</small></div><em>＋</em></button>
          </div>
          <div className="source-progress"><div><span>Sources used</span><strong>1 of 2</strong></div><i><b style={{ width: "50%" }} /></i></div>
        </aside>
      </main>
    </div>
  );
}
