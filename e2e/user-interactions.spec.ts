import { test, expect } from '@playwright/test'

test.describe('User Interactions', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
  })

  test('should navigate between pages successfully', async ({ page }) => {
    // Test navigation to About page
    await page.click('a[href="/about"]')
    await page.waitForURL('/about')
    await expect(page.locator('h1')).toContainText('About')
    
    // Test navigation to Blog page
    await page.click('a[href="/blog"]')
    await page.waitForURL('/blog')
    await expect(page.locator('h1')).toContainText('Blog')
    
    // Test navigation to Recommendations page
    await page.click('a[href="/recommendations"]')
    await page.waitForURL('/recommendations')
    await expect(page.locator('h1')).toContainText('Recommendations')
    
    // Test navigation back to Home
    await page.click('a[href="/"]')
    await page.waitForURL('/')
  })

  test('should handle newsletter subscription form', async ({ page }) => {
    // Look for newsletter form
    const emailInput = page.locator('input[type="email"]')
    const submitButton = page.locator('button[type="submit"]')
    
    if (await emailInput.count() > 0) {
      // Test empty form submission
      await submitButton.click()
      // Should show validation error or prevent submission
      
      // Test valid email
      await emailInput.fill('test@example.com')
      await submitButton.click()
      
      // Should handle submission (success or loading state)
      await page.waitForTimeout(1000)
    }
  })

  test('should handle responsive navigation', async ({ page }) => {
    // Test mobile navigation
    await page.setViewportSize({ width: 375, height: 667 })
    
    // Check if mobile menu exists and works
    const mobileMenuButton = page.locator('[aria-label*="menu"], [data-testid="mobile-menu"], button:has-text("Menu")')
    
    if (await mobileMenuButton.count() > 0) {
      await mobileMenuButton.click()
      // Check if navigation menu appears
      await expect(page.locator('nav')).toBeVisible()
    }
    
    // Test desktop navigation
    await page.setViewportSize({ width: 1920, height: 1080 })
    await expect(page.locator('nav')).toBeVisible()
  })

  test('should handle keyboard navigation', async ({ page }) => {
    // Start keyboard navigation
    await page.keyboard.press('Tab')
    
    // Check that focus moves through interactive elements
    const focusableElements = await page.locator('a, button, input, [tabindex="0"]').all()
    
    if (focusableElements.length > 0) {
      // Tab through first few elements
      for (let i = 0; i < Math.min(5, focusableElements.length); i++) {
        const focused = page.locator(':focus')
        await expect(focused).toBeVisible()
        await page.keyboard.press('Tab')
      }
    }
  })

  test('should load and display content correctly', async ({ page }) => {
    // Check essential content is present
    await expect(page.locator('h1')).toBeVisible()
    await expect(page.locator('nav')).toBeVisible()
    
    // Check for any images and ensure they load
    const images = page.locator('img')
    const imageCount = await images.count()
    
    if (imageCount > 0) {
      for (let i = 0; i < imageCount; i++) {
        const img = images.nth(i)
        await expect(img).toBeVisible()
        
        // Check if image has loaded (not broken)
        const naturalWidth = await img.evaluate((el: HTMLImageElement) => el.naturalWidth)
        expect(naturalWidth).toBeGreaterThan(0)
      }
    }
  })

  test('should handle external links properly', async ({ page }) => {
    // Find external links (links that open in new tab)
    const externalLinks = page.locator('a[target="_blank"], a[href^="http"]:not([href*="localhost"]):not([href*="iankar.com"])')
    const externalLinkCount = await externalLinks.count()
    
    if (externalLinkCount > 0) {
      const firstExternalLink = externalLinks.first()
      
      // Check that external links have proper attributes
      await expect(firstExternalLink).toHaveAttribute('target', '_blank')
      await expect(firstExternalLink).toHaveAttribute('rel', /noopener|noreferrer/)
    }
  })

  test('should handle form validation', async ({ page }) => {
    // Test any forms on the page
    const forms = page.locator('form')
    const formCount = await forms.count()
    
    if (formCount > 0) {
      const form = forms.first()
      const requiredInputs = form.locator('input[required], textarea[required]')
      const requiredCount = await requiredInputs.count()
      
      if (requiredCount > 0) {
        // Try to submit without filling required fields
        const submitButton = form.locator('button[type="submit"], input[type="submit"]')
        if (await submitButton.count() > 0) {
          await submitButton.click()
          
          // Check for validation messages
          const validationMessages = page.locator(':invalid, [aria-invalid="true"]')
          expect(await validationMessages.count()).toBeGreaterThan(0)
        }
      }
    }
  })
})

test.describe('Recommendations Page Interactions', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/recommendations')
    await page.waitForLoadState('networkidle')
  })

  test('should switch between recommendation tabs', async ({ page }) => {
    // Wait for tabs to be available
    await page.waitForSelector('[role="tablist"]', { timeout: 10000 })
    
    const tabs = page.locator('[role="tab"]')
    const tabCount = await tabs.count()
    
    if (tabCount > 1) {
      // Click on second tab
      await tabs.nth(1).click()
      
      // Check that tab becomes active
      await expect(tabs.nth(1)).toHaveAttribute('aria-selected', 'true')
      
      // Check that corresponding panel is visible
      const tabId = await tabs.nth(1).getAttribute('aria-controls')
      if (tabId) {
        const panel = page.locator(`#${tabId}`)
        await expect(panel).toBeVisible()
      }
    }
  })

  test('should load tab content dynamically', async ({ page }) => {
    const tabs = page.locator('[role="tab"]')
    const tabCount = await tabs.count()
    
    // Test each tab
    for (let i = 0; i < tabCount; i++) {
      await tabs.nth(i).click()
      
      // Wait for content to load
      await page.waitForTimeout(500)
      
      // Check that content is present
      const panels = page.locator('[role="tabpanel"]')
      const visiblePanel = panels.filter({ hasText: /.+/ }).first()
      await expect(visiblePanel).toBeVisible()
    }
  })
})

test.describe('Blog Page Interactions', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/blog')
    await page.waitForLoadState('networkidle')
  })

  test('should display blog posts and allow navigation', async ({ page }) => {
    // Check for blog post links
    const postLinks = page.locator('a[href^="/blog/"]:not([href="/blog"])')
    const postCount = await postLinks.count()
    
    if (postCount > 0) {
      // Click on first blog post
      const firstPost = postLinks.first()
      const href = await firstPost.getAttribute('href')
      
      await firstPost.click()
      
      if (href) {
        await page.waitForURL(href)
        
        // Check that blog post page loads
        await expect(page.locator('article, main')).toBeVisible()
        
        // Go back to blog listing
        await page.goBack()
        await page.waitForURL('/blog')
      }
    }
  })
})

test.describe('Performance during interactions', () => {
  test('should maintain good performance during navigation', async ({ page }) => {
    // Track performance during navigation
    await page.goto('/')
    
    const navigationStart = Date.now()
    await page.click('a[href="/about"]')
    await page.waitForLoadState('networkidle')
    const navigationTime = Date.now() - navigationStart
    
    console.log('Navigation time:', navigationTime, 'ms')
    expect(navigationTime).toBeLessThan(2000) // Should navigate quickly
  })

  test('should handle rapid interactions smoothly', async ({ page }) => {
    await page.goto('/recommendations')
    await page.waitForLoadState('networkidle')
    
    // Wait for tabs to load
    await page.waitForSelector('[role="tablist"]', { timeout: 10000 })
    
    const tabs = page.locator('[role="tab"]')
    const tabCount = await tabs.count()
    
    if (tabCount > 1) {
      // Rapidly switch between tabs
      for (let i = 0; i < 3; i++) {
        await tabs.nth(0).click()
        await page.waitForTimeout(100)
        await tabs.nth(1).click()
        await page.waitForTimeout(100)
      }
      
      // Check that final state is correct
      await expect(tabs.nth(1)).toHaveAttribute('aria-selected', 'true')
    }
  })
}) 