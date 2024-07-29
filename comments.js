comments.js

// Create web server
// Create a web server that listens on port 8080. Upon receiving a request, respond with some HTML that says "I'm a full stack developer!".
// Use the createServer method from the http module to create your server.
// The createServer method takes a callback function that accepts two arguments, request and response.
// Use the response object to send back a response.

const http = require('http');

const server = http.createServer((req, res) => {
  res.end('<h1>I\'m a full stack developer!</h1>');
});

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});