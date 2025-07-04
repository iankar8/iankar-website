# E2E & QA Test Suite

Comprehensive Playwright + Axe accessibility testing suite for iankar.com ensuring WCAG AA compliance and optimal performance on 3G networks.

## 🎯 Test Coverage

### Accessibility Tests (`accessibility.spec.ts`)
- **No Axe violations** across all pages
- **WCAG 2.1 AA compliance** 
- **Keyboard navigation** support
- **Screen reader compatibility**
- **Color contrast** validation
- **Focus management** testing
- **Form accessibility** validation
- **ARIA attributes** verification

### Performance Tests (`performance.spec.ts`)
- **LCP < 2.5s** on 3G emulation
- **CLS < 0.1** layout stability
- **FID < 100ms** interaction responsiveness
- **Font loading** without layout shifts
- **Image optimization** validation
- **Core Web Vitals** monitoring

### User Interaction Tests (`user-interactions.spec.ts`)
- **Cross-page navigation**
- **Form handling & validation**
- **Responsive design** testing
- **Dynamic content loading**
- **Keyboard navigation**
- **External link handling**

## 🚀 Quick Start

### Prerequisites
```bash
npm install
npx playwright install
```

### Run All Tests
```bash
npm run test:e2e
```

### Run Specific Test Suites
```bash
# Accessibility only
npm run test:accessibility

# Performance only  
npm run test:performance

# Performance on 3G emulation
npm run test:performance:3g
```

### Interactive Test Running
```bash
# Run with UI
npm run test:e2e:ui

# Run in headed mode
npm run test:e2e:headed
```

## 📊 Test Configuration

### Browsers Tested
- **Chromium** (Desktop)
- **Firefox** (Desktop) 
- **WebKit/Safari** (Desktop)
- **Mobile Chrome** (Pixel 5)
- **Mobile Safari** (iPhone 12)
- **Performance 3G** (Chromium with 3G emulation)

### Network Emulation (3G)
- **Download**: 1.6 Mbps
- **Upload**: 750 kbps  
- **Latency**: 300ms RTT

## 🔍 Key Metrics & Constraints

### Performance Targets
| Metric | Target | Test Coverage |
|--------|---------|---------------|
| LCP | < 2.5s | ✅ All pages on 3G |
| CLS | < 0.1 | ✅ All pages + font loading |
| FID | < 100ms | ✅ Interactive elements |

### Accessibility Standards
| Standard | Coverage |
|----------|----------|
| WCAG 2.1 AA | ✅ Full compliance |
| Axe-core rules | ✅ Zero violations |
| Keyboard navigation | ✅ All interactive elements |
| Screen readers | ✅ ARIA attributes |
| Color contrast | ✅ 4.5:1 minimum ratio |

## 🤖 CI/CD Integration

Tests run automatically on:
- **Push to main/develop**
- **Pull requests**
- **Manual workflow dispatch**

### GitHub Actions Workflow
- **Build & Unit Tests**: Jest test suite
- **E2E Tests**: Cross-browser Playwright tests
- **Performance Tests**: 3G emulation validation
- **Accessibility Audit**: Axe-core full scan
- **Quality Gate**: Combined pass/fail status

### Test Reports
- **HTML Reports**: Detailed test results with screenshots
- **JUnit XML**: CI integration format
- **Accessibility Summary**: WCAG compliance status
- **Performance Metrics**: Core Web Vitals data

## 📁 Test Structure

```
e2e/
├── accessibility.spec.ts    # Axe + WCAG compliance
├── performance.spec.ts      # Core Web Vitals + 3G
├── user-interactions.spec.ts # Functional testing
└── README.md               # This file
```

## 🛠 Development Guidelines

### Adding New Tests
1. Follow existing test patterns
2. Use descriptive test names
3. Include accessibility checks for new features
4. Validate performance impact
5. Test responsive behavior

### Test Data
- Use realistic test data
- Avoid hardcoded values where possible
- Test both success and error states
- Include edge cases

### Debugging
```bash
# Show test report
npm run playwright:report

# Debug specific test
npx playwright test --debug accessibility.spec.ts

# Run single test
npx playwright test --grep "Homepage should not have any accessibility violations"
```

## 📈 Performance Monitoring

### Core Web Vitals Tracking
Tests automatically capture and validate:
- **Largest Contentful Paint (LCP)**
- **Cumulative Layout Shift (CLS)**  
- **First Input Delay (FID)**

### 3G Network Simulation
Realistic slow network conditions:
- Simulates real-world mobile connectivity
- Validates performance under constraints
- Ensures accessibility isn't network-dependent

## ✅ Quality Gates

All tests must pass for deployment:
1. **Zero accessibility violations**
2. **Performance targets met on 3G**
3. **Cross-browser compatibility**
4. **Mobile responsiveness**
5. **Keyboard navigation support**

## 🔧 Troubleshooting

### Common Issues
- **Flaky tests**: Increase wait times or use more specific selectors
- **Performance variance**: Run tests multiple times, check for external dependencies
- **Accessibility failures**: Use Axe DevTools for detailed violation analysis

### Local Development
```bash
# Start dev server
npm run dev

# Run tests against local server
PLAYWRIGHT_TEST_BASE_URL=http://localhost:3000 npm run test:e2e
``` 