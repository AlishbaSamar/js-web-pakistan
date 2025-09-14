// console.log((Math.random()*10)+1)
// const min = 10
// const max = 20
// console.log(Math.floor(Math.random() * (max - min + 1))+min)

let mydate = new Date()
console.log(mydate.toString())
let timestamp = Date.now()
console.log(Math.floor(timestamp/1000))
let newdate = new Date()
console.log(newdate.getDay())
newdate.toLocaleString('default',{
    weekday:"long",
})