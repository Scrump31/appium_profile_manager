import { config } from '../wdio.shared.conf'

// ============
// Specs
// ============
config.specs = ['./test/specs/**/*.spec.js']
config.exclude = []

// =============================
// Browserstack specific config
// =============================
// User configuration
config.user = process.env.BROWSERSTACK_USER || 'BROWSERSTACK_USER'
config.key = process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY'
// Use browserstack service
config.services = ['browserstack']

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
  {
    // Set your BrowserStack config

    // Set URL of the application under test
    app: process.env.BROWSERSTACK_APP_ID || 'BROWSERSTACK_APP_ID',

    // Specify device and os_version for testing
    device: 'Google Pixel 3',
    os_version: '9.0',
  },
]

exports.config = config
