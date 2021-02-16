const axios = require('axios');

const { SUCCESS } = require('../utility/constant');

exports.getCordinatedForAddress = async address => {
    const urlToFetch = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(address)}&key=641c51bed8ab490184632ad8526e29ad&no_annotations=1&language=en`;

    try {
        const response = await axios.get(urlToFetch);
        const data = response.data;
        return (data.status.code === SUCCESS && data.results.length) ? data.results[0] : false;
    } catch (error) {
        throw error;
    }
};
