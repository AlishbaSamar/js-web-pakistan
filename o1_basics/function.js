function usermessage(uname){
    if(!uname){
        return
    }
    return `${uname} just logged in`
}
// console.log(usermessage("Alishba"))
function calculateprice(...num1){//rest operator
    return num1
}
console.log(calculateprice(200,300,400))
const user = {
    uname: "Alishba",
    price: 199
}
function handleobject(anyobject){
    console.log(`Username is ${anyobject.uname} price is
         ${anyobject.price}`)
}
handleobject(user)
const myarray = [200,400,600]
function return2val(getarray){
    return getarray[1]
}
// console.log(return2val(myarray))
console.log(return2val([100,200,300]))