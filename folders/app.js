const fs = require("fs");

// Creating a new directory

// fs.mkdir("./tutorial", (error) => {
//   if (error) console.log(error);
//   else {
//     console.log("folder succesfully created");
//   }
// });

// Deleting a directory (that has no files on it)

// fs.rmdir("./tutorial", (error) => {
//   if (error) console.log(error);
//   else console.log("folder succesfully removed");
// });

// create a new directory with a file inside

// fs.mkdir("./tutorial", (error) => {
//   if (error) console.log(error);
//   else {
//     fs.writeFile("./tutorial/example.txt", "123", (error) => {
//       if (error) console.log(error);
//       else console.log("Succesfull created file");
//     });
//   }
// });

// Delete a folder with a file in it

fs.unlink("./tutorial/example.txt", (error) => {
  if (error) console.log(error);
  else
    fs.rmdir("./tutorial", (error) => {
      if (error) console.log(error);
      else console.log("folder succesfully removed");
    });
});
