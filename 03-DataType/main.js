let varUndefined; //undefined
let varBool = true; //boolean -> true or false
let varNumber = 123; //number -> integer float decimal
let varString = 'John Doe'; //string -> text or char
let varBigInt = 1n; //bigint -> int with arbitrary precision
let varSymbol = Symbol('apa aja'); //symbol -> unique and immutable value
let varObject = {
  //object -> kumpulan dari data dgn key: value
  nama: 'John',
  umur: 21,
  hobi: ['berenang', 'berkuda'],
};
let varFunction = () => 'ini string dari function'; //fungsi

console.log('varUndefined : ' + typeof varUndefined);
console.log('varBool : ' + typeof varBool);
console.log('varNumber : ' + typeof varNumber);
console.log('varString : ' + typeof varString);
console.log('varBigInt : ' + typeof varBigInt);
console.log('varSymbol : ' + typeof varSymbol);
console.log('varObject : ' + typeof varObject);
console.log('varFunction : ' + typeof varFunction);
