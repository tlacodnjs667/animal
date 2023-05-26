const express = require('express');
const router = express.Router();

const spotController = require('../controllers/spotController');
const photoUploader = require('../utils/NCPUploader');

router.post('', spotController.getSpot);
router.post(
	'/upload',
	photoUploader.single('photo'),
	spotController.createSpot
);

router.post('/main', spotController.getSpotForMain);
router.post('/pop', spotController.getSpotDetailForPopUp);
router.post('/delete', spotController.deleteSpot);

module.exports = router;
