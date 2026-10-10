"use client";

import { useState } from "react";
import { services } from "@/content/portfolio";
import { Arrow } from "./arrow";

const views = [
  {
    label: "Web",
    words: ["Your content", "Clear interface", "Website"],
    target: "#ledger-heading",
    action: "See a web project",
  },
  {
    label: "Apps",
    words: ["Your workflow", "Useful tools", "Application"],
    target: "#contact",
    action: "Discuss an application",
  },
  {
    label: "Electronics",
    words: ["Input", "Circuit", "Output"],
    target: "#smart-drawer-heading",
    action: "Explore the drawer build",
  },
  {
    label: "Embedded",
    words: ["Sensor", "Firmware", "Hardware"],
    target: "#smart-drawer-heading",
    action: "Explore the firmware",
  },
];

function SystemSketch({ index }: { index: number }) {
  const hardware = index > 1;
  return (
    <svg
      viewBox="0 0 540 340"
      fill="none"
      aria-hidden="true"
      className="system-sketch"
    >
      <g className="sketch-traces" stroke="currentColor" strokeWidth="1.5">
        <path d="M30 110H90L125 145H185M30 230H90L125 195H185M355 145H415L450 110H510M355 195H415L450 230H510" />
        <path d="M270 30V85M270 255V310" />
        <circle cx="30" cy="110" r="5" />
        <circle cx="30" cy="230" r="5" />
        <circle cx="510" cy="110" r="5" />
        <circle cx="510" cy="230" r="5" />
        <circle cx="270" cy="30" r="5" />
        <circle cx="270" cy="310" r="5" />
      </g>
      {hardware ? (
        <g stroke="currentColor" strokeWidth="2">
          <rect x="185" y="85" width="170" height="170" />
          <rect
            x="205"
            y="105"
            width="130"
            height="130"
            className="sketch-core"
          />
          {[215, 240, 265, 290, 315].map((x) => (
            <path key={x} d={`M${x} 73V85M${x} 255V267`} />
          ))}
          {[115, 140, 165, 190, 215].map((y) => (
            <path key={y} d={`M173 ${y}H185M355 ${y}H367`} />
          ))}
          <path
            d={
              index === 2
                ? "M222 170H238L246 155L258 185L270 155L282 185L294 170H318"
                : "M242 183L225 170L242 157M298 157L315 170L298 183M280 150L260 190"
            }
            strokeWidth="3"
          />
        </g>
      ) : (
        <g stroke="currentColor" strokeWidth="2">
          <rect
            x={index === 1 ? 207 : 145}
            y="70"
            width={index === 1 ? 126 : 250}
            height="200"
            rx={index === 1 ? 12 : 0}
            className="sketch-core"
          />
          {index === 1 ? (
            <path d="M250 86H290M250 253H290" />
          ) : (
            <>
              <path d="M145 100H395" />
              <circle cx="161" cy="85" r="2" />
              <circle cx="173" cy="85" r="2" />
              <circle cx="185" cy="85" r="2" />
            </>
          )}
          <path
            d={
              index === 1
                ? "M225 118H315M225 133H278M225 205H315M225 220H295"
                : "M165 123H268M165 140H245M165 232H285"
            }
          />
          <rect
            x={index === 1 ? 225 : 165}
            y="160"
            width={index === 1 ? 90 : 105}
            height="28"
            fill="currentColor"
            fillOpacity=".15"
          />
          {index === 0 && (
            <>
              <rect
                x="292"
                y="120"
                width="82"
                height="82"
                fill="currentColor"
                fillOpacity=".08"
              />
              <path d="M304 188L320 164L335 175L359 143" />
            </>
          )}
        </g>
      )}
      <g fill="currentColor" className="sketch-packets">
        <circle cx="100" cy="120" r="4" />
        <circle cx="440" cy="220" r="4" />
      </g>
    </svg>
  );
}

export function BuildExplorer() {
  const [selected, setSelected] = useState(0);
  const view = views[selected];
  return (
    <div className="build-explorer" aria-label="Interactive service explorer">
      <div
        className="explorer-controls"
        role="group"
        aria-label="Explore a service"
      >
        {views.map((item, index) => (
          <button
            key={item.label}
            type="button"
            aria-pressed={selected === index}
            aria-controls="explorer-view"
            onClick={() => setSelected(index)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div
        id="explorer-view"
        className="explorer-view"
        aria-live="polite"
        aria-atomic="true"
      >
        <div className="sketch-stage" key={selected}>
          <SystemSketch index={selected} />
        </div>
        <div className="sketch-flow" aria-hidden="true">
          {view.words.map((word) => (
            <span key={word}>{word}</span>
          ))}
        </div>
        <div className="explorer-caption">
          <p>{services[selected].description}</p>
          <a href={view.target}>
            {view.action} <Arrow />
          </a>
        </div>
      </div>
      <p className="sketch-note">
        Illustrative service sketch · choose a discipline above
      </p>
    </div>
  );
}
