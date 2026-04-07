// Function with parameter and return type

function add(a: number, b: number): number {
return a + b;
}

console.log("Addition:", add(10, 20));


// Function with default parameter

function greet(name: string = "Guest"): string {
return "Hello " + name;
}

console.log(greet());
console.log(greet("Bheemeswari"));


// Arrow Function

const multiply = (a: number, b: number): number => {
return a * b;
};

console.log("Multiplication:", multiply(5, 4));


// Function returning void

function printMessage(msg: string): void {
console.log(msg);
}

printMessage("TypeScript Function Example");


// Function with optional parameter

function display(name: string, age?: number): void {
console.log("Name:", name);
console.log("Age:", age);
}

display("Bheem");
display("Bheem", 21);
