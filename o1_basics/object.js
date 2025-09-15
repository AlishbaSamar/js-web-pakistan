// const user = new Object()
const user = {}
user.id = "123"
const ruser = {
    email: "ruser@gmail.com",
    fullname:{
        ufullname:{
            fname:"Alishba",
            lname:"Samar"
        }
    }
}
console.log(ruser.fullname)
console.log(ruser.fullname.ufullname.fname)
const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"c" , 4:"d"}

// const obj3 = {obj1 , obj2}
const obj3 = Object.assign({},obj1,obj2)
console.log(obj3)
const obj4 = {...obj1,...obj2}
console.log(obj4)
console.log(Object.keys(ruser))
const course = {
    cname:"JS",
    price:"999",
    teacher:"Alishba"
}
const {teacher} = course
console.log(teacher)