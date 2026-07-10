import Link from "next/link";
import { SiteHeader } from "../components/SiteChrome";

export default function InstructorDashboard() {
  return (
    <div className="site-page app-page instructor-page">
      <SiteHeader />
      <main className="dashboard-shell section-shell">
        <section className="dashboard-hero instructor-hero"><div><p className="eyebrow">Instructor workspace</p><h1>MGMT 302 · Sustainable Growth</h1><p>Pilot cohort · 82 students · Practice window closes 18 July</p></div><Link className="button button-primary" href="/arena">Preview student Arena →</Link></section>

        <section className="stat-grid" aria-label="Course metrics">
          <article><span>Participation</span><strong>74<small>/82</small></strong><p>90% have started</p></article>
          <article><span>Completed sessions</span><strong>186</strong><p>2.5 per active student</p></article>
          <article><span>Average score</span><strong>78</strong><p className="positive">↑ 6 points from baseline</p></article>
          <article><span>Human review</span><strong>12</strong><p>10% calibration sample</p></article>
        </section>

        <div className="instructor-grid">
          <section className="instructor-main side-panel">
            <div className="panel-heading"><div><span className="kicker">Cohort performance</span><h2>Learning progress by dimension</h2></div><select aria-label="Select comparison period"><option>Baseline comparison</option><option>Current practice only</option></select></div>
            <div className="cohort-chart" aria-label="Bar chart of cohort performance"><div><span>Argument depth</span><i><b style={{ width: "82%" }} /></i><strong>82</strong></div><div><span>Adaptability</span><i><b style={{ width: "74%" }} /></i><strong>74</strong></div><div><span>Clarity</span><i><b style={{ width: "86%" }} /></i><strong>86</strong></div><div><span>Conciseness</span><i><b style={{ width: "77%" }} /></i><strong>77</strong></div><div><span>Evidence use</span><i><b style={{ width: "71%" }} /></i><strong>71</strong></div></div>
            <div className="chart-note"><span>Insight</span><p>Evidence use is improving, but remains the cohort’s clearest opportunity. Consider adding a short source-selection demonstration before Practice 03.</p></div>
          </section>

          <aside className="review-queue side-panel">
            <div className="panel-heading"><div><span className="kicker">Review queue</span><h2>Needs attention</h2></div><span className="count-badge">4</span></div>
            <div className="review-list"><button type="button"><span className="review-icon amber">!</span><div><strong>Content flag</strong><small>Session #A-184 · 8 min ago</small></div><b>→</b></button><button type="button"><span className="review-icon cyan">≋</span><div><strong>Score calibration</strong><small>3 transcripts ready</small></div><b>→</b></button><button type="button"><span className="review-icon violet">◇</span><div><strong>Persona feedback</strong><small>CFO perceived as too aggressive</small></div><b>→</b></button></div>
          </aside>
        </div>

        <div className="instructor-bottom-grid">
          <section className="side-panel scenario-panel"><div className="panel-heading"><div><span className="kicker">Active scenario</span><h2>Single-use packaging transition</h2></div><span className="status-pill"><span className="live-dot" /> Published</span></div><p>Version 1.4 · Three personas · 12 approved sources · Rubric v2.1</p><div><button type="button">Edit scenario</button><button type="button">Test citations</button><button type="button">View prompt versions</button></div></section>
          <section className="side-panel knowledge-panel"><span className="kicker">Knowledge base health</span><div className="health-row"><strong>20</strong><span>approved sources</span><i><b style={{ width: "92%" }} /></i></div><p><span className="live-dot" /> All citations verified in the latest evaluation run.</p></section>
        </div>
      </main>
    </div>
  );
}
