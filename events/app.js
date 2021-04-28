const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

// Event listener
eventEmitter.on("tutorial", (num1, num2) => {
  console.log(num1 + num2);
});

// Calling the event, passing parameters to it
eventEmitter.emit("tutorial", 1, 2);

//Creating a custom class that extends events
class Person extends EventEmitter {
  constructor(name) {
    super();
    this._name = name;
  }

  get name() {
    return this._name;
  }
}

let frank = new Person("Frank");
let melissa = new Person("Melissa");

melissa.on("name", () => {
  console.log("my name is " + melissa.name);
});

frank.on("name", () => {
  console.log("my name is " + frank.name);
});

frank.emit("name");
melissa.emit("name");
