const currentDate = new Date()
const timeStamp = `${currentDate.getDate()}-${
  currentDate.getMonth() + 1
}-${currentDate.getFullYear()}_${currentDate.getHours()}.${currentDate.getMinutes()}.${currentDate.getSeconds()}`

export const config: WebdriverIO.Config = {
  specs: [],
  capabilities: [],
  logLevel: 'info',
  bail: 0,
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: [],
  framework: 'mocha',
  reporters: [
    [
      'junit',
      {
        outputDir: 'junit-report',
        outputFileFormat: function () {
          return `${timeStamp}.xml`
        },
      },
    ],
    ['allure', { outputDir: 'allure-results' }],
  ],
  mochaOpts: {
    timeout: 3 * 60 * 1000, // 3min
  },
}
