const readline = require("readline");
// process is a global Object provided by node
// readLine is an instance of the event Emitter by itself
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let num1 = Math.floor(Math.random() * 10 + 1);
let num2 = Math.floor(Math.random() * 10 + 1);
let answer = num1 + num2;

// Ask user through the console
rl.question(`What is ${num1} + ${num2}? \n`, (userInput) => {
  if (userInput.trim() == answer) {
    // Close the aplication
    rl.close();
  } else {
    rl.setPrompt("Incorrect response, please try again\n");
    rl.prompt();
    rl.on("line", (userInput) => {
      if (userInput.trim() == answer) rl.close();
      else {
        rl.setPrompt(`Your answer of ${userInput} is incorrect try again \n`);
        rl.prompt();
      }
    });
  }
});

// Will run when we call the method close
rl.on("close", () => {
  console.log("Correct!!!!!!");
});
