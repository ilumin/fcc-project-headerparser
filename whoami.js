const express = require('express')
const router = express.Router()

router.get('/whoami', (req, res) => {
  const {headers} = req

  console.log('headers:', headers)

  res.send({
    software: headers['user-agent'] || undefined,
    language: headers['accept-language'] || undefined,
    ipaddress: headers['x-forwarded-for'] || req.socket.remoteAddress
  })
})

module.exports = router
