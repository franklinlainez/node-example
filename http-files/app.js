const http = require("http");
const fs = require("fs");

http
  .createServer((request, response) => {
    const readStream = fs.createWriteStream("./index.html");
    // Set a header
    const OK = 200;
    response.writeHead(OK, { "Content-type": "text/html" });
    // Put all the content chunk by chunk into the response object
    readStream.pipe(response);
  })
  .listen(3000);
