/** @jsxImportSource react */
import { services } from "@/content/portfolio";
import { Arrow } from "./arrow";

export function Services() {
  return (
    <section
      id="services"
      className="services"
      aria-labelledby="services-heading"
    >
      <h2 id="services-heading">
        What I can help
        <br />
        you build.
      </h2>
      <ol className="service-list">
        {services.map((service, index) => (
          <li key={service.id}>
            <a
              href="#contact"
              aria-label={`Discuss ${service.title.toLowerCase()}`}
            >
              <span className="service-number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Arrow />
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}
