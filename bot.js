let Twit = require('twit');
const fs = require('fs');
let config = require('./config');

setInterval(callback, 2*1000);
    function callback(){
        fs.readFile('data1.json', 'utf8', function (err, data) {
            if (err) throw err;
            tweets = JSON.parse(data);
            //console.log(tweets);  
            let len = tweets.length;
            let tweet = tweets[Math.floor(Math.random()*len)];  
            console.log(tweet.text);
        });
    }
    
