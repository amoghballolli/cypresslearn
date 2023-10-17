const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin');
const marge = require('mochawesome-report-generator');
const { merge } = require('mochawesome-merge');

module.exports = defineConfig({
  e2e: {
    
    watchForFileChanges : false,

    setupNodeEvents(on, config) {
      on('task', {downloadFile}),


      {
        // use mochawesome reporter as usually
        "reporter": "mochawesome",
        "reporterOptions": {
          // disable overwrite to generate many JSON reports
          "overwrite": false,
          // do not generate intermediate HTML reports
          "html": false,
          // generate intermediate JSON reports
          "json": true,
          "reportDir":"cypress/reports"
        }
      }
      // implement node event listeners here
    },

    
  },
});

// cypress.run().then(
//   () => {
//     generateReport()
//   },
//   error => {
//     generateReport()
//     console.error(error)
//     process.exit(1)
//   }
// )

function generateReport(options) {
  return merge(options).then(report => marge.create(report, options))
}