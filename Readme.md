1️⃣ What is the difference between var, let, and const?

Answer:
    var is the older way of declaring variables and it is function-scoped, which means it can sometimes create confusion in larger programs. let is block-scoped, so it only works inside the block where it is declared, which makes the code easier to manage. const is also block-scoped like let, but its value cannot be reassigned after it is declared. Because of this, let and const are mostly used in modern JavaScript instead of var.

2️⃣ What is the spread operator (...)?

Answer:
    The spread operator (...) is used to expand or copy elements of an array or object. It helps to combine arrays, copy arrays, or pass multiple values easily. For example, if we have two arrays, we can merge them using the spread operator. It makes the code shorter and easier to read compared to older methods.

3️⃣ What is the difference between map(), filter(), and forEach()?

Answer:
    map(), filter(), and forEach() are array methods used to work with array elements.
    map() is used when we want to transform each element of an array and return a new array.
    filter() is used when we want to select only certain elements based on a condition and it also returns a new array.
    forEach() is used to run a function for each element in the array, but it does not return a new array. It is mostly used for performing actions like printing values or updating something.

4️⃣ What is an arrow function?

Answer:
    An arrow function is a shorter way to write functions in JavaScript using the => symbol. It was introduced in ES6 to make the syntax cleaner and easier to read. Arrow functions are often used for small functions, especially in array methods like map() or filter().
    
Example:
    const add = (a, b) => a + b;

5️⃣ What are template literals?

Answer:
    Template literals are a way to create strings in JavaScript using backticks (`) instead of quotes. They allow us to easily include variables and expressions inside a string using ${}. This makes the code more readable and convenient compared to normal string concatenation.

Example:
    const name = "Ahmed";
    console.log(`My name is ${name}`);