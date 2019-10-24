const request = require('request');
const search = process.argv[2];


request(`https://api.thecatapi.dcom/v1/breeds/search?q=${search}`, function(error, response, body) {
  if (error) {
    console.log(`error: Request Failed, check the following for details ${error}`);
  } else {
    const data = JSON.parse(body);
    if (body === '[]') {
      console.log('error, breed not found');
    } else {
      console.log(data[0].description);
    }
  }
});



