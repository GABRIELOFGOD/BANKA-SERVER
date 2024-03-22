const { allAgentView, agentRegistration } = require('../controllers/agent.controller')

const router = require('express').Router()

router.get('/getAll', allAgentView)
router.post('/register', agentRegistration)

module.exports = router