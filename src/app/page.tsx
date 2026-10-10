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
          <h1 id="intro-heading">
            Digital ideas.
            <br />
            <span>Real-world solutions.</span>
          </h1>
          <div className="intro-grid">
            <div className="intro-support">
              <p>
                I’m Hans Santos, A Civil Engineering Graduate. The Electronics Engineer and Software Engineer of JM 3D Designs. I build
                websites, applications, electronics, and embedded systems that
                turn your idea into something practical.
              </p>
              <a href="#contact" className="primary-link">
                Let’s talk about your project <Arrow />
              </a>
              <a href="#work" className="text-link explore">
                Explore the work <Arrow />
              </a>
              <div className="intro-identity">
                <span className="identity-mark" aria-hidden="true" />
                <p>
                  Independent by design.
                  <br />
                  Batangas, Philippines.
                </p>
              </div>
            </div>
            <BuildExplorer />
          </div>
          <div className="intro-foot">
            <p>From the browser to the circuit board.</p>
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
                Ideas, <span>in practice.</span>
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
              Have something
              <br />
              in mind?
              <br />
              <span>Let’s make it work.</span>
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
        <a href="#intro">
          Back to top <Arrow />
        </a>
      </footer>
    </>
  );
}
