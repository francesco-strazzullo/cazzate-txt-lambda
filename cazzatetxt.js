const Twit = require('twit')
const _ = require('lodash')
const { twitter } = require('./config.json')

const T = new Twit(twitter)

const list = () => new Promise((resolve, reject) => {
  T.get('statuses/user_timeline', { count: 200 }, (err, data) => {
    if (err) {
      return reject(err)
    }
    return resolve(data)
  })
})

const randomCazzata = async () => {
  const tweets = await list()
  const texts = tweets.map(t => t.text)
  return _.sample(texts)
}

module.exports = {
  randomCazzata
}
