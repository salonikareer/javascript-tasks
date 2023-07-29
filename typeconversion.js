// String to Number Conversion:
const strNumber = "42";
const numberFromString = Number(strNumber);
console.log(numberFromString); // 42
console.log(typeof numberFromString); // "number"

// Number to String Conversion:
const number = 42;
const strNumber1 = String(number);
console.log(strNumber); // "42"
console.log(typeof strNumber); // "string"

// Boolean to String Conversion:
const boolValue = true;
const strBool = String(boolValue);
console.log(strBool); // "true"
console.log(typeof strBool); // "string"

// String to Boolean Conversion:
const strBoolValue = "true";
const boolValueFromString = Boolean(strBoolValue);
console.log(boolValueFromString); // true
console.log(typeof boolValueFromString); // "boolean"

// Number to Boolean Conversion:
const numberValue = 42;
const boolValueFromNumber = Boolean(numberValue);
console.log(boolValueFromNumber); // true
console.log(typeof boolValueFromNumber); // "boolean"

// Object to String Conversion:
const obj = { name: "John", age: 25 };
const strObj = JSON.stringify(obj);
console.log(strObj); // "{"name":"John","age":25}"
console.log(typeof strObj); // "string"
