/** @jsxImportSource react */
export function SiteHeader() {
  return (
    <header className="site-header shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <a className="brand" href="#intro" aria-label="Hans Santos, home">
        Hans Santos.
        <span aria-hidden="true" />
      </a>
      <nav aria-label="Main navigation">
        <a href="#services">Services</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
