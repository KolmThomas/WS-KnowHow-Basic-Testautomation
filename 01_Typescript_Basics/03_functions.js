// 🧪 03_functions.ts
// In this file, you will learn what a function is.
// A function is like a mini-program that does one job.
// You can use it again and again with different inputs.
// Example: A function that says hello to someone
// 'greet' is the name of the function.
// It takes one input: a name (text).
// It shows a greeting using that name.
function greet(name) {
    console.log("Hello, " + name + "!");
}
// Now we use (call) the function with different names:
greet("Anna");
greet("Ben");
// Another example: A function that adds two numbers
function add(a, b) {
    return a + b; // 'return' gives back the result
}
// We use the function and save the result
var result = add(3, 4);
console.log("3 + 4 =", result);
