import { SiteHeader } from "@/components/site-header";
import { Services } from "@/components/services";
import { SelectedWork } from "@/components/selected-work";
import { AboutProcess } from "@/components/about-process";
import { contact } from "@/content/portfolio";
import { Arrow } from "@/components/arrow";
import { BuildExplorer } from "@/components/build-explorer";
import { CopyEmail } from "@/components/copy-email";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <section
          id="intro"
          className="intro shell"
          aria-labelledby="intro-heading"
        >
          <div className="cover">
            <div className="cover-copy">
              <h1 id="intro-heading">
                From screen
                <br />
                <span>to circuit.</span>
              </h1>
              <div className="intro-support">
                <p>
                  I’m Hans Santos, a developer and electronics maker in
                  Batangas, Philippines. I build websites, applications, and the
                  hardware that connects them to the physical world.
                </p>
                <a href="#contact" className="primary-link">
                  Let’s talk about your project <Arrow />
                </a>
                <div className="intro-secondary-actions">
                  <a href="#work" className="text-link explore">
                    Explore the work <Arrow />
                  </a>
                  <a
                    href="/resume-hans-santos.pdf"
                    className="resume-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View résumé PDF (opens in a new tab)"
                  >
                    View résumé <span className="resume-format">PDF</span>{" "}
                    <Arrow />
                  </a>
                </div>
              </div>
            </div>
            <BuildExplorer />
          </div>
          <div className="intro-foot">
            <p>Hans Christian P. Santos</p>
            <a href="#services">
              Find your starting point <Arrow />
            </a>
          </div>
        </section>
        <Services />
        <section
          id="work"
          className="work section-space"
          aria-labelledby="work-heading"
        >
          <div className="shell">
            <div className="section-heading work-header">
              <h2 id="work-heading">
                Selected <span>work.</span>
              </h2>
              <p>
                A closer look at personal and hackathon builds. Real interfaces,
                source-backed systems, and the thinking behind them.
              </p>
            </div>
            <SelectedWork />
          </div>
        </section>
        <AboutProcess />
        <section
          id="contact"
          className="contact section-space"
          aria-labelledby="contact-heading"
        >
          <div className="shell contact-grid">
            <h2 id="contact-heading">
              What are you
              <br />
              <span>building?</span>
            </h2>
            <div className="contact-body">
              <p>
                A website, an app, or something that connects software and
                hardware. Tell me about your idea.
              </p>
              <a className="contact-email" href={`mailto:${contact.email}`}>
                Email Hans <Arrow />
              </a>
              <p className="email-address">{contact.email}</p>
              <CopyEmail />
              <a className="text-link" href={contact.facebook}>
                Contact Hans on Facebook <Arrow />
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="shell">
        <span className="footer-brand">Hans Santos.</span>
        <span>
          Independent developer &amp; maker
          <br />
          Batangas, Philippines
        </span>
        <a href="https://github.com/hanssantos02">
          GitHub <Arrow />
        </a>
        <a href="https://www.linkedin.com/in/hans-santos-342712335/">
          LinkedIn <Arrow />
        </a>
        <a href="#intro">
          Back to top <Arrow />
        </a>
      </footer>
    </>
  );
}
