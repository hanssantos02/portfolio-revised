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
      const viewportHeight = Math.max(1, window.innerHeight);
      const readingLine = Math.round(viewportHeight * 0.35);
      const bottomMargin = Math.max(0, viewportHeight - readingLine - 2);
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
          rootMargin: `-${readingLine}px 0px -${bottomMargin}px 0px`,
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
        <svg
          className="brand-mark"
          viewBox="0 0 32 32"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M7 4V28M25 4V28M7 16H25M12 28V19M20 4V13"
            stroke="currentColor"
            strokeWidth="3"
          />
        </svg>
        Hans Santos.
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
