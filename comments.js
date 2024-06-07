// Create web server and listen on port 8080

// Load the http module to create an http server.
var http = require('http');
var url = require('url');
var fs = require('fs');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  var pathname = url.parse(request.url).pathname;
  console.log("Request for " + pathname + " received.");

  if(pathname === "/") {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(fs.readFileSync('./index.html'));
    response.end();
  } else if(pathname === "/comments") {
    var comments = JSON.parse(fs.readFileSync('./comments.json'));
    response.writeHead(200, {"Content-Type": "application/json"});
    response.write(JSON.stringify(comments));
    response.end();
  } else {
    response.writeHead(404, {"Content-Type": "text/html"});
    response.write("404 Not Found\n");
    response.end();
  }
});

// Listen on port 8080
server.listen(8080);

// Put a friendly message on the terminal
console.log("Server running at http://):8080/");