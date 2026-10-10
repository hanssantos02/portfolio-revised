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
              <span className="service-symbol" aria-hidden="true">
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  {index === 0 && (
                    <path d="M10 10L4 16L10 22M22 10L28 16L22 22M19 6L13 26" />
                  )}
                  {index === 1 && (
                    <>
                      <rect x="8" y="3" width="16" height="26" rx="2" />
                      <path d="M13 7H19M13 25H19" />
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <path d="M3 16H10M22 16H29M16 3V10M16 22V29" />
                      <rect x="10" y="10" width="12" height="12" />
                      <circle cx="16" cy="16" r="2" />
                    </>
                  )}
                  {index === 3 && (
                    <>
                      <rect x="8" y="8" width="16" height="16" />
                      <path d="M12 3V8M20 3V8M12 24V29M20 24V29M3 12H8M3 20H8M24 12H29M24 20H29M12 12H20V20H12Z" />
                    </>
                  )}
                </svg>
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
