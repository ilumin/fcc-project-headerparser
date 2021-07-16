const express = require('express')
const router = express.Router()

router.get('/whoami', (req, res) => {
  const {headers} = req

  res.send({
    software: headers['user-agent'] || undefined,
    language: headers['accept-langauge'] || undefined,
    ipaddress: headers['x-forwarded-for'] || req.socket.remoteAddress
  })
})

module.exports = router
