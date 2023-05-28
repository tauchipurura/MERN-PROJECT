const express = require('express');
const router = express.Router();
const refreshTokenController = require('../controllers/refreshTokenControlller');

router.get('/', refreshTokenController.handleRefreshToken);

module.exports = router;