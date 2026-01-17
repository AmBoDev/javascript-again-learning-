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
//conversion in the js 
// uisng the + operator we can convert the a numeric value into the string .
let na="aman" +20;
console.log(na);// what it return it return a string 
// we the other operataor it does not convert it 
let nam="30"*45;
console.log(nam);// output-1350( it return a number)
// there are three different method through which we can convert the number into the string.
//parseInt(),parseFloat(),Number()
console.log(parseInt("101", 2)); // 5
// parseInt-convert a string into an integer
console.log(parseInt("123abc"));//it will return the 123 only 
// same there is a number function which return the number only.
console.log(parseInt("34.5"));//output-34
console.log(parseFloat("34.5"));//putput-34.5;

console.log(Number("34.5"));//output-34.5
var cd="name"*20;
console.log(cd);
// a literal means writing a value  directly in the code withut creating an onstrucotr and function.
let name="Aman";
//string literal
// template literal- it is used to write the string using backtricks.
//using the template literal we can wwrite themulti line code using the backtrick
let aman=`my name is amn
singh bohra and that a multi line code i am writing `// so here we dont needto use the \n for making the next 
// line we simply achieve it using the backtrick 
console.log(aman)
let age=21;
age="my current age is 21";
// now we are learning the expression interpolationn (inserting a value and expression inside the string)
console.log(`my name is aman and my age is ${age}`);
//here we are using the backtricks whole write the variable inside the string.



