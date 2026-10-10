import { expect, test } from "@playwright/test";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { ProjectEntry } from "../src/components/selected-work";
import { projects, type Project } from "../src/content/portfolio";

test("Cloak keeps its video and source available while the live demo is pending", async ({
  page,
}) => {
  await page.goto("/#cloak-heading");
  const cloak = page.getByRole("article", { name: "Cloak", exact: true });
  await expect(cloak.getByRole("img")).toBeVisible();
  await expect(cloak.getByText(/fictional demo data/)).toBeVisible();
  await expect(
    cloak.getByRole("link", { name: "Watch Cloak motion video" }),
  ).toHaveAttribute("href", "https://vt.tiktok.com/ZSbvj6Bhr/");
  await expect(
    cloak.getByRole("link", { name: "View Cloak source" }),
  ).toHaveAttribute("href", "https://github.com/Jedddy/appbuilders-ceres");
  await expect(
    cloak.getByRole("button", { name: "Open Cloak demo" }),
  ).toBeDisabled();
  await expect(cloak.getByRole("link", { name: /demo/ })).toHaveCount(0);
  await expect(cloak.getByText(/Live demo temporarily unavailable/)).toBeVisible();
});

test("hardware evidence identifies the diagram and preserves the firmware source", async ({
  page,
}) => {
  await page.goto("/");
  const drawer = page.getByRole("article", {
    name: "Smart Fingerprint Unlock Drawer",
    exact: true,
  });
  await expect(
    drawer.getByText("Illustrative diagram", { exact: true }),
  ).toBeVisible();
  await expect(
    drawer.getByText("Fingerprint sensor", { exact: true }),
  ).toBeVisible();
  await expect(drawer.getByRole("link", { name: /source/ })).toHaveAttribute(
    "href",
    projects[2].sourceUrl,
  );
  await expect(drawer.getByRole("link", { name: /demo/ })).toHaveCount(0);
});

test("failed image is replaced while project context and source remain", async ({
  page,
}) => {
  await page.route("**/_next/image?*", (route) =>
    route.request().url().includes("ledger") ? route.abort() : route.continue(),
  );
  await page.goto("/");
  const ledger = page.getByRole("article", { name: "Ledger", exact: true });
  await ledger.scrollIntoViewIfNeeded();
  await expect(ledger.getByText(/project image couldn’t load/)).toBeVisible();
  await expect(ledger.getByRole("img")).toHaveCount(0);
  await expect(
    ledger.getByRole("heading", { name: "Ledger", exact: true }),
  ).toBeVisible();
  await expect(ledger.getByText(/Example project and tasks/)).toBeVisible();
  await expect(
    ledger.getByRole("link", { name: "View Ledger source" }),
  ).toHaveAttribute("href", projects[0].sourceUrl);
});

test("all media variants preserve the project flow independently of demo availability", () => {
  const base: Project = {
    ...projects[2],
    demo: { type: "unavailable", note: "Demo currently unavailable." },
  };
  const text = renderToStaticMarkup(
    createElement(ProjectEntry, {
      project: {
        ...base,
        media: { type: "text", note: "Photos are pending." },
      },
    }),
  );
  expect(text).toContain("Photos are pending.");
  expect(text).toContain(base.summary);
  expect(text).toContain(base.sourceUrl);
  expect(text).not.toContain("<img");
  expect(text).not.toContain("Open Smart Fingerprint Unlock Drawer demo");
  const diagram = renderToStaticMarkup(
    createElement(ProjectEntry, { project: base }),
  );
  expect(diagram).toContain("Illustrative diagram");
  const image = renderToStaticMarkup(
    createElement(ProjectEntry, {
      project: {
        ...base,
        media: {
          type: "image",
          src: "/projects/ledger.webp",
          width: 1268,
          height: 713,
          alt: "Fixture image for media replacement",
          caption: "Real media replacement fixture.",
        },
      },
    }),
  );
  expect(image).toContain("Fixture image for media replacement");
  expect(image).toContain("Real media replacement fixture.");
  expect(image).not.toContain("Illustrative diagram");
  expect(image).toContain(base.sourceUrl);
});
