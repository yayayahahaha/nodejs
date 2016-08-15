var fs = require('fs');

function start(response) {
  console.log("Request handler 'start' was called.");
  fs.createReadStream('./index.html').pipe(response);
}

function upload(response) {
  console.log("Request handler 'upload' was called.");
  response.writeHead(200, {
    "Content-Type": "text/plain"
  });
  response.write("home");
  response.end();
}

exports.start = start;
exports.upload = upload;