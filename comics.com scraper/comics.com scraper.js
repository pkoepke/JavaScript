// Using npm module cheerio per:
// http://maxogden.com/scraping-with-node.html and http://www.storminthecastle.com/2013/08/25/use-node-js-to-extract-data-from-the-web-for-fun-and-profit/
// Could also use jsdom and htmlparser per http://stackoverflow.com/questions/7372972/how-do-i-parse-a-html-page-with-node-js

var http = require('http');
var cheerio = require('cheerio');
// console.log(cheerio); // Logs the contents of cheerio to the console.

function doNothing() { };
function logToConsole(stuffToLog) {console.log(stuffToLog);}

var requestOptions = {
    host: 'www.paulkoepke.com',
    port: 80,
    path: '/index.html',
    method: 'GET'
}

function getHttpResponse(Opts, callback) {
        http.get(Opts, function(res) {
            var responseString = ''; // create an empty string to hold the response

        // when we get data from the web server, add it to the response string.
        res.on('data', function(chunkOfData) {
            responseString += chunkOfData;
        });

        // when the web server is done responding, log the response to the console then return the resposne string.
        res.on('end', function() {
            // console.log("responseString:\n" + responseString);
            // return responseString;
            return returnResponseString(responseString);
            });
        });
}

function returnResponseString(responseString) {
    console.log(responseString);
    return responseString;
}

var httpResponse = getHttpResponse(requestOptions);