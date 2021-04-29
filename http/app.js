const http = require("http");
const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.write("Hello world from nodejs");
    response.end();
  } else {
    response.write("using some other domain");
    response.end();
  }
});

server.listen("3000");
