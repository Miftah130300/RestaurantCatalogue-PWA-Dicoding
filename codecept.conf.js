const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure')
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS)

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins()

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: 'e2e/**/*.test.js',
  output: 'e23/output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'http://localhost:8001',
      show: true
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'website katalog restoran - Fix copy - Copy2',
  plugins: {
    screenshotOnFail: {
      enabled: false
    }
  }
}
