/** @jsxImportSource react */
import { services } from "@/content/portfolio";
import { Arrow } from "./arrow";

export function Services() {
  return (
    <section
      id="services"
      className="services section-space shell"
      aria-labelledby="services-heading"
    >
      <div className="section-heading">
        <h2 id="services-heading">
          Good software.
          <br />
          <span>Thoughtful hardware.</span>
        </h2>
        <p>
          One idea can need more than one discipline. Start with what you need
          to build.
        </p>
      </div>
      <ol className="service-list">
        {services.map((service, index) => (
          <li key={service.id}>
            <a href="#contact">
              <span className="service-number" aria-hidden="true">
                0{index + 1}
              </span>
              <div className="service-title">
                <h3>{service.title}</h3>
                <span>{service.deliverables.join(" / ")}</span>
              </div>
              <p>{service.description}</p>
              <span className="service-action" aria-hidden="true">
                <Arrow />
              </span>
            </a>
          </li>
        ))}
      </ol>
      <a href="#contact" className="text-link services-inquiry">
        Not sure where your idea fits? Let’s talk. <Arrow />
      </a>
    </section>
  );
}
