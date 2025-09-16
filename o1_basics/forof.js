const arr = [1,2,3,4,5]
for (const num of arr) {
    console.log(num)
}
//maps
const map = new Map()
map.set('PAk',"Pakistan")
map.set('FR',"France")
map.set('Ch',"China")
console.log(map)
for (const [key, value] of map) {
    console.log(key,':',value)
}