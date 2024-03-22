const { userRegistration, allUserView } = require('../controllers/user.controller')

const router = require('express').Router()

router.post('/register', userRegistration)
router.get('/getAll', allUserView)

module.exports = router