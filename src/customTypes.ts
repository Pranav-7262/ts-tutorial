// type user = {
//   name: string;
//   age: number;
// };
// function greetUser(user: user): string {
//   return `Hello , ${user.name} your age is ${user.age}`;
// }
// console.log(greetUser({ name: "pranav", age: 21 }));

//Type guards
// Type guards = safe way to convert unknown or union types into a specific type

// class Order {
//   id = "O1";
// }

// function check(obj: Order | Date) {
//   if (obj instanceof Order) {
//     console.log(obj.id); // Order
//   } else {
//     console.log(obj.getTime()); // Date
//   }
// }
// check({ id: "3" });

type Success = { status: "success"; data: string };
type ErrorRes = { status: "error"; message: string };

//  if this function returns true, treat res as Success
function isSuccess(res: Success | ErrorRes): res is Success {
  return res.status === "success";
}

function handle(res: Success | ErrorRes) {
  // Type guard is used here
  if (isSuccess(res)) {
    // TypeScript NARROWS res to Success
    console.log(res.data); // data
  } else {
    // TypeScript NARROWS res to ErrorRes
    console.log(res.message); // ErrorRes
  }
}

handle({ status: "success", data: "data" });

// The isSuccess function tells TypeScript when an object is Success, allowing safe access to data or message.
