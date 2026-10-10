import { expect, test } from "@playwright/test";

test("service explorer changes its sketch and sends clients to relevant work", async ({
  page,
}) => {
  await page.goto("/");
  const explorer = page.getByRole("group", { name: "Explore a service" });
  await explorer.getByRole("button", { name: "Embedded", exact: true }).click();
  await expect(
    explorer.getByRole("button", { name: "Embedded", exact: true }),
  ).toHaveAttribute("aria-pressed", "true");
  await expect(
    explorer.getByRole("button", { name: "Web", exact: true }),
  ).toHaveAttribute("aria-pressed", "false");
  await expect(page.locator("#explorer-view")).toContainText(
    "Firmware and hardware integration that help devices sense, communicate, and respond to the world around them.",
  );
  await page.getByRole("link", { name: "Explore the firmware" }).click();
  await expect(
    page.getByRole("heading", {
      name: "Smart Fingerprint Unlock Drawer",
      exact: true,
    }),
  ).toBeInViewport();
  await explorer.getByRole("button", { name: "Apps", exact: true }).click();
  await expect(
    page.getByRole("link", { name: "Explore Cloak" }),
  ).toHaveAttribute("href", "#cloak-heading");
});

test("service explorer works with a keyboard and reduced motion", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const web = page.getByRole("button", { name: "Web", exact: true });
  await expect(web).toBeEnabled();
  await web.focus();
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("button", { name: "Apps", exact: true }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(
    page.getByRole("button", { name: "Apps", exact: true }),
  ).toHaveAttribute("aria-pressed", "true");
  expect(
    await page
      .locator(".sketch-stage")
      .evaluate((node) => getComputedStyle(node).animationName),
  ).toBe("none");
});

test("contact email can be copied with confirmation", async ({
  page,
  context,
}) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.goto("/#contact");
  await page.getByRole("button", { name: "Copy email address" }).click();
  await expect(page.getByRole("status")).toHaveText("Email copied");
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(
    "hansprielasantos02@gmail.com",
  );
});

test("clipboard failure provides a useful recovery", async ({ page }) => {
  await page.addInitScript(() =>
    Object.defineProperty(navigator, "clipboard", {
      value: { writeText: () => Promise.reject(new Error("Unavailable")) },
    }),
  );
  await page.goto("/#contact");
  await page.getByRole("button", { name: "Copy email address" }).click();
  await expect(page.getByRole("status")).toHaveText(
    "Select the email address above to copy it.",
  );
});

test("sticky navigation identifies the section in view", async ({ page }) => {
  await page.goto("/#services");
  await expect(
    page
      .getByRole("navigation")
      .getByRole("link", { name: "Services", exact: true }),
  ).toHaveAttribute("aria-current", "location");
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Work", exact: true })
    .click();
  await expect(
    page
      .getByRole("navigation")
      .getByRole("link", { name: "Work", exact: true }),
  ).toHaveAttribute("aria-current", "location");
});

test("navigation recovers after the viewport height collapses", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await expect(
    page.getByRole("button", { name: "Web", exact: true }),
  ).toBeEnabled();
  await page.setViewportSize({ width: 390, height: 1 });
  await page.evaluate(
    () => new Promise((resolve) => requestAnimationFrame(resolve)),
  );
  await page.setViewportSize({ width: 390, height: 900 });
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Services", exact: true })
    .click();
  await expect(
    page
      .getByRole("navigation")
      .getByRole("link", { name: "Services", exact: true }),
  ).toHaveAttribute("aria-current", "location");
  expect(errors).toEqual([]);
});
