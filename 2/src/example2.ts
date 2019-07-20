function taxed(amount: number): number {
    return amount * 1.1
}
function fee(amount: number): number {
    return amount * 1.4
}
function price(amount: number): number {
    // return `${fee(amount)}` // error TS2322: Type 'string' is not assignable to type 'number'.
    return fee(amount)
}

const demand = '¥' + taxed(price(1000)) // ¥NaN