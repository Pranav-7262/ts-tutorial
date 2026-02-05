const chaiFlavours: string[] = ["Masala", "Ginger", "Elaichi"]; //Array of Strings

const numbers: number[] = [23, 43, 4, 5]; //Array of nums
const rating: Array<number> = [3.4, 5.0, 4, 8];
type Chai = {
  name: string;
  price: number;
};
const menu: Chai[] = [
  // Array of objects
  {
    name: "Ginger Tea",
    price: 20,
  },
  {
    name: "elaichi tea",
    price: 20,
  },
];

const cities: readonly string[] = ["kolhapur", "pune", "satara"]; // readonly array

//MULTI-D ARRAYS -->

// const muiD: number[][] = [
//   [23, 45],
//   [3.4, 6.7],
//   [4, 6],
// ];

// let tuple: [string , number]   //  tuples
// tuple = ["pranav" , 21]

// let userInfo : [string , number , boolean?]
// userInfo = ["pranav" , 100]
// userInfo = ["varpe" , 7 , true]

//  const location:  [number , number] = [32.4,56]
location.push(34); // By default its an array !!

// const location2:  readonly[number , number] = [32.4,56]
//ENUM  ------>

enum cupSize {
  SMALL,
  MEDIUM,
  LARGE,
}
const size = cupSize.SMALL;

enum status {
  PENDING = 100,
  SERVED, // 101
  CANCELLED, // 102
}

enum chaiTye {
  MASALA = "masala",
  GINGER = "ginger",
}
function makeChai(type: chaiTye) {
  console.log(`Making : ${type}`);
}
makeChai(chaiTye.GINGER);

const enum sugar {
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
}
const s = sugar.HIGH;
