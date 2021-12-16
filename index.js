const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000 // this is very important
var request = require("request");

var options = {
    method: 'GET',
    url: 'https://tpheroku-9839.restdb.io/rest/recettes',
    headers:
    {
        'cache-control': 'no-cache',
        'x-apikey': '5ffba6c0c4842c6df4996e561c870bcc37da8'
    }
};

app.get('/', function (req, res) {
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        res.json(body);
    });
});

app.get('add', function (res, res) {
    var options = {
        method: 'POST',
        url: 'https://tpheroku-9839.restdb.io/rest/recettes',
        headers:
        {
            'cache-control': 'no-cache',
            'x-apikey': '5ffba6c0c4842c6df4996e561c870bcc37da8',
            'content-type': 'application/json'
        },
        body: { titre: 'xyz', description: 'abc' },
        json: true
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        res.json(body);
    });
});

app.listen(PORT, function () {
    console.log('Example app listening on port ' + PORT)
});