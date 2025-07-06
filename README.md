# WebdriverIO Test Automation Project

This project uses WebdriverIO for end-to-end testing with Allure reporting.

## Setup

```bash
npm install
```

## Running Tests

```bash
npm run wdio
```

## Allure Reports

This project is configured with Allure Reporter for comprehensive test reporting.

### Available Scripts

- `npm run wdio` - Run the tests
- `npm run report:generate` - Generate HTML report from test results
- `npm run report:open` - Open the generated report in browser
- `npm run report:serve` - Serve the report on a local server

### Workflow

1. **Run tests**: `npm run wdio`
2. **Generate report**: `npm run report:generate`
3. **View report**: `npm run report:open`

Or use the combined approach:
```bash
npm run wdio && npm run report:generate && npm run report:open
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

## Project Structure

```
wdio/
├── test/
│   ├── pageobjects/     # Page Object Models
│   ├── specs/          # Test specifications
│   └── utils/          # Utility functions
├── allure-results/     # Test results (generated)
├── allure-report/      # HTML reports (generated)
├── wdio.conf.ts        # WebdriverIO configuration
└── package.json        # Dependencies and scripts
``` 