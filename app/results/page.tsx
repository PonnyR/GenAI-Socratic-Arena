import Link from "next/link";
import { SiteHeader } from "../components/SiteChrome";

const scores = [
  ["Depth of argument", 86, "You sustained a coherent position through four rounds."],
  ["Adaptability", 79, "Your staged rollout improved after the CFO challenge."],
  ["Clarity", 88, "The decision rule and sequence were easy to follow."],
  ["Conciseness", 82, "Most responses stayed focused on the active objection."],
  ["Persuasion", 76, "The logic was strong; the stakeholder narrative can go further."],
  ["Evidence use", 84, "Three relevant sources were used accurately."],
];

export default function ResultsPage() {
  return (
    <div className="site-page app-page results-page">
      <SiteHeader />
      <main className="results-shell section-shell">
        <div className="results-intro"><div><p className="eyebrow">Session complete · Practice 02</p><h1>Your argument held. Now make it sharper.</h1><p>Formative feedback from the Adjudicator Agent, ready for instructor review.</p></div><div className="overall-score"><span>Overall</span><strong>82</strong><small>+7 from last session</small></div></div>

        <div className="results-grid">
          <section className="scorecard-panel">
            <div className="panel-heading"><div><span className="kicker">Communication scorecard</span><h2>Six dimensions of your defence</h2></div><span className="formative-pill">Formative only</span></div>
            <div className="score-list">{scores.map(([label, score, note]) => <article key={String(label)}><div className="score-row"><strong>{label}</strong><span>{score}</span></div><i><b style={{ width: `${score}%` }} /></i><p>{note}</p></article>)}</div>
          </section>

          <aside className="results-side">
            <section className="side-panel verdict-panel"><span className="kicker amber-text">Adjudicator’s verdict</span><h2>A credible strategy with a measurable path to conviction.</h2><p>Your strongest move was converting an all-or-nothing proposal into a staged experiment. The next step is to define how customer trust will be measured alongside margin.</p></section>
            <section className="side-panel evidence-panel"><div><span className="kicker">Evidence audit</span><strong>3 / 3 verified</strong></div><ul><li><span>✓</span>Packaging Economics Review</li><li><span>✓</span>Consumer Trust & Transition Claims</li><li><span>✓</span>Circular Retail Pilot</li></ul></section>
            <section className="side-panel next-panel"><span className="kicker">Next practice focus</span><h3>Persuade beyond the spreadsheet.</h3><p>Connect the rollout metrics to a clear customer promise without overstating what the pilot proves.</p></section>
          </aside>
        </div>

        <section className="results-actions"><Link className="button button-secondary" href="/student">Back to dashboard</Link><Link className="button button-primary" href="/arena">Practice again →</Link></section>
      </main>
    </div>
  );
}
