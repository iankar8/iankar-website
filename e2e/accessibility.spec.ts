import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test.describe('Accessibility Tests', () => {
  const pages = [
    { path: '/', name: 'Homepage' },
    { path: '/about', name: 'About Page' },
    { path: '/blog', name: 'Blog Page' },
    { path: '/recommendations', name: 'Recommendations Page' },
  ]

  pages.forEach(({ path, name }) => {
    test(`${name} should not have any accessibility violations`, async ({ page }) => {
      await page.goto(path)
      
      // Wait for page to fully load
      await page.waitForLoadState('networkidle')
      
      // Wait for any animations or dynamic content
      await page.waitForTimeout(1000)
      
      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
        .analyze()
      
      expect(accessibilityScanResults.violations).toEqual([])
    })

    test(`${name} should have proper heading hierarchy`, async ({ page }) => {
      await page.goto(path)
      await page.waitForLoadState('networkidle')
      
      const headings = await page.locator('h1, h2, h3, h4, h5, h6').all()
      
      // Should have at least one h1
      const h1Count = await page.locator('h1').count()
      expect(h1Count).toBeGreaterThanOrEqual(1)
      
      // Check heading hierarchy
      const accessibilityScanResults = await new AxeBuilder({ page })
        .withRules(['heading-order'])
        .analyze()
      
      expect(accessibilityScanResults.violations).toEqual([])
    })

    test(`${name} should have proper color contrast`, async ({ page }) => {
      await page.goto(path)
      await page.waitForLoadState('networkidle')
      
      const accessibilityScanResults = await new AxeBuilder({ page })
        .withRules(['color-contrast'])
        .analyze()
      
      expect(accessibilityScanResults.violations).toEqual([])
    })

    test(`${name} should be keyboard navigable`, async ({ page }) => {
      await page.goto(path)
      await page.waitForLoadState('networkidle')
      
      // Start from the top of the page
      await page.keyboard.press('Tab')
      
      // Check that focus is visible and logical
      const accessibilityScanResults = await new AxeBuilder({ page })
        .withRules(['focus-order-semantics', 'tabindex'])
        .analyze()
      
      expect(accessibilityScanResults.violations).toEqual([])
    })
  })

  test('Navigation should have proper ARIA attributes', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    
    // Check navigation accessibility
    const nav = page.locator('nav')
    await expect(nav).toBeVisible()
    
    // Test specific navigation accessibility rules
    const accessibilityScanResults = await new AxeBuilder({ page })
      .include('nav')
      .withRules(['landmark-one-main', 'bypass', 'skip-link'])
      .analyze()
    
    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('Forms should be accessible', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    
    // Check if newsletter form exists and test it
    const form = page.locator('form')
    if (await form.count() > 0) {
      const accessibilityScanResults = await new AxeBuilder({ page })
        .include('form')
        .withRules(['label', 'form-field-multiple-labels'])
        .analyze()
      
      expect(accessibilityScanResults.violations).toEqual([])
    }
  })

  test('Images should have alt text', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withRules(['image-alt'])
      .analyze()
    
    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('Links should have descriptive text', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withRules(['link-name'])
      .analyze()
    
    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('Should support screen readers', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withRules(['aria-allowed-attr', 'aria-required-attr', 'aria-valid-attr-value'])
      .analyze()
    
    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('Recommendations tabs should be accessible', async ({ page }) => {
    await page.goto('/recommendations')
    await page.waitForLoadState('networkidle')
    
    // Wait for tabs to load
    await page.waitForSelector('[role="tablist"]', { timeout: 10000 })
    
    // Test tab accessibility
    const accessibilityScanResults = await new AxeBuilder({ page })
      .include('[role="tablist"]')
      .withRules(['aria-required-attr', 'aria-roles'])
      .analyze()
    
    expect(accessibilityScanResults.violations).toEqual([])
    
    // Verify tabs have proper ARIA attributes
    const tabs = page.locator('[role="tab"]')
    const tabCount = await tabs.count()
    
    for (let i = 0; i < tabCount; i++) {
      const tab = tabs.nth(i)
      await expect(tab).toHaveAttribute('aria-selected')
      await expect(tab).toHaveAttribute('aria-pressed')
    }
  })

  test('Focus management should work correctly', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    
    // Test focus trapping and management
    await page.keyboard.press('Tab')
    
    const focusedElement = page.locator(':focus')
    await expect(focusedElement).toBeVisible()
    
    // Test that focus indicators are visible
    const focusStyles = await focusedElement.evaluate((el) => {
      const style = getComputedStyle(el)
      return {
        outline: style.outline,
        boxShadow: style.boxShadow,
      }
    })
    
    // Should have some form of focus indicator
    expect(focusStyles.outline !== 'none' || focusStyles.boxShadow !== 'none').toBe(true)
  })
}) 