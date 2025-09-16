
const month = 3
switch (month){
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("Feb")
        break;
    case 3:
        console.log("March")
        break;
    default:
        console.log("default")    
}
const useremail = "Alishba@gmail.com"
// falsy values
// false,0,-0,BigInt 0n,"",null,undefined,NaN
// truthy values
// "0",'false'," ",[],{},function(){}
if(useremail.length === 0) {
     console.log("Array is empty")
}
const empobj = {}
if(Object.keys(empobj).length === 0){
    console.log("Object is empty")
}
// Nullish Coalescence Operator (??): null undefined
let val1;
val1 = 5 ?? 10
console.log(val1)
val1 = null ?? 10
console.log(val1)

// Terniary Operator
condition ? true : false
const price = 100
price >=80 ? console.log("Less than 80") : console.log("more than 80")