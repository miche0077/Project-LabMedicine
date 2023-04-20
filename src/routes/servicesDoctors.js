const express = require('express')
const router = express.Router()

const createService = require('../controllers/services/createServices')

router.post('/api/atendimentos', createService)

module.exports = router