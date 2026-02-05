interface Chai {
  readonly number: number;
  flavour: string;
  price: number;
  milk?: number;
}
const Masala: Chai = {
  number: 1,

  flavour: "Ginger",
  price: 12,
};
// Masala.number = 3 //Cannot assign to 'number' because it is a read-only property

interface Vehicle {
  start(): void;
  stop(): void;
}
const myBike: Vehicle = {
  start() {
    console.log("start");
  },
  stop() {
    console.log("stop");
  },
};

interface User {
  name: string;
}

interface User {
  age: number;
}

const u: User = {
  name: "Amit",
  age: 25,
};

// GENERICS IN TS

// Generics let you write reusable, type-safe code by using type variables.
function identity<T>(value: T): T {
  return value;
}

const a = identity<number>(10); // number
const b = identity<string>("hi"); // string
identity({ name: "pranav" });

// //with Arrays
// function getFirst<T>(arr: T[]): T {
//   return arr[0];
// }

// getFirst([1, 2, 3]);        // number
// getFirst(["a", "b"]);      // string

function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}
pair("pranav", "manthan");
pair(23, "32");

//with Interfaces ---->
interface ApiResponse<T> {
  data: T;
  status: number;
}
const res: ApiResponse<{ name: string }> = {
  data: { name: "okay" },
  status: 23,
};
