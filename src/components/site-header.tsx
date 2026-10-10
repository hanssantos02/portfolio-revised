/** @jsxImportSource react */
"use client";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [active, setActive] = useState("");
  useEffect(() => {
    let observer: IntersectionObserver | undefined;
    function observeSections() {
      observer?.disconnect();
      // Header hydration can precede the streamed server-rendered main content.
      const sections = ["intro", "services", "work", "approach", "contact"]
        .map((id) => document.getElementById(id))
        .filter((section): section is HTMLElement => section !== null);
      const readingLine = window.innerHeight * 0.35;
      // Observe a narrow reading line. Recheck every section when it crosses a
      // boundary: observer entries only contain changed intersections.
      observer = new IntersectionObserver(
        () => {
          const current = sections.find((section) => {
            const box = section.getBoundingClientRect();
            return box.top <= readingLine && box.bottom > readingLine;
          });
          setActive(current?.id ?? "");
        },
        {
          rootMargin: `-${readingLine}px 0px -${window.innerHeight - readingLine - 2}px 0px`,
        },
      );
      for (const section of sections) observer.observe(section);
    }
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", observeSections, {
        once: true,
      });
    } else {
      observeSections();
    }
    window.addEventListener("resize", observeSections);
    return () => {
      observer?.disconnect();
      document.removeEventListener("DOMContentLoaded", observeSections);
      window.removeEventListener("resize", observeSections);
    };
  }, []);
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
        {[
          { id: "services", label: "Services" },
          { id: "work", label: "Work" },
          { id: "contact", label: "Contact" },
        ].map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            aria-current={active === id ? "location" : undefined}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
