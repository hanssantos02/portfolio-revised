import { expect, test } from "@playwright/test";

const email = "mailto:hansprielasantos02@gmail.com";
const facebook = "https://www.facebook.com/profile.php?id=61576625156355";

test("clients can understand services, inspect work, and contact Hans", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Digital ideas.Real-world solutions.",
  );
  for (const name of [
    "Web development",
    "App development",
    "Electronics engineering",
    "Embedded systems",
  ]) {
    await expect(
      page.getByRole("heading", { name, exact: true }),
    ).toBeVisible();
  }
  const order = await page
    .locator("main > section")
    .evaluateAll((sections) => sections.map((section) => section.id));
  expect(order).toEqual(["intro", "services", "work", "approach", "contact"]);
  await expect(page.locator('#contact a[href="' + email + '"]')).toBeVisible();
  await expect(
    page.locator('#contact a[href="' + facebook + '"]'),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: /source/i }).first(),
  ).toBeVisible();
});

for (const section of ["intro", "services", "work", "contact"]) {
  test(`direct ${section} link brings its heading into view`, async ({
    page,
  }) => {
    await page.goto(`/#${section}`);
    const heading = page.locator(`#${section} :is(h1, h2)`);
    await expect(heading).toBeInViewport();
    const box = await heading.boundingBox();
    expect(box?.y).toBeGreaterThanOrEqual(0);
  });
}

test("keyboard traversal has a visible skip link and focus treatment", async ({
  page,
}) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  const skip = page.getByRole("link", { name: "Skip to content" });
  await expect(skip).toBeFocused();
  await expect(skip).toBeVisible();
  await page.keyboard.press("Enter");
  await expect(page.locator("main")).toBeFocused();
  const reached = new Set<string>();
  for (let count = 0; count < 40; count++) {
    await page.keyboard.press("Tab");
    const focused = page.locator(":focus");
    const href = await focused.getAttribute("href");
    if (href) reached.add(href);
    const outline = await focused.evaluate(
      (node) => getComputedStyle(node).outlineStyle,
    );
    expect(outline).not.toBe("none");
    if (reached.has(email) && reached.has(facebook)) break;
  }
  expect(reached.has(email)).toBe(true);
  expect(reached.has(facebook)).toBe(true);
});

test.describe("without JavaScript", () => {
  test.use({ javaScriptEnabled: false });
  test("content and navigation remain usable", async ({ page }) => {
    await page.goto("/");
    for (const name of [
      "Web",
      "Apps",
      "Electronics",
      "Embedded",
      "Copy email address",
    ]) {
      await expect(
        page.getByRole("button", { name, exact: true }),
      ).toBeDisabled();
    }
    await expect(
      page.getByRole("heading", { name: "App development", exact: true }),
    ).toBeVisible();
    await page
      .getByRole("navigation")
      .getByRole("link", { name: "Contact", exact: true })
      .click();
    await expect(page).toHaveURL(/#contact$/);
    await expect(
      page.locator('#contact a[href="' + email + '"]'),
    ).toBeVisible();
  });
});

for (const width of [360, 390, 768, 1024, 1280, 1440, 1536, 1920]) {
  test(`layout remains usable at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
    await expect(
      page
        .getByRole("navigation")
        .getByRole("link", { name: "Contact", exact: true }),
    ).toBeVisible();
    await page
      .getByRole("navigation")
      .getByRole("link", { name: "Contact", exact: true })
      .click();
    await expect(
      page.locator('#contact a[href="' + facebook + '"]'),
    ).toBeInViewport();
  });
}

for (const width of [360, 701, 900, 1100, 1101, 1280, 1440]) {
  test(`enlarged text at ${width}px stays within its layout`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    await page.addStyleTag({ content: "html { font-size: 200% !important; }" });
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
    const headline = await page.locator("h1").boundingBox();
    const support = await page.locator(".intro-support").boundingBox();
    expect(headline!.y + headline!.height).toBeLessThanOrEqual(support!.y);
    const contact = page.locator('#contact a[href="' + email + '"]');
    await expect(contact).toBeVisible();
    const contactBox = await contact.boundingBox();
    expect(contactBox!.x + contactBox!.width).toBeLessThanOrEqual(width);
  });
}

test("reduced motion keeps all content visible and turns off smooth scrolling", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  expect(
    await page.evaluate(
      () => getComputedStyle(document.documentElement).scrollBehavior,
    ),
  ).toBe("auto");
  await expect(
    page.getByRole("heading", { name: "App development", exact: true }),
  ).toBeVisible();
  const moving = await page.locator("main *").evaluateAll(
    (nodes) =>
      nodes.filter((node) => {
        const style = getComputedStyle(node);
        return (
          style.animationName !== "none" &&
          parseFloat(style.animationDuration) > 0
        );
      }).length,
  );
  expect(moving).toBe(0);
});
