import { browser } from '@wdio/globals'
import { PROJECT_CONFIG } from './test/project.config.ts'

export const config = {
    runner: 'local',
    tsConfigPath: './tsconfig.json',
    
    specs: [
        './test/specs/mobile/**/*.e2e.ts'
    ],
    
    maxInstances: 1,
    
    protocol: 'http',
    hostname: 'localhost',
    port: 4723, // Appium port

    capabilities: [{
        platformName: 'Android',
        'appium:automationName': 'UiAutomator2',
        'appium:deviceName': '4200a8f2c8f273a1',
        'appium:platformVersion': '6.0.1',
        'appium:appPackage': 'com.sec.android.app.popupcalculator',
        'appium:appActivity': 'com.sec.android.app.popupcalculator.Calculator',
        'appium:udid': '4200a8f2c8f273a1',
        'appium:noReset': true,
        'appium:autoGrantPermissions': true
    }],

    logLevel: 'info',
    bail: 0,
    waitforTimeout: 5000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    framework: 'mocha',
    
    services: ['appium'],
    
    reporters: ['spec', ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
    }]],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    // Mobile-specific hooks
    before: async function () {
        console.info('Running before hook - attempting to open app');
        await (browser as any).activateApp(PROJECT_CONFIG.mobileApp);
    },

    after: async function () {
        console.info('Running after hook - attempting to close app');
        await (browser as any).terminateApp(PROJECT_CONFIG.mobileApp);
    }
}; 