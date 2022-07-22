const express = require('express');
const config = require('./config')
const Logger = require('./loaders/logger')
async function start() {

  let app = express()
  await require('./loaders')({ expressApp: app })

  app.listen(config.port, () => {
    Logger.info(`Server listening on port: ${config.port}`);
  }).on('error', err => {
    Logger.info(err)
    process.exit(1);
  })
}


start()
// module.exports = app;