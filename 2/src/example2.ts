function taxed(amount): number {
    return amount * 1.1
}
function fee(amount): number {
    return amount * 1.4
}
function price(amount): number {
    return `${fee(amount)}`
}

const demand = '¥' + taxed(price(1000)) // ¥NaN