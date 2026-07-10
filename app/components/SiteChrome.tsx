import Link from "next/link";

export function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <i /><i /><i />
    </span>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="section-shell header-inner">
        <Link href="/" className="brand" aria-label="GenAI Socratic Arena home">
          <BrandMark />
          <span><strong>GenAI Socratic Arena</strong><small>Business debate, rebuilt for practice</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link href="/#method">How it works</Link>
          <Link href="/student">Student</Link>
          <Link href="/instructor">Instructor</Link>
          <Link className="nav-cta" href="/arena">Enter the Arena <span aria-hidden="true">↗</span></Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-inner">
        <div className="brand footer-brand"><BrandMark /><span><strong>GenAI Socratic Arena</strong><small>A formative learning prototype</small></span></div>
        <p>AI-powered Socratic practice for entrepreneurial thinking and communication excellence.</p>
        <div><Link href="/student">Student portal</Link><Link href="/instructor">Instructor portal</Link><a href="#privacy">Privacy</a></div>
      </div>
    </footer>
  );
}
