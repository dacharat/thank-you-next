require('dotenv').config()

module.exports = {
  env: {
    STEP: process.env.MY_STEP,
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    MY_SECRET: '123456',
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    API_ENDPOINT: '/myapi/version/1',
  },
}
