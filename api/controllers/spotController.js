const spotService = require('../services/spotService');
const { catchAsync } = require('../utils/globalErrorHandler');

const getSpot = catchAsync(async (req, res) => {
	const { longitude, latitude } = req.body;

	const data = await spotService.getSpot(longitude, latitude);
	res.status(200).json({ data });
});

const createSpot = catchAsync(async (req, res) => {
	const {
		user_serial,
		address,
		longitude,
		latitude,
		content,
		spot_keyword_id,
	} = req.body;

	const { location } = req.file;

	await spotService.createSpot(
		user_serial,
		spot_keyword_id,
		address,
		longitude,
		latitude,
		content,
		location
	);

	res.status(201).json({ message: 'SPOT_CREATED' });
});

const getSpotForMain = catchAsync(async (req, res) => {
	const { user_serial } = req.body;
	const { longitude, latitude, distance } = req.query;

	const data = await spotService.getSpotForMain(
		user_serial,
		+longitude,
		+latitude,
		distance
	);

	res.status(200).json({ data });
});

const getSpotDetailForPopUp = catchAsync(async (req, res) => {
	const { user_serial } = req.body;
	const { spotId } = req.query;

	const [data] = await spotService.getSpotDetailForPopUp(user_serial, spotId);
	res.status(200).json({ data });
});

const deleteSpot = catchAsync(async (req, res) => {
	const { user_serial, spotId } = req.body;

	await spotService.deleteSpot(user_serial, spotId);

	res.status(204).json();
});

module.exports = {
	getSpot,
	createSpot,
	getSpotForMain,
	getSpotDetailForPopUp,
	deleteSpot,
};
