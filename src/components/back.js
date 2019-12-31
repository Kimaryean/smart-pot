/*var request = require('request');

request.get({
  url: 'http://192.168.137.116/'
}, function(err, response, body){
  console.log(body);
})*/

var request = require('request');
var cheerio = require('cheerio');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var http = require('http');
var fs = require('fs');

var data = {
  temperature:0.0,
  humidity:0.0
};

function ddoraisaeki(){
  request.get({
    url: 'http://192.168.43.183/'
  }, function(err, response, body){
    var $ = cheerio.load(body);

    var tem = $('.sensor').children('.temperature').text();
    //console.log(tem);

    var hum = $('.sensor').children('.humidity').text();
    //console.log(hum);

    data.temperature = tem;
    data.humidity = hum;

    console.log(data.temperature);
    console.log(data.humidity);

    app.post('/', function(req, res){
      res.send(data);
      console.log(data)
    })
  })
}

setInterval(ddoraisaeki,15000);

app.listen(3000);