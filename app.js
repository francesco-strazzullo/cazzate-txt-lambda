const ApiBuilder = require('claudia-api-builder')
const cazzatetxt = require('./cazzatetxt')
const api = new ApiBuilder()

api.get('/', async () => {
  const cazzata = await cazzatetxt.randomCazzata()
  return cazzata
})

api.get('/slack', async () => {
  const cazzata = await cazzatetxt.randomCazzata()
  return {
    response_type: 'in_channel',
    text: cazzata
  }
})

module.exports = api
