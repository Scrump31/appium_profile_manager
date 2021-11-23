import { config } from '../wdio.shared.conf'

// ============
// Specs
// ============
config.specs = ['./test/specs/**/*.spec.ts']
config.exclude = []

// =============================
// Browserstack specific config
// =============================
// User configuration
config.user = process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME'
config.key = process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY'

config.capabilities = [
  {
    device: 'Samsung Galaxy S21',
    os_version: '11.0',
    app: process.env.BROWSERSTACK_APP_ID || 'BROWSERSTACK_APP_ID',
  },
  {
    device: 'Samsung Galaxy S10',
    os_version: '9.0',
    app: process.env.BROWSERSTACK_APP_ID || 'BROWSERSTACK_APP_ID',
  },
]
exports.config = config
