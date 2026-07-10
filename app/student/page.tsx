import Link from "next/link";
import { SiteHeader } from "../components/SiteChrome";

const dimensions = [
  ["Argument depth", "84%"],
  ["Adaptability", "76%"],
  ["Evidence use", "81%"],
];

export default function StudentDashboard() {
  return (
    <div className="site-page app-page">
      <SiteHeader />
      <main className="dashboard-shell section-shell">
        <section className="dashboard-hero">
          <div><p className="eyebrow">Student workspace</p><h1>Good afternoon, Alex.</h1><p>Your next argument is ready to be tested.</p></div>
          <div className="student-streak"><strong>3</strong><span>practice sessions<br />completed</span></div>
        </section>

        <div className="dashboard-grid">
          <section className="dashboard-main">
            <div className="panel-heading"><div><span className="kicker">Next assignment</span><h2>Sustainable Growth Strategy</h2></div><span className="due-pill">Due 18 July</span></div>
            <article className="assignment-card">
              <div className="assignment-top"><span className="course-badge">MGMT 302</span><span>Practice 02 of 03</span></div>
              <h3>Should a global coffee brand replace single-use packaging by 2027?</h3>
              <p>Defend a rollout strategy against financial, brand, and ethical objections. Use at least two approved sources.</p>
              <div className="assignment-meta"><span>◷ 18–24 minutes</span><span>◇ 3 AI personas</span><span>↗ 12 approved sources</span></div>
              <div className="assignment-footer"><span><i style={{ width: "34%" }} /> Brief reviewed</span><Link className="button button-primary" href="/arena">Continue debate →</Link></div>
            </article>

            <div className="panel-heading recent-heading"><div><span className="kicker">Recent work</span><h2>Your last scorecards</h2></div><Link href="/results">View full history →</Link></div>
            <div className="recent-list">
              <Link href="/results"><span className="score-orb">82</span><div><strong>Greenwashing as a transition strategy</strong><small>10 July · 16 turns · 3 sources</small></div><span className="trend-up">+7</span><b>→</b></Link>
              <Link href="/results"><span className="score-orb secondary">75</span><div><strong>AI personalisation and consumer trust</strong><small>03 July · 13 turns · 2 sources</small></div><span className="trend-up">+4</span><b>→</b></Link>
            </div>
          </section>

          <aside className="dashboard-side">
            <section className="side-panel progress-panel"><span className="kicker">Learning progress</span><h2>Sharper with every round.</h2><p>Compared with your first session</p><div className="big-progress"><strong>+18%</strong><span>overall rubric growth</span></div>{dimensions.map(([label, score]) => <div className="metric-row" key={label}><div><span>{label}</span><strong>{score}</strong></div><i><b style={{ width: score }} /></i></div>)}</section>
            <section className="side-panel accessibility-panel"><span className="kicker">Practice settings</span><h3>Timed mode</h3><p>Your current assignment uses a flexible 24-minute timer.</p><button type="button">Review accessibility options →</button></section>
          </aside>
        </div>
      </main>
    </div>
  );
}
