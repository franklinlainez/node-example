const fs = require("fs");
const zlib = require("zlib");

//createAZipFile();
unzipAFileIntoANewOne();

function unzipAFileIntoANewOne() {
  const gunzip = zlib.createGunzip();

  const readStream = fs.createReadStream("./example2.gz");
  const writeStream = fs.createWriteStream("./uncompressed.txt");

  readStream.pipe(gunzip).pipe(writeStream);
}

function createAZipFile() {
  const gzip = zlib.createGzip();
  const readStream = fs.createReadStream("./example.txt", "utf8");
  const writeStream = fs.createWriteStream("./example2.gz");

  // Read the file in chunks (small buffer)
  // readStream.on("data", (chunk) => {
  //   writeStream.write(chunk);
  // });

  // The same of above, but easier (pipe reads|wrote in a short buffer)
  readStream.pipe(gzip).pipe(writeStream);
}
