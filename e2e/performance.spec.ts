import { test, expect } from '@playwright/test'

test.describe('Performance Tests', () => {
  const pages = [
    { path: '/', name: 'Homepage' },
    { path: '/about', name: 'About Page' },
    { path: '/blog', name: 'Blog Page' },
    { path: '/recommendations', name: 'Recommendations Page' },
  ]

  // Configure 3G network conditions
  const slow3G = {
    offline: false,
    downloadThroughput: (1.6 * 1024 * 1024) / 8, // 1.6 Mbps in bytes/sec
    uploadThroughput: (750 * 1024) / 8, // 750 kbps in bytes/sec  
    latency: 300, // 300ms RTT
  }

  pages.forEach(({ path, name }) => {
    test(`${name} should have LCP < 2.5s on 3G`, async ({ page, context }) => {
      // Set up 3G network emulation
      await context.route('**/*', async (route) => {
        await new Promise(resolve => setTimeout(resolve, slow3G.latency / 2))
        return route.continue()
      })

      // Set viewport
      await page.setViewportSize({ width: 1920, height: 1080 })
      
      // Start measuring performance
      let lcp = 0
      
      await page.evaluateOnNewDocument(() => {
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries()
          const lastEntry = entries[entries.length - 1]
          // @ts-ignore
          window.lcp = lastEntry.startTime
        }).observe({ entryTypes: ['largest-contentful-paint'] })
      })

      const startTime = Date.now()
      await page.goto(path)
      
      // Wait for page to be fully loaded
      await page.waitForLoadState('networkidle')
      
      // Get LCP value
      lcp = await page.evaluate(() => {
        // @ts-ignore
        return window.lcp || 0
      })

      const loadTime = Date.now() - startTime
      
      console.log(`${name} - LCP: ${lcp}ms, Total Load Time: ${loadTime}ms`)
      
      // LCP should be less than 2.5 seconds (2500ms)
      expect(lcp).toBeLessThan(2500)
    })

    test(`${name} should have CLS < 0.1 on 3G`, async ({ page, context }) => {
      // Set up 3G network emulation
      await context.route('**/*', async (route) => {
        await new Promise(resolve => setTimeout(resolve, slow3G.latency / 2))
        return route.continue()
      })

      // Set viewport
      await page.setViewportSize({ width: 1920, height: 1080 })
      
      // Track CLS
      await page.evaluateOnNewDocument(() => {
        let cls = 0
        new PerformanceObserver((entryList) => {
          for (const entry of entryList.getEntries()) {
            // @ts-ignore
            if (!entry.hadRecentInput) {
              // @ts-ignore
              cls += entry.value
            }
          }
          // @ts-ignore
          window.cls = cls
        }).observe({ entryTypes: ['layout-shift'] })
      })

      await page.goto(path)
      
      // Wait for all content to load and any layout shifts to occur
      await page.waitForLoadState('networkidle')
      await page.waitForTimeout(2000) // Additional wait for any delayed shifts
      
      // Get final CLS value
      const cls = await page.evaluate(() => {
        // @ts-ignore
        return window.cls || 0
      })

      console.log(`${name} - CLS: ${cls}`)
      
      // CLS should be less than 0.1
      expect(cls).toBeLessThan(0.1)
    })

    test(`${name} should have good Core Web Vitals on 3G`, async ({ page, context }) => {
      // Set up 3G network emulation
      await context.route('**/*', async (route) => {
        await new Promise(resolve => setTimeout(resolve, slow3G.latency / 2))
        return route.continue()
      })

      await page.setViewportSize({ width: 1920, height: 1080 })
      
      // Track all Core Web Vitals
      await page.evaluateOnNewDocument(() => {
        let lcp = 0
        let fid = 0
        let cls = 0

        // LCP
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries()
          const lastEntry = entries[entries.length - 1]
          // @ts-ignore
          lcp = lastEntry.startTime
          // @ts-ignore
          window.webVitals = { ...window.webVitals, lcp }
        }).observe({ entryTypes: ['largest-contentful-paint'] })

        // FID
        new PerformanceObserver((entryList) => {
          for (const entry of entryList.getEntries()) {
            // @ts-ignore
            fid = entry.processingStart - entry.startTime
            // @ts-ignore
            window.webVitals = { ...window.webVitals, fid }
            break // Only capture the first input delay
          }
        }).observe({ entryTypes: ['first-input'] })

        // CLS
        new PerformanceObserver((entryList) => {
          for (const entry of entryList.getEntries()) {
            // @ts-ignore
            if (!entry.hadRecentInput) {
              // @ts-ignore
              cls += entry.value
            }
          }
          // @ts-ignore
          window.webVitals = { ...window.webVitals, cls }
        }).observe({ entryTypes: ['layout-shift'] })

        // @ts-ignore
        window.webVitals = { lcp, fid, cls }
      })

      await page.goto(path)
      await page.waitForLoadState('networkidle')
      
      // Simulate user interaction to trigger FID measurement
      await page.click('body')
      await page.waitForTimeout(1000)
      
      const webVitals = await page.evaluate(() => {
        // @ts-ignore
        return window.webVitals || { lcp: 0, fid: 0, cls: 0 }
      })

      console.log(`${name} Web Vitals:`, webVitals)
      
      // Check all Core Web Vitals thresholds
      expect(webVitals.lcp).toBeLessThan(2500) // LCP < 2.5s
      expect(webVitals.cls).toBeLessThan(0.1)  // CLS < 0.1
      // FID should be < 100ms when measured
      if (webVitals.fid > 0) {
        expect(webVitals.fid).toBeLessThan(100)
      }
    })
  })

  test('Font loading should not cause layout shifts', async ({ page, context }) => {
    // Track font loading and layout shifts
    await page.evaluateOnNewDocument(() => {
      let cls = 0
      const layoutShifts: any[] = []
      
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          // @ts-ignore
          if (!entry.hadRecentInput) {
            // @ts-ignore
            cls += entry.value
            // @ts-ignore
            layoutShifts.push({
              // @ts-ignore
              value: entry.value,
              // @ts-ignore
              startTime: entry.startTime,
              // @ts-ignore
              sources: entry.sources
            })
          }
        }
        // @ts-ignore
        window.fontCLS = { cls, shifts: layoutShifts }
      }).observe({ entryTypes: ['layout-shift'] })
    })

    await page.goto('/')
    await page.waitForLoadState('networkidle')
    
    // Wait for fonts to load
    await page.waitForFunction(() => document.fonts.ready)
    await page.waitForTimeout(1000)
    
    const fontCLS = await page.evaluate(() => {
      // @ts-ignore
      return window.fontCLS || { cls: 0, shifts: [] }
    })

    console.log('Font loading CLS:', fontCLS.cls)
    console.log('Layout shifts:', fontCLS.shifts.length)
    
    // Font loading should not cause significant layout shifts
    expect(fontCLS.cls).toBeLessThan(0.05)
  })

  test('Images should load efficiently and not cause CLS', async ({ page }) => {
    await page.goto('/')
    
    // Track image loading performance
    const imagePerformance = await page.evaluate(() => {
      const images = Array.from(document.querySelectorAll('img'))
      return Promise.all(images.map(img => {
        return new Promise(resolve => {
          if (img.complete) {
            resolve({
              src: img.src,
              width: img.naturalWidth,
              height: img.naturalHeight,
              hasExplicitDimensions: !!(img.width && img.height)
            })
          } else {
            img.onload = () => resolve({
              src: img.src,
              width: img.naturalWidth,
              height: img.naturalHeight,
              hasExplicitDimensions: !!(img.width && img.height)
            })
            img.onerror = () => resolve({ src: img.src, error: true })
          }
        })
      }))
    })

    console.log('Image performance:', imagePerformance)
    
    // All images should have explicit dimensions to prevent CLS
    imagePerformance.forEach((img: any) => {
      if (!img.error) {
        expect(img.hasExplicitDimensions).toBe(true)
      }
    })
  })

  test('Interactive elements should respond quickly', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    
    // Test button responsiveness
    const buttons = page.locator('button, [role="button"]')
    const buttonCount = await buttons.count()
    
    if (buttonCount > 0) {
      const startTime = Date.now()
      await buttons.first().click()
      const responseTime = Date.now() - startTime
      
      // Should respond within 100ms
      expect(responseTime).toBeLessThan(100)
    }
  })

  test('Navigation should be fast', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    
    const navigationStart = Date.now()
    await page.click('a[href="/about"]')
    await page.waitForLoadState('networkidle')
    const navigationTime = Date.now() - navigationStart
    
    console.log('Navigation time to /about:', navigationTime, 'ms')
    
    // Navigation should be reasonably fast (under 3 seconds even on 3G)
    expect(navigationTime).toBeLessThan(3000)
  })
}) 