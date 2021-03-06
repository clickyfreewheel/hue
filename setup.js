require('dotenv').config()
const fs = require('fs')
const axios = require('axios').default

module.exports = {
  baseuri: process.env.HUE_BASEURI,
  lightids: process.env.LIGHTIDS.split(','),
  speed: +process.env.SPEED,

  getUsername: async () => {
    const { data } = await axios.post(`http://${process.env.HUE_BASEURI}/api`, { devicetype: 'rainbow' })
    if (data[0].error) throw Error('Please press Hue Bridge link button')
    const username = data[0].success.username
    fs.appendFile('.env', `HUE_USERNAME=${username}`, (err) => {
      if (err) throw err
    })
    return username
  }
}
