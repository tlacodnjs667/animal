const express = require('express');
const router = express.Router();

const commentController = require('../controllers/commentController');

router.post('/create', commentController.createComment);
router.post('/info', commentController.getComment);
router.post('/delete', commentController.deleteComment);
router.patch('', commentController.modifyComment);

module.exports = router;
