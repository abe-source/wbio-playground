# WebdriverIO Test Automation Project

This project uses WebdriverIO for end-to-end testing of both web and mobile applications with Allure reporting.

## Setup

```bash
npm install
```

## Running Tests

### Web Tests Only
```bash
npm run wdio:web
```

### Mobile Tests Only
```bash
npm run wdio:mobile
```

## Available Scripts

- `npm run wdio:web` - Run web tests only
- `npm run wdio:mobile` - Run mobile tests only
- `npm run report:generate` - Generate HTML report from test results
- `npm run report:open` - Open the generated report in browser
- `npm run report:serve` - Serve the report on a local server

## Allure Reports

This project is configured with Allure Reporter for comprehensive test reporting.

### Workflow

1. **Run tests**: `npm run wdio:web` or `npm run wdio:mobile`
2. **Generate report**: `npm run report:generate`
3. **View report**: `npm run report:open`

Or use the combined approach:
```bash
npm run wdio:web && npm run report:generate && npm run report:open
```

### Report Locations

- **Test Results**: `allure-results/` (raw test data)
- **HTML Reports**: `allure-report/` (generated HTML reports)

### Features

- Interactive test dashboards
- Screenshots on test failures
- Test execution trends
- Environment information
- Detailed test logs
- Parallel execution support

## Configuration

### Web Configuration (`wdio.web.conf.ts`)

### Mobile Configuration (`wdio.mobile.conf.ts`)