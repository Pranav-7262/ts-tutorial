let value: string | number;

value = "hello";

if (typeof value === "string") {
  console.log(value.toUpperCase()); //  TypeScript knows it’s a string
} else {
  console.log(value + 10); //  TypeScript knows it’s a number
}

// With unknowns
let input: unknown;

input = "TypeScript";
input = 42;

//  Cannot call methods on unknown
// input.toUpperCase();

if (typeof input === "string") {
  console.log(input.toUpperCase()); //  safe
} else if (typeof input === "number") {
  console.log(input * 2); //  safe
}
