function expo2(amount: number) {
    return amount ** 2
}
console.log(expo2(1000))
// console.log(expo2('1,000')) // error TS2345: Argument of type '"1,000"' is not assignable to parameter of type 'number'.