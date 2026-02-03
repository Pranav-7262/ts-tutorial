let id: number | string | boolean;

id = 101; //  OK
id = "A101"; //  OK
id = true; //  Ok

const printId = (id: string | number) => {
  console.log(id);
};
printId("pranav");
printId(3434);

// let status: "success" | "error" | "loading"; with literals

// status = "success"; // ✅
// status = "done";    // ❌

//any means:
// “Turn off TypeScript for this value”

let data: any; // any type..

data = 10;
data = "hello";
data = true;
data.foo.bar(); //  no error

const orders = ["12", "34", "56", "68"];
let currOrder: string | undefined; //can be a string or undefined.

for (const order of orders) {
  if (order === "34") {
    currOrder = order;
    break;
  }
}
console.log(currOrder);
