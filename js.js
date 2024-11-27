//reduce
let mass = [1,2,3,4]
let mm = mass.reduce(function(accumulator, item){
    accumulator  = accumulator + item
    return accumulator
}, 0)
console.log(mm)

let a = [4, 1,6,2,9, 3] //самый большой элемент массива
let red = a.reduce(function(accumulator, item, index){
    if(accumulator < item){
    accumulator = item
}
    return accumulator
}, 0) 
console.log(red)
//--
