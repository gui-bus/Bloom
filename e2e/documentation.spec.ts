import { test, expect } from "@playwright/test";

test.describe("Documentation Site E2E Tests", () => {
  test("should navigate through components using the sidebar", async ({ page }) => {
    await page.goto("/");

    const sidebar = page.locator("aside");
    await expect(sidebar).toBeVisible();

    const buttonLink = sidebar.getByRole("link", { name: "Button", exact: true });
    await buttonLink.click();
    await expect(page).toHaveURL("/components/button");
    await expect(page.getByRole("heading", { name: "Button", level: 1 })).toBeVisible();

    const tabsLink = sidebar.getByRole("link", { name: "Tabs", exact: true });
    await tabsLink.click();
    await expect(page).toHaveURL("/components/tabs");
    await expect(page.getByRole("heading", { name: "Tabs", level: 1 })).toBeVisible();
  });

  test("should switch theme between light and dark", async ({ page }) => {
    await page.goto("/");

    const darkButton = page.getByRole("button", { name: "Dark" });
    const lightButton = page.getByRole("button", { name: "Light" });

    await darkButton.click();
    await expect(page.locator("html")).toHaveClass(/dark/);

    await lightButton.click();
    await expect(page.locator("html")).not.toHaveClass(/dark/);
  });

  test("should copy code on clicking the copy button in CodeBlock", async ({ page }) => {
    page.on("console", msg => console.log("BROWSER LOG:", msg.text()));
    page.on("pageerror", err => console.log("BROWSER ERROR:", err.message));

    // Mock clipboard writeText API to guarantee E2E stability in headless chromium
    await page.addInitScript(() => {
      Object.defineProperty(navigator, "clipboard", {
        value: {
          writeText: () => Promise.resolve(),
        },
        configurable: true,
      });
    });

    await page.goto("/components/button");

    const copyButton = page.getByRole("button", { name: "Copy code" }).first();
    await expect(copyButton).toBeVisible();

    await copyButton.click();

    // Verify text updates to "Copied"
    await expect(page.getByText("Copied")).toBeVisible();

    // Wait and verify it changes back to "Copy"
    await expect(page.getByText("Copy")).toBeVisible();
  });
});
