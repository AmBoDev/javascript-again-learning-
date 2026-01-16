// there are total 8 data types( what type of data a variable can stored)  in the javscript 
// boolean 
let ya="true";
console.log(typeof(ya));
console.log(ya)
// null data type
// no the js is case sensitive so we have to check the data before inserting it.
let y=null;
console.log(typeof(y));// type of null  is object 
console.log(y)
// undefined datatype
let x;
console.log(typeof(x));
console.log(x);
//Number-in the js the floating and the arthmetic number are same.
let a =24;
console.log(typeof(a));
console.log(a);
//BIG INT
// number have the range of 2^53-1
// beyond this if we want to access the number we  use the big int 
// and for the big int we use the n beyond the number or we have to use BigInt type converter
var c=15n;
console.log(typeof(c))// big int 
console.log(c);
//string
var c="aman";
console.log(c);
console.log(typeof(c));
// symbol-  it is unique data type in the js used to create unique and conflict free identifiers
let id = Symbol("id");
console.log(id);
console.log(typeof(id));
// all this dat ype are primitve datatype
// while the object is non primitve data type
// objects-it is a coolection of values
const student={
    name:"Aman",
    age:18,
    height:"6ft"
}
console.log(student.name);



