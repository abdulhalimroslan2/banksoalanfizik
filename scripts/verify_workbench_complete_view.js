// scripts/verify_workbench_complete_view.js
const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  const page = await context.newPage();

  console.log("Navigating to http://localhost:8192...");
  await page.goto("http://localhost:8192", { waitUntil: "networkidle" });

  // Switch to Tab 3 (Pemasangan Kertas)
  console.log("Clicking Pemasangan tab...");
  const tabPemasangan = page.locator('[data-tab="hub-pemasangan"]');
  await tabPemasangan.click();
  await page.waitForTimeout(1000);

  // Take screenshot of Kertas 1 full question view
  console.log("Taking screenshot of Kertas 1 full questions...");
  const artifactDir = "/Users/halimroslan/.gemini/antigravity-ide/brain/7a7f9252-470f-42ef-9851-93f5d4b3fb59";
  await page.screenshot({ path: path.join(artifactDir, "workbench_kertas1_full_questions.png"), fullPage: false });

  // Open first skema in Kertas 1
  const firstSkemaBtn = page.locator('.btn-skema-toggle').first();
  if (await firstSkemaBtn.isVisible()) {
    console.log("Opening skema for question 1...");
    await firstSkemaBtn.click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: path.join(artifactDir, "workbench_kertas1_with_skema.png"), fullPage: false });
  }

  // Switch to Kertas 2
  console.log("Switching to Kertas 2 in workbench...");
  const k2Tab = page.locator('.paper-tab[data-paper-mode="kertas2"]');
  await k2Tab.click();
  await page.waitForTimeout(1000);

  // Take screenshot of Kertas 2 full questions view
  console.log("Taking screenshot of Kertas 2 full questions...");
  await page.screenshot({ path: path.join(artifactDir, "workbench_kertas2_full_questions.png"), fullPage: false });

  // Open skema in Kertas 2 question 1
  const k2SkemaBtn = page.locator('.btn-skema-toggle').first();
  if (await k2SkemaBtn.isVisible()) {
    console.log("Opening skema for Kertas 2 question 1...");
    await k2SkemaBtn.click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: path.join(artifactDir, "workbench_kertas2_with_skema.png"), fullPage: false });
  }

  // Test global compact view toggle
  console.log("Testing compact view toggle...");
  const toggleViewBtn = page.locator('#btn-toggle-workbench-view');
  await toggleViewBtn.click();
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(artifactDir, "workbench_compact_view.png"), fullPage: false });

  // Switch back to full view
  await toggleViewBtn.click();
  await page.waitForTimeout(500);

  console.log("All screenshots captured successfully!");
  await browser.close();
})();
