import { SiteHeader } from "@/components/site-header";
import { Services } from "@/components/services";
import { SelectedWork } from "@/components/selected-work";
import { contact } from "@/content/portfolio";
import { Arrow } from "@/components/arrow";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main" tabIndex={-1} className="shell">
        <section id="intro" className="intro" aria-labelledby="intro-heading">
          <p className="intro-label">
            Developer &amp; maker · Batangas, Philippines
          </p>
          <div className="intro-grid">
            <h1 id="intro-heading">
              Your idea, <br />
              <span>built to work.</span>
            </h1>
            <div className="intro-support">
              <p>
                Websites, apps, electronics, and embedded systems. I’m Hans
                Santos — I turn ideas into practical builds.
              </p>
              <a href="#contact" className="primary-link">
                Let’s talk about your project <Arrow />
              </a>
              <a href="#work" className="text-link explore">
                Explore the work <Arrow />
              </a>
            </div>
          </div>
        </section>
        <Services />
        <section id="work" className="work" aria-labelledby="work-heading">
          <p className="section-label">Selected work</p>
          <h2 id="work-heading">A few things I’ve built.</h2>
          <SelectedWork />
        </section>
        <section
          id="approach"
          className="approach"
          aria-labelledby="approach-heading"
        >
          <h2 id="approach-heading">
            From the first conversation
            <br />
            to a practical build.
          </h2>
          <div className="approach-body">
            <p className="personal-context">
              I’m Hans, a developer and maker based in Batangas. I work across
              software and electronics, connecting an idea with the pieces it
              needs to work.
            </p>
            <ol className="approach-steps">
              <li>
                <h3>Discuss the idea</h3>
                <p>
                  Talk through what you need, who it’s for, and the scope of the
                  build.
                </p>
              </li>
              <li>
                <h3>Build the pieces</h3>
                <p>
                  Turn the agreed scope into an interface, a circuit, or
                  firmware — and connect them where needed.
                </p>
              </li>
              <li>
                <h3>Review it together</h3>
                <p>
                  Look at how the build works, discuss what needs refining, and
                  agree on the next steps.
                </p>
              </li>
            </ol>
          </div>
        </section>
        <section
          id="contact"
          className="contact"
          aria-labelledby="contact-heading"
        >
          <h2 id="contact-heading">
            What would you
            <br />
            like to build?
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
            <a className="text-link" href={contact.facebook}>
              Contact Hans on Facebook <Arrow />
            </a>
          </div>
        </section>
      </main>
      <footer className="shell">
        <span>Hans Santos.</span>
        <span>Batangas, Philippines</span>
        <a href="#intro">
          Back to top <Arrow />
        </a>
      </footer>
    </>
  );
}
