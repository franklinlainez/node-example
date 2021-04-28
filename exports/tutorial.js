const sum = (num1, num2) => num1 + num2;
const PI = 3.14;
class someClass {
  constructor() {
    console.log("lel");
  }
}

// Easy export
module.exports = { sum, PI, someClass };

/* 
Other ways to export
module.exports. sum = sum
module.exports = {sum:sum}
*/
