const express = require('express');
const router = express.Router();

const likeController = require('../controllers/likeController');

router.post('', likeController.createLike);

module.exports = router;
