"use client";

import { useState } from "react";
import { contact } from "@/content/portfolio";

export function CopyEmail() {
  const [status, setStatus] = useState("");
  async function copy() {
    try {
      await navigator.clipboard.writeText(contact.email);
      setStatus("Email copied");
    } catch {
      setStatus("Select the email address above to copy it.");
    }
  }
  return (
    <div className="copy-email">
      <button type="button" onClick={copy}>
        Copy email address{" "}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M8 8H20V20H8zM4 16V4H16" />
        </svg>
      </button>
      <span role="status">{status}</span>
    </div>
  );
}
