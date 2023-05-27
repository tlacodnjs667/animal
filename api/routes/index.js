const express = require('express');
const router = express.Router();

const spotRouter = require('./spotRouter');
const commentRouter = require('./commentRouter');
const keywordRouter = require('./keywordRouter');
const likeRouter = require('./likeRouter');

router.use('/spot', spotRouter);
router.use('/comment', commentRouter);
router.use('/keyword', keywordRouter);
router.use('/like', likeRouter);

module.exports = router;
