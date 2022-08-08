const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners
    },
    baseUrl: 'https://www.saucedemo.com/',
    video: false,
  },
});
