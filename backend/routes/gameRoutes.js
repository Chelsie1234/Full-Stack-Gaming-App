const express = require('express');
const router = express.Router();
const GameController = require('../controllers/GameController');

// Define routes
router.get('/status', GameController.getGameStatus);
// Add other routes as needed

module.exports = router;
