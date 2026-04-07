// Simple Types

let name: string = "Bheemeswari";
let age: number = 20;
let isStudent: boolean = true;

console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);


// Array Type

let marks: number[] = [80, 85, 90];
console.log("Marks:", marks);


// Tuple Type

let person: [string, number] = ["Bheem", 20];
console.log("Tuple:", person);


// Enum Type

enum Course {
HTML,
CSS,
JavaScript,
TypeScript
}

let course: Course = Course.TypeScript;
console.log("Course:", course);


// Any Type

let data: any = "Hello";
data = 100;
console.log("Any Type:", data);


// Unknown Type

let value: unknown = "Test";

if (typeof value === "string") {
console.log("Unknown Type:", value.toUpperCase());
}


// Void Type

function showMessage(): void {
console.log("This is void function");
}

showMessage();


// Null & Undefined

let x: null = null;
let y: undefined = undefined;

console.log(x, y);
