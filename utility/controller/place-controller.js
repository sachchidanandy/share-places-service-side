const { v4: uuidv4 } = require('uuid');

const HttpError = require('../modals/HttpError');
const Constant = require('../config/Constant');

let DUMMY_DATA = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world!',
        imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipNje5_Im-gYAMhz5EnQinoIS8ZBaTFawVzcewTz=w408-h271-k-no',
        address: '20 W 34th St, New York, NY 10001, United States',
        location: {
          lat: 40.7484405,
          lng: -73.9856644
        },
        creator: 'u1'
    },
];

const getPlacesByUserId = (req, res, next) => {
    const userId = req.params.uid;
    if (!userId) {
        return next(new HttpError('Invalid userId', Constant.BAD_REQUEST));
    }

    const places = DUMMY_DATA.filter(data => data.creator === userId);
    return res.json({places});
};

const getPlaceByPlaceId = (req, res, next) => {
    const productId = req.params.pid;
    if (!productId) {
        return next(new HttpError('Invalid productId', Constant.BAD_REQUEST));
    }

    const places = DUMMY_DATA.filter(data => data.id === productId);
    return res.json({places});
};

const updatePlaceDetail = (req, res, next) => {
    const productId = req.params.pid;
    const { title, description } = req.body;
    if (!productId) {
        return next(new HttpError('Invalid productId', Constant.BAD_REQUEST));
    }

    const places = DUMMY_DATA.find(data => data.id === productId);
    const placeIndex = DUMMY_DATA.findIndex(data => data.id === productId);
    places['title'] = title ? title : places['title'];
    places['description'] = description ? description : places['description'];
    DUMMY_DATA[placeIndex] = places;
    return res.json({message: 'Record updated successfully'});
};

const deletePlaceDetail = (req, res, next) => {
    const productId = req.params.pid;
    if (!productId) {
        return next(new HttpError('Invalid productId', Constant.BAD_REQUEST));
    }

    DUMMY_DATA = DUMMY_DATA.filter(data => data.id !== productId);
    return res.json({message: 'Record deleted successfully'});
};

const addNewPlaceDetail = (req, res, next) => {
    const {
        title,
        description,
        imageUrl,
        address,
        location,
        creator
    } = req.body;
    const placeDetail = {
        id: uuidv4(),
        title,
        description,
        imageUrl,
        address,
        location: {
          lat: location['lat'],
          lng: location['lng']
        },
        creator: 'u1'
    };

    DUMMY_DATA.push(placeDetail);
    return res.status(Constant.CREATED).json({message: 'Record created successfully'});
};

exports.getPlacesByUserId = getPlacesByUserId;
exports.getPlaceByPlaceId = getPlaceByPlaceId;
exports.updatePlaceDetail = updatePlaceDetail;
exports.deletePlaceDetail = deletePlaceDetail;
exports.addNewPlaceDetail = addNewPlaceDetail;
