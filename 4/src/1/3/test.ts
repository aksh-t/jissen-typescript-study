function getFormattedValue(value: number, unit = 'pt'){
    return `${value.toFixed(1)} ${unit.toUpperCase()}`
}
// function getFormattedValue(value: number | null): string (+1 overload)
console.log(getFormattedValue(100))
console.log(getFormattedValue(100, 'kg'))
console.log(getFormattedValue(100, 0))