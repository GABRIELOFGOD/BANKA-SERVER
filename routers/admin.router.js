const { adminRegistration } = require('../controllers/admin.controller')
const router = require('express').Router()

router.post('/register', adminRegistration)

module.exports = router