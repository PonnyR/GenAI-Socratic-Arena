import Link from "next/link";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";

const personas = [
  { code: "CFO", name: "Sceptical CFO", focus: "Risk & margin", tone: "cyan" },
  { code: "BV", name: "Brand Visionary", focus: "Trust & growth", tone: "amber" },
  { code: "DA", name: "Devil’s Advocate", focus: "Assumptions", tone: "violet" },
];

export default function Home() {
  return (
    <div className="site-page landing-page">
      <SiteHeader />

      <main>
        <section className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="live-dot" /> AI-powered debate practice</p>
            <h1 id="hero-title">
              Where business ideas learn to <span>defend themselves.</span>
            </h1>
            <p className="hero-lead">
              Pressure-test a position against distinct strategic perspectives. Build sharper
              reasoning, stronger evidence, and the confidence to respond when the room pushes back.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary button-large" href="/arena">
                Start a debate <span aria-hidden="true">→</span>
              </Link>
              <Link className="text-action" href="#method">Explore the teaching method</Link>
            </div>
            <div className="hero-proof" aria-label="Product benefits">
              <div><strong>3</strong><span>Distinct AI perspectives</span></div>
              <div><strong>Evidence</strong><span>Source-aware challenges</span></div>
              <div><strong>Reflect</strong><span>Feedback after every debate</span></div>
            </div>
          </div>

          <div className="arena-preview" aria-label="Preview of the Socratic Arena interface">
            <div className="preview-topbar">
              <div className="preview-title">
                <span className="mini-mark" aria-hidden="true"><i /><i /><i /></span>
                <span><strong>Strategy Arena</strong><small>MGMT 302 · Sustainable Growth</small></span>
              </div>
              <span className="status-pill"><span className="live-dot" /> Live practice</span>
            </div>
            <div className="preview-body">
              <div className="motion-row">
                <div>
                  <span className="kicker amber-text">Today’s motion</span>
                  <h2>Northstar Coffee should replace single-use packaging across all markets by 2027.</h2>
                </div>
                <span className="round-label">Round 2 of 4</span>
              </div>
              <div className="persona-strip">
                {personas.map((persona, index) => (
                  <div className={`persona-chip ${persona.tone} ${index === 0 ? "active" : ""}`} key={persona.code}>
                    <span>{persona.code}</span>
                    <div><strong>{persona.name}</strong><small>{persona.focus}</small></div>
                    {index === 0 && <em>Speaking</em>}
                  </div>
                ))}
              </div>
              <div className="challenge-grid">
                <article className="challenge-card">
                  <div className="card-meta"><span><span className="live-dot" /> Sceptical CFO</span><time>Just now</time></div>
                  <p>Your proposal assumes customers will absorb a 6–9% cost increase. What evidence shows that loyalty will hold?</p>
                  <span className="source-chip">↗ Packaging Economics Review · 2025</span>
                </article>
                <aside className="prompt-card">
                  <span className="kicker amber-text">— Socratic prompt</span>
                  <strong>Separate conviction from evidence.</strong>
                  <p>Address the margin risk, then name the data that could validate your claim.</p>
                </aside>
              </div>
              <div className="composer-preview">
                <label>Your response</label>
                <p>A staged rollout addresses both concerns: pilot the refill model in two high-retention markets, measure margin impact, then scale only if the evidence supports it.</p>
                <div><span>Add source</span><span>Ask for a hint</span><button type="button">Submit argument →</button></div>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-strip" aria-label="Platform principles">
          <div className="section-shell trust-grid">
            <span>Evidence-grounded dialogue</span>
            <span>Instructor-guided assessment</span>
            <span>Designed for business education</span>
            <span>Accessible timed and untimed modes</span>
          </div>
        </section>

        <section className="method-section section-shell" id="method" aria-labelledby="method-title">
          <div className="section-heading">
            <p className="eyebrow">A deliberate learning loop</p>
            <h2 id="method-title">The AI does not answer for you. It makes your answer stronger.</h2>
            <p>Every session moves from competing viewpoints to evidence-based reflection through a structured Socratic protocol.</p>
          </div>
          <div className="method-grid">
            <article><span>01</span><h3>Choose a consequential motion</h3><p>Enter a realistic business decision with clear constraints, stakeholders, and approved evidence.</p></article>
            <article><span>02</span><h3>Defend your position</h3><p>Respond to distinct AI personas that surface trade-offs, challenge assumptions, and test your logic.</p></article>
            <article><span>03</span><h3>Reflect with a scorecard</h3><p>Receive transparent formative feedback on argument depth, adaptability, clarity, and evidence use.</p></article>
          </div>
        </section>

        <section className="persona-section">
          <div className="section-shell persona-layout">
            <div className="section-heading compact">
              <p className="eyebrow">Meet the board</p>
              <h2>One decision. Three competing definitions of success.</h2>
              <p>The Arena simulates the constructive friction of a real boardroom while an independent adjudicator observes the quality of your reasoning.</p>
              <Link className="button button-secondary" href="/student">View student dashboard →</Link>
            </div>
            <div className="persona-stack">
              {personas.map((persona, index) => (
                <article className={`persona-card ${persona.tone}`} key={persona.code}>
                  <span className="persona-code">{persona.code}</span>
                  <div><small>Perspective {String(index + 1).padStart(2, "0")}</small><h3>{persona.name}</h3><p>{index === 0 ? "Tests financial viability, exposure, and opportunity cost." : index === 1 ? "Protects long-term brand equity, trust, and customer connection." : "Finds weak assumptions, false certainty, and logical fallacies."}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="closing-section section-shell">
          <div>
            <p className="eyebrow">Practice without pressure</p>
            <h2>Enter the room with an idea. Leave with an argument.</h2>
          </div>
          <Link className="button button-primary button-large" href="/arena">Start a debate <span aria-hidden="true">→</span></Link>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
