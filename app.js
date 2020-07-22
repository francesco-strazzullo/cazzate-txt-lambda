const ApiBuilder = require('claudia-api-builder')
const cazzatetxt = require('./cazzatetxt')
const api = new ApiBuilder()

api.get('/', async () => {
  const cazzata = await cazzatetxt.randomCazzata()
  return cazzata
})

module.exports = api
