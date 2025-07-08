export const config = {
    runner: 'local',
    tsConfigPath: './tsconfig.json',
    
    specs: [
        './test/specs/web/**/*.e2e.ts'
    ],
    
    maxInstances: 1,

    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ['--headless', '--no-sandbox', '--disable-dev-shm-usage']
        }
    }],

    logLevel: 'info',
    bail: 0,
    waitforTimeout: 5000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    framework: 'mocha',
    
    reporters: ['spec', ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
    }]],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    // Web-specific hooks
    before: async function () {
        // Web-specific setup
    },

    afterEach: async function () {
        // Web-specific cleanup
    }
}; 