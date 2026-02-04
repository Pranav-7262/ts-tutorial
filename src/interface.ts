// type chaiData  = {
//     type : "Masala" | "Ginger Chai" | "Elaichi Chai" ,
//     sugar : number,
//     price : number
// }
// function chai(data: chaiData)  {
//   console.log(
//     `${data.type} chai with sugar ${data.sugar} of price rupees ${data.price}`,
//   );
// }
// chai({ type: "Masala", sugar: 2, price: 20 });

interface Chai {
  //Chai is the interface name
  type: string;
  sugar: number;
  price: number;
}
// const serveChai = (chai : Chai) => {
//      console.log(
//     `${chai.type} chai with sugar ${chai.sugar} of price rupees ${chai.price}`
//   );
// }

// const myChai: Chai = {type : "Masala" , sugar : 2 , price : 20}
// serveChai(myChai)
class Tea implements Chai {
  type: string;
  sugar: number;
  price: number;

  constructor(type: string, sugar: number, price: number) {
    this.type = type;
    this.sugar = sugar;
    this.price = price;
  }
  serve() {
    console.log(
      `${this.type} chai with sugar ${this.sugar} of price rupees ${this.price}`,
    );
  }
}
const myTea = new Tea("Masala", 2, 20);
myTea.serve(); // Masala chai with sugar 2 of price rupees 20

// type TeaType = "masala" | "Ginger" | "Elaichi"
// function orderChai(tea:TeaType) {
//    console.log(tea);
// }

// Nesting tyoes
// type t1 = {
//   name : string,
//   age : number
// }
// type t2 = {
//   address : string,
//   mobile : number
// }
// type example  = t1 & t2;
// const eg:example = {
//   name : "pranav",
//   age : 21,
//   address : "kolhapur",
//   mobile : 99999990909
// }

// type User = {
//   username : string,
//   password : string,
//   bio? : string
// }
// const user:User = {
//   username : "pranav",
//   password : "pranav123",
// }
// console.log(user);
