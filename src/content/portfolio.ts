export type Service = {
  id: string;
  title: string;
  description: string;
};

export type ProjectMedia =
  | {
      type: "image";
      src: string;
      width: number;
      height: number;
      alt: string;
      caption: string;
    }
  | { type: "diagram"; id: "smart-drawer"; caption: string }
  | { type: "text"; note: string };

export type ProjectDemo =
  | { type: "available"; url: string }
  | { type: "unavailable"; note: string };

export type Project = {
  id: string;
  title: string;
  kind: "Personal web project" | "Personal embedded project";
  summary: string;
  details: string[];
  sourceUrl: string;
  media: ProjectMedia;
  demo: ProjectDemo;
  evidence: { verifiedOn: string; sourceRevision: string };
};

export const services: Service[] = [
  {
    id: "web-development",
    title: "Web development",
    description: "Custom websites with clear interfaces.",
  },
  {
    id: "app-development",
    title: "App development",
    description: "Applications shaped around your workflow.",
  },
  {
    id: "electronics-engineering",
    title: "Electronics engineering",
    description: "Circuits and electronic prototypes.",
  },
  {
    id: "embedded-systems",
    title: "Embedded systems",
    description: "Firmware that connects software and hardware.",
  },
];

export const projects: Project[] = [
  {
    id: "ledger",
    title: "Ledger",
    kind: "Personal web project",
    summary: "A browser task organiser that keeps projects, priorities, and due dates in one place.",
    details: [
      "Create projects, add tasks, and mark them complete.",
      "Tasks include priorities and optional due dates; project data is saved in the browser with localStorage.",
    ],
    sourceUrl: "https://github.com/hanssantos02/todo-list",
    media: {
      type: "image",
      src: "/projects/ledger.webp",
      width: 1268,
      height: 713,
      alt: "Ledger showing the Portfolio demo project, with three example tasks at high, medium, and low priority and one marked complete.",
      caption: "Live demo captured on 10 October 2026. Example project and tasks entered for this screenshot.",
    },
    demo: {
      type: "available",
      url: "https://hanssantos02.github.io/todo-list/",
    },
    evidence: {
      verifiedOn: "2026-10-10",
      sourceRevision: "d393d24522104fb785cb4e438001766049c45da9",
    },
  },
  {
    id: "library",
    title: "Library",
    kind: "Personal web project",
    summary: "A browser book tracker for organising a reading list and finding the next book.",
    details: [
      "Add books with validated titles, authors, and page counts, then toggle their read status.",
      "Search by title or author and filter by read status. Changes last for the current page session.",
    ],
    sourceUrl: "https://github.com/hanssantos02/Library",
    media: {
      type: "image",
      src: "/projects/library.webp",
      width: 1268,
      height: 713,
      alt: "Library showing its three default sample books, a title or author search field, and All, Read, and To read filters.",
      caption: "Live demo captured on 10 October 2026 with its three default sample books.",
    },
    demo: {
      type: "available",
      url: "https://hanssantos02.github.io/Library/",
    },
    evidence: {
      verifiedOn: "2026-10-10",
      sourceRevision: "b922d10ffeda259151cb2b0717433a0be803edb2",
    },
  },
  {
    id: "smart-drawer",
    title: "Smart Fingerprint Unlock Drawer",
    kind: "Personal embedded project",
    summary: "ESP32 firmware for a drawer that pairs fingerprint access with a local browser dashboard.",
    details: [
      "The firmware connects a fingerprint sensor over UART and controls unlocking and automatic relocking.",
      "It supports fingerprint enrollment and a Wi-Fi browser dashboard for user management and recent activity.",
    ],
    sourceUrl: "https://github.com/hanssantos02/Smart-Fingerprint-Unlock-Drawer",
    media: {
      type: "diagram",
      id: "smart-drawer",
      caption: "Illustrative diagram of source-confirmed component relationships. Hardware photos and video are pending.",
    },
    demo: {
      type: "unavailable",
      note: "No public hardware demo is available. Explore the firmware source for implementation details.",
    },
    evidence: {
      verifiedOn: "2026-10-10",
      sourceRevision: "ba11f70731c79f7df36f25c81aa1ebf8a78c6129",
    },
  },
];

export const contact = {
  email: "hansprielasantos02@gmail.com",
  facebook: "https://www.facebook.com/profile.php?id=61576625156355",
};
