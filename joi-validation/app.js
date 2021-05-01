const Joi = require("joi");
const arrayString = ["banana", "cacao", "icecream"];
const arrayObjects = [{ example: "example1" }, { example: "example2" }];
const userInput = {
  personalInfo: {
    strettAdress: "123456789",
    city: "lol",
    state: "fl",
  },
  preferences: arrayString,
};

const personalInfoSchema = Joi.object().keys({
  strettAdress: Joi.string().trim().required(),
  city: Joi.string().trim().required(),
  state: Joi.string().trim().length(2).required(),
});

const userInputComplex = {
  personalInfo: {
    strettAdress: "123456789",
    city: "lol",
    state: "fl",
  },
  preferences: arrayObjects,
};

const preferencesSchema = Joi.array().items(Joi.string());

const schema = Joi.object().keys({
  personalInfo: personalInfoSchema,
  preferences: preferencesSchema,
});

// Validate simpler object
const result = schema.validate(userInput);
console.log(result);

// Validate more complex ones
const complexPreferencesSchema = Joi.array().items(
  Joi.object().keys({
    example: Joi.string().required(),
  })
);

const complexSchema = Joi.object().keys({
  personalInfo: personalInfoSchema,
  preferences: complexPreferencesSchema,
});

// Validate complex object
const result2 = complexSchema.validate(userInputComplex);
console.log(result2);
