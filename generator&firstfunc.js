// First-Class Functions:
// In JavaScript, functions are treated as first-class citizens, which means they can be:
// Assigned to variables: You can assign a function to a variable, making it a function expression.
// Passed as arguments: Functions can be passed as arguments to other functions.
// Returned from other functions: A function can return another function.
// Stored in data structures: Functions can be stored in arrays or objects.

// Function assigned to a variable
const add = function (a, b) {
    return a + b;
  };
  
  // Function passed as an argument
  function calculate(func, a, b) {
    return func(a, b);
  }
  
  const result = calculate(add, 2, 3); 
  
  // Function returned from another function
  function multiplyBy(factor) {
    return function (num) {
      return num * factor;
    };
  }
  
  const double = multiplyBy(2);
  const triple = multiplyBy(3);
  
  console.log(double(5)); 
  console.log(triple(5)); 
  
  // Functions stored in an array
  const functionsArray = [add, double, triple];
  console.log(functionsArray);




// Generator Functions:
// Generator functions are a special type of function that allows you to pause and resume their execution. 
// They are defined using the function* syntax and use the yield keyword to pause their execution and 
// return a value to the caller.

function* countNumbers() {
    yield 1;
    yield 2;
    yield 3;
  }
  
  const iterator = countNumbers();
  
  console.log(iterator.next().value); 
  console.log(iterator.next().value); 
  console.log(iterator.next().value); 
  console.log(iterator.next().value); 
  
