// const http = require('http');
import http from 'http';

// Creates a server constant by invoking the createServer function on the HTTP module
// Accepts an argument known as the request listener (req) and a response object (res)
const server = http.createServer((req, res) => {
  res.end('Hello World\n');
});

// To activate web server, we invoke the .listen function on the created server. 
// The last argument is a function that wil be invoked once the server is successfully running on the port. 
// The listen function is what actually keeps the Node process runninb. It's the task that will keep the Node runtime busy and not exit.
server.listen(4242, () => {
  console.log('Server is running...');
});

// we go to localhost: 4242 to see Hello World prompt. 