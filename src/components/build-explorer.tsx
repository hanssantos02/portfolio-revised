"use client";

import { useState } from "react";
import { services } from "@/content/portfolio";
import { Arrow } from "./arrow";
import { useClientReady } from "./use-client-ready";

const views = [
  {
    label: "Web",
    target: "#ledger-heading",
    action: "See a web project",
    words: ["Content", "Interface", "Website"],
  },
  {
    label: "Apps",
    target: "#cloak-heading",
    action: "Explore Cloak",
    words: ["Workflow", "Interaction", "Application"],
  },
  {
    label: "Electronics",
    target: "#smart-drawer-heading",
    action: "Explore the drawer build",
    words: ["Input", "Circuit", "Output"],
  },
  {
    label: "Embedded",
    target: "#smart-drawer-heading",
    action: "Explore the firmware",
    words: ["Sensor", "Firmware", "Response"],
  },
];

// Service concepts, never presented as project evidence or a wiring guide.
function CapabilityDrawing({ index }: { index: number }) {
  return (
    <>
      <rect width="138" height="92" />
      {index === 0 && (
        <>
          <path d="M0 19H138M12 10H15M22 10H25M32 10H35M15 35H67M15 47H50M15 72H84" />
          <rect x="83" y="33" width="39" height="39" />
        </>
      )}
      {index === 1 && (
        <>
          <path d="M18 20H68M18 32H48M18 47H120M18 72H72" />
          <rect x="18" y="47" width="12" height="12" />
          <path d="M40 53H108M98 69L106 77L120 63" />
        </>
      )}
      {index === 2 && (
        <>
          <path d="M13 46H36L43 34L53 58L63 34L73 58L80 46H99M106 31V61M116 31V61M116 46H126" />
          <circle cx="17" cy="14" r="3" />
          <circle cx="122" cy="78" r="3" />
        </>
      )}
      {index === 3 && (
        <>
          <rect x="48" y="25" width="42" height="42" />
          <path d="M57 15V25M69 15V25M81 15V25M57 67V77M69 67V77M81 67V77M38 34H48M38 46H48M38 58H48M90 34H100M90 46H100M90 58H100M63 36L56 46L63 56M75 36L82 46L75 56" />
        </>
      )}
    </>
  );
}

// Four exploded planes share one projection. The selected plane lifts slightly.
function SystemMap({ selected }: { selected: number }) {
  return (
    <svg viewBox="0 0 480 330" className="assembly" aria-hidden="true">
      <defs>
        <pattern
          id="draft-grid"
          width="18"
          height="18"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M18 0H0V18"
            fill="none"
            stroke="currentColor"
            strokeOpacity=".12"
          />
        </pattern>
      </defs>
      <rect width="480" height="330" fill="url(#draft-grid)" />
      <g fill="none" stroke="currentColor" opacity=".48" strokeDasharray="3 5">
        <path d="M53 96V250M205 25V180M345 88V245M193 163V308" />
      </g>
      {[3, 2, 1, 0].map((index) => {
        const y = 95 + index * 45;
        return (
          <g key={index} transform={`translate(53 ${y})`}>
            <g
              className={`assembly-plane ${selected === index ? "active-plane" : ""}`}
            >
              <path
                className="plate-edge"
                d="M0 0l140 66 152-71v7L140 74 0 8Z"
              />
              <g
                transform="matrix(1.10 -.515 1.52 .715 0 0)"
                stroke="currentColor"
                strokeWidth="1.2"
              >
                <rect className="plate-face" width="138" height="92" />
                <g fill="none">
                  <CapabilityDrawing index={index} />
                </g>
              </g>
              <path d="M292 -5h19l9 -9h12" fill="none" stroke="currentColor" />
              <text x="339" y="-10">
                {views[index].label}
              </text>
            </g>
          </g>
        );
      })}
      <path
        d="M16 16h11m-5 -5v11m431 292h11m-5 -5v11"
        fill="none"
        stroke="currentColor"
      />
    </svg>
  );
}

export function BuildExplorer() {
  const ready = useClientReady();
  const [selected, setSelected] = useState(0);
  const view = views[selected];
  return (
    <div
      className="build-explorer"
      role="group"
      aria-label="Interactive service explorer"
    >
      <div className="drawing-label">
        <span>Service explorer</span>
        <span>Exploded view</span>
      </div>
      <div className="sketch-stage">
        <SystemMap selected={selected} />
      </div>
      <div className="explorer-toolbar">
        <div
          className="explorer-controls"
          role="group"
          aria-label="Explore a service"
        >
          {views.map((item, index) => (
            <button
              key={item.label}
              type="button"
              disabled={!ready}
              aria-pressed={selected === index}
              aria-controls="explorer-view"
              onClick={() => setSelected(index)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
      <div
        id="explorer-view"
        className="explorer-view"
        aria-live="polite"
        aria-atomic="true"
      >
        <div className="explorer-caption">
          <div>
            <div className="sketch-flow" aria-hidden="true">
              {view.words.map((word) => (
                <span key={word}>{word}</span>
              ))}
            </div>
            <p>{services[selected].description}</p>
          </div>
          <a href={view.target}>
            {view.action} <Arrow />
          </a>
        </div>
      </div>
      <p className="sketch-note">Illustrative service map</p>
    </div>
  );
}
