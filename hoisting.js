//in the javsscript -declaring the variable(with the var keyword) and function anywhere in
//  the code it will gonna declare on the top and this behavior is called hoisting.
console.log(a)
var a=6;//it will gonna print the undefined 
//here we can see that we declared the variable after the calling it but it will give the output undefined
//same as with  the function keyword if we define the function with the function keyword. and call 
// the function before delcearing it the function will gonna give the output because the function will gonna 
// call on the top for before it calling.
console.log(sum(3,5));
function sum(a,b){
    return a+b;
}// now here we call the function before we declearing it but it return us the output 
// so it is called hoisting .
var bar;
console.log(bar);//undefined
bar=113;
console.log(bar);//113  
var a = 1;
var a = 2;
console.log(a); // 2
var a;
console.log(a); // 2; not undefined
//redecleration
// let a=2;//block scope
// if(true){
//     var a=2;//global scope 
// }
// console.log(a);// it will throw an error because var is a global scope and let ia block scope 
// so it treated it like the let a=2 var a=2 which will give the error of redecleration 
// let a=2;
// var a=3; both are same the first one and the second one because of the var global scope
var a=2;
if(true){
    let a=2;
}
console.log(a);
// decleration and intialization 
// there are mainly two parts in the decleration and intialization
let x=20;// let x is a decleration part and =20 is the intialization part
console.log(x);
// we can define the let and var keyword without the intialization if we not intilized the value 
// it will gonna print the undefiined value.
let y;
console.log(y);
var z;
console.log(z);
//but the const variable can not  be declared without using the intialization. 
const l=20;
console.log(l);
