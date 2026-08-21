import { expect, test } from "@playwright/test";

test("navigation works and the page does not overflow", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "A foundation for clearer health information." })).toBeVisible();
  await page.getByRole("link", { name: "About" }).click();
  await expect(page).toHaveURL(/\/about$/);
  await expect(page.getByRole("heading", { name: "Information will be shared here." })).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBeTruthy();
});

test("keyboard navigation exposes a visible focus state", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "Skip to main content" })).toBeFocused();
  await expect(page.getByRole("link", { name: "Skip to main content" })).toBeVisible();
});