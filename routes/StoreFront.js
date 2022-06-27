const express = require('express')
const router = express.Router()
const storefrontCtrl = require('../controllers/StoreFront')

router.get('/products', storefrontCtrl.index)
router.get('/products/:slug', storefrontCtrl.show)

module.exports = router