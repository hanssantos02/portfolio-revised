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

function Hub({ x, y, radius = 46 }: { x: number; y: number; radius?: number }) {
  return (
    <g className="map-hub">
      <circle cx={x} cy={y} r={radius} />
      <path
        d={`M${x - 20} ${y - 20}V${y + 20}M${x + 20} ${y - 20}V${y + 20}M${x - 20} ${y}H${x + 20}M${x - 10} ${y + 20}V${y + 5}M${x + 10} ${y - 20}V${y - 5}`}
      />
    </g>
  );
}

function SystemMap({ selected }: { selected: number }) {
  return (
    <>
      <svg
        viewBox="0 0 760 310"
        fill="none"
        aria-hidden="true"
        className="system-map"
      >
        <g className="map-guides" stroke="currentColor" strokeWidth="1">
          <path d="M24 24H44M24 24V44M736 24H716M736 24V44M24 286H44M24 286V266M736 286H716M736 286V266" />
          <circle cx="380" cy="150" r="73" strokeDasharray="2 9" />
        </g>
        {[
          "M200 93H258L305 140H334",
          "M560 93H502L455 140H426",
          "M200 220H258L305 160H334",
          "M560 220H502L455 160H426",
        ].map((path, index) => (
          <path
            key={`${index}-${selected}`}
            d={path}
            pathLength="1"
            className={`map-path ${selected === index ? "is-selected" : ""}`}
          />
        ))}
        <Hub x={380} y={150} />
        {views.map((view, index) => (
          <g
            key={view.label}
            transform={`translate(${index % 2 ? 560 : 62}, ${index > 1 ? 174 : 45})`}
            className={`map-node ${selected === index ? "is-selected" : ""}`}
          >
            <CapabilityDrawing index={index} />
            <text x="69" y={index > 1 ? 113 : -16} textAnchor="middle">
              {view.label.toUpperCase()}
            </text>
          </g>
        ))}
      </svg>
      <svg
        viewBox="0 0 360 185"
        fill="none"
        aria-hidden="true"
        className="mobile-system-map"
      >
        <path
          key={selected}
          d="M162 91H243"
          pathLength="1"
          className="map-path is-selected"
        />
        <g transform="translate(24, 45)" className="map-node is-selected">
          <CapabilityDrawing index={selected} />
          <text x="69" y="-16" textAnchor="middle">
            {views[selected].label.toUpperCase()}
          </text>
        </g>
        <circle
          className="map-guides"
          cx="285"
          cy="91"
          r="51"
          stroke="currentColor"
          strokeDasharray="2 7"
        />
        <Hub x={285} y={91} radius={36} />
      </svg>
    </>
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
      <div className="explorer-toolbar">
        <span className="explorer-name">Connected capabilities</span>
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
        <div className="sketch-stage">
          <SystemMap selected={selected} />
        </div>
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
      <p className="sketch-note">
        Illustrative service map · explore how the pieces connect
      </p>
    </div>
  );
}
