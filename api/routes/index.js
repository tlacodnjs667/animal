const express = require('express');
const router = express.Router();

const spotRouter = require('./spotRouter');
const commentRouter = require('./commentRouter');
const keywordRouter = require('./keywordRouter');

router.use('/spot', spotRouter);
router.use('/comment', commentRouter);
router.use('/keyword', keywordRouter);

module.exports = router;
