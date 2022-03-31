"use strict";

require('dotenv').config();
const https = require('https');
const hostname = "api.themoviedb.org";

module.exports.parseResponse = async (event) => {
  var body = event['body'];
  var result_list = [];
  body['results'].forEach( movie => result_list.push( movie['original_title']));

  return {
    statusCode: 200,
    body: result_list
  };
};
  
module.exports.fetchMovie = async (event) => {
  return this.httprequest().then((data) => {
    const response = {
      statusCode: 200,
      body: data,
    };
    return response;
  });
};

module.exports.httprequest = async (event) => {
  return new Promise((resolve, reject) => {
    var api_path = `/3/movie/now_playing?api_key=${process.env.TMDB_API_KEY}`;
  
    const options = {
      hostname: hostname,
      port: 443,
      path: api_path,
      method: 'GET'
    };
    const req = https.request(options, (res) => {
      if (res.statusCode < 200 || res.statusCode >= 300) {
        return reject(new Error('statusCode='+res.statusCode));
      }
      var body=[];
      res.on('data', function(chunk) {
        body.push(chunk);
      });
      res.on('end', function() {
        try {
          body = JSON.parse(Buffer.concat(body).toString());
        } catch (e) {
          reject(e)
        }
        resolve(body);
      });
    });
    req.on('error', (e) => {
      reject(e.message);
    });
    req.end();
  });    
};
