const express = require('express');

const HttpErrors = require('../modals/HttpError');
const {
    getPlacesByUserId,
    getPlaceByPlaceId,
    updatePlaceDetail,
    deletePlaceDetail,
    addNewPlaceDetail
} = require('../controller/place-controller');

const router = express.Router();

router.get('/user/:uid', getPlacesByUserId);
router.get('/:pid', getPlaceByPlaceId)
router.patch('/:pid', updatePlaceDetail);
router.delete('/:pid', deletePlaceDetail);
router.post('/', addNewPlaceDetail);

module.exports = router;
