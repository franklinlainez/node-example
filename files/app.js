const fs = require("fs");

//Create a file

// fs.writeFile("example.txt", "this is an example", (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("File successfully created");
//     // specify the path, the encoding and an handler
//     fs.readFile("example.txt", "utf8", (error, file) => {
//       if (error) console.log(error);
//       else console.log(file);
//     });
//   }
// });

// Rename a file

// fs.rename("example.txt", "example2.txt", (error) => {
//   if (error) console.log(error);
//   else console.log("successfully renamed the file");
// });

// Apend data to file

// fs.appendFile("example2.txt", "Some data beign appended", (error) => {
//   if (error) console.log(error);
//   else console.log("succesfully appended data to file");
// });

// Delete a file
// fs.unlink("example2.txt", (error) => {
//   if (error) console.log(error);
//   else console.log("Successfully deleted the file");
// });
