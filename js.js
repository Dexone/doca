//reduce
let mass = [1,2,3,4] //сумма
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

let t = [3,5,1,2,8,6] // индекс больего элемента массива

let tt = t.reduce(function(acummulator, item, index){
    let a = 0
let ind = 0 
    if (acummulator < item){
        acummulator = item
        ind = index
    }
    return index
}, 0)
console.log(tt)

let test = [[7, 2, 8], [4, 1, 6], [4, 8, 6]] //сделать одномерный массив
let go = test.reduce(function(acumulator, item, index){
    acumulator =  acumulator + ',' + item
return acumulator.split(',').map(Number)
})
console.log(go) //[ 7, 2, 8, 4, 1, 6, 4, 8, 6]
let mmm = [1,2,3,4]
console.log(mmm.map(String)) //[ '1', '2', '3', '4' ]...
//--
