const express = require('express');

const HttpErrors = require('../modals/HttpError');
const {
    getPlacesByUserId,
    getPlaceByPlaceId,
    updatePlaceDetail,
    deletePlaceDetail,
    addNewPlaceDetail
} = require('../controller/place-controller');
const { validateForRequired, validateForMinCharacter } = require('../config/validation-rules');

const router = express.Router();

router.get('/user/:uid', getPlacesByUserId);
router.get('/:pid', getPlaceByPlaceId)
router.patch('/:pid', [validateForRequired('title'), validateForMinCharacter('description', 5)], updatePlaceDetail);
router.delete('/:pid', deletePlaceDetail);
router.post('/', [validateForRequired('title'), validateForMinCharacter('description', 5), validateForRequired('address')], addNewPlaceDetail);

module.exports = router;
