const http = require("http");
const fs = require("fs");

http
  .createServer((request, response) => {
    // retrieveObject("./http-files/index.html", response, "text/html");
    // retrieveObject("./http-files/example.json", response, "application/json");
    retrieveObject("./http-files/example.png", response, "image/png");
  })
  .listen(3000);

const retrieveObject = (path, response, type) => {
  const readStream = fs.createReadStream(path);
  // Set a header
  const OK = 200;
  response.writeHead(OK, { "Content-type": type });
  // Put all the content chunk by chunk into the response object
  readStream.pipe(response);
};
