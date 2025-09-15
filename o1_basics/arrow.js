const user = {
    uname: "Alishba",
    price:999,
    welcome: function(){
        console.log(`${this.uname} welcome to wensite`)
        console.log(this)
    }

}
// user.welcome()
// user.uname="Abeera"
// user.welcome()
// console.log(this)
// function one(){
//     let username = "Alishba"
//     console.log(this.username)
// }
// one()
const one = () => {
 let username = "Alishba"
    console.log(this)   
}
const add2 =(n1,n2)=> (n1+n2)

console.log(add2(3,4))