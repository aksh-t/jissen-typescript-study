function getFormattedValue(value: number | null) {
    if (value === null) return '-- pt'
    return `${value.toFixed(1)}pt`
}
console.log(getFormattedValue(0.1))
console.log(getFormattedValue(0))
console.log(getFormattedValue(null))
