const axios = require('axios');
const API_KEY = require('../config/API.js');

axios.defaults.headers.common.Authorization = API_KEY.API_KEY;

const API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo';

const fetchData = (path, query, callback) => {
  axios.get(API_URL + path, query)
    .then((data) => {
      callback(data);
    }).catch((err) => {
      throw err;
    });
};


const postData = (path, query, callback) => {
  axios.post(API_URL + path, query)
    .then((res) => {
      callback(res);
    }).catch((err) => {
      console.log(err);
    });
};

const updateData = (path, query, callback) => {
  axios.put(API_URL + path, query)
    .then((res) => {
      callback(res);
    }).catch((err) => {
      console.log(err);
    });
};

const postQnA = (path, body, callback) => {
  axios.post(API_URL + path, body)
    .then((data) => {
      callback(data);
    })
    .catch((err) => {
      throw err;
    });
};

const putQnA = (path, body, callback) => {
  axios.put(API_URL + path, body)
    .then((data) => {
      callback(data);
    })
    .catch((err) => {
      throw err;
    });
};

module.exports.putQnA = putQnA;
module.exports.postQnA = postQnA;
module.exports.fetchData = fetchData;
module.exports.postData = postData;
module.exports.updateData = updateData;