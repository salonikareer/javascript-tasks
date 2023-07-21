// Instance Methods: These methods are defined within the class and are
//  available on instances of the class. They have access to 
//  instance-specific data using the this keyword.

class MyClass {
    constructor(value) {
        this.value = value;
    }

    // Instance method
    displayValue() {
        console.log(this.value);
    }
}

const instance = new MyClass(42);
instance.displayValue();
// Static Methods: Static methods are defined using the static keyword 
// within the class. They belong to the class itself and are not 
// accessible on instances. Static methods are useful for utility functions that don't rely on instance-specific data.

class MathUtility {
    static add(a, b) {
        return a + b;
    }
}

const sum = MathUtility.add(2, 3);
console.log(sum);
// Getter Methods: Getter methods are used to access the properties of an 
// object as if they were regular properties. They are defined using the 
// get keyword.

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    // Getter method
    get diameter() {
        return this.radius * 2;
    }
}

const circle = new Circle(5);
console.log(circle.diameter);
// Setter Methods: Setter methods are used to modify the properties of an
//  object as if they were regular properties. They are defined using the
//   set keyword.

class Temperature {
    constructor(celsius) {
        this.celsius = celsius;
    }

    // Setter method
    set fahrenheit(value) {
        this.celsius = (value - 32) * (5 / 9);
    }
}

const temp = new Temperature(25);
temp.fahrenheit = 68; // Calling the setter
console.log(temp.celsius); 
