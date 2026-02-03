let response: any = "4343";
let numeric: number | undefined = (response as string).length;
console.log(numeric);
// Type assertion means:
// “Trust me, TypeScript — I know the type better than you.”
type Book = {
  name: string;
};

let bookString = JSON.stringify({ name: "Wings of Fire" });
let obj = JSON.parse(bookString) as Book;
console.log(obj.name); // Wings of Fire

try {
} catch (error) {
  if (error instanceof Error) {
    console.log(error?.message);
  }
  console.log("error :", error);
}

const data: unknown | number = "Pranav Varpe";
if (typeof data === "string") {
  console.log(data.toLowerCase());
} else {
  if (typeof data == "number") {
    console.log(data + 3);
  }
}

function runForever(): never {
  // will NEVER return a value.
  while (true) {
    console.log("Running...");
  }
}
