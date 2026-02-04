// Objects in TS

// type Tea = {
//     name : string,
//     price : number,
//     ingredients : string[],
//     isHot : boolean,
// }
// const myChai:Tea = {
//     name : "Ginger Tea",
//     price : 20,
//     ingredients : ["ginger" , "tea leaves" , "sugar" , "water"],
//     isHot : true
// }

type Cup = {
  size: string;
};
let smallCup: Cup = { size: "200 ml" };
let bigCup = {
  size: "350ml",
  material: "steel",
};
smallCup = bigCup; // no issue

// type Item = {name : string , quantity : number}
// type Address = {street : string , pin : number}

// type Order = {
//     id : string,
//     Item : Item[],
//     Address : Address
// }

type Tea = {
  name: string;
  price: number;
  isHot: boolean;
};
//Partials  -- >  Make all properties in DT optional ?

// const updateChai = (updates : Partial<Tea>) => {
//     console.log("updating chai with ",updates);
// }
// updateChai({price : 23}) // optional
// updateChai({isHot : false})

// Required :   Make all properties in T required
//  const updateChai = (updates : Required<Tea>) => {
//      console.log("updating chai with ",updates);
//  }
//  updateChai({
//     name : "masala",
//     price : 20,
//     isHot : true
//  })

// Pick : From T , pick a set of properties whose keys are in the union K
// type BasicChaiInfo = Pick<Tea , "name" | "price">
// const chai:BasicChaiInfo = {
//     name : "Lemon Tea",
//     price : 20
// }
