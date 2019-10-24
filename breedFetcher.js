const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if(error) {
      callback(`request failed, see ${error}`);
    } else if (JSON.parse(body).length === 0) {
      callback('error breed not found');
    } else {
      const data = JSON.parse(body);
      callback(data[0].description);
    }
  })
};

module.exports = { fetchBreedDescription }


