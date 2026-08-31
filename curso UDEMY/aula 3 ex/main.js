function max(){
    const n1 = 11
    const n2 = 9

    if (n1 > n2){
        console.log(`${n1} e maior que ${n2}`)
    } else {
        console.log(`${n2} e maior que ${n1}`)
    }
}
max()

console.log('########')

function maiorN(x, y){
    return x > y ? x : y

}
console.log(maiorN(10, 15))


console.log('########')
//arrow fun

const max2 = (x, y) => x > y ? x : y
console.log(max2(100,20))