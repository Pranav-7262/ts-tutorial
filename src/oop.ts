// class Chai {
//   flavour: string;
//   price: number;

//   constructor(flavour: string, price: number) {
//     this.flavour = flavour;
//     this.price = price;
//     console.log(this);
//   }
//   print() {
//     console.log(
//       `The chai has a ${this.flavour} flavour which wa cost of rupees ${this.price}`,
//     );
//   }
// }
// const chai = new Chai("ginger", 20);
// chai.print();

// class Chai {
//     public flavour:string = "Masala"
//     private secret = "100rs"
//     reveal() {
//         return this.secret
//     }
// }

// const c = new Chai()
// c.reveal()

// class Shop {
//     protected shopName = "chai corner"
// }
// class Branch extends Shop {
//     public getShopName() {
//         console.log(this.shopName);
//     }
//     private branchName = "teaMate"
// }
// new Branch().getShopName()

// class Cup {
//     readonly capacity: number =2;

//     constructor(capacity : number) {
//         this.capacity = capacity
//     }
// }

//GETTERS ANS SETTERS  ----->

class ModernChai {
  private _sugar = 2;
  get sugar() {
    return this._sugar;
  }

  set sugar(value: number) {
    this._sugar = value;
  }
}
const c = new ModernChai();
console.log(c.sugar);
c.sugar = 3;

class Tea {
  shopName: string = "chaicorner";
  static price: number = 34;
  public static method(): string {
    return "hello from class";
  }
  constructor(public flavour: string) {}
}
console.log(Tea.method()); // without creating object accessible (static)

//ABSTRACTION
abstract class Drink {
  abstract make(): void;
}
class MyChai extends Drink {
  make(): void {
    console.log("making a tea");
  }
}

//Inheritance Example -->

// class Animal {
//    animaltype:string  = "All"
//   sleep() {
//     console.log("Can sleep !");
//   }
// }
// class Dog extends Animal {

//   bark() {
//   super.sleep(); // 👈 call parent method
//     console.log("It can bark !!");
//   }
// }
// const dog = new Dog();
// dog.bark()
// dog.sleep()

//: Abstraction (using interface or abstract class)
interface Vehicle {
  start(): void;
}
interface Player {
  play(): void;
}
class Car implements Vehicle {
  start() {
    console.log("Car started");
  }
}
class Mahi implements Player {
  play() {
    console.log("Can Play well !");
  }
}

class Milk {
  flavour: string = "Ginger";
  price: number = 20;
  isHot: boolean = true;
}

class MyMilk {
  milk: Milk = new Milk();
}
const myMilk = new MyMilk();
