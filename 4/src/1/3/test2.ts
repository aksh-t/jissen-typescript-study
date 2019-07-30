function getFormattedValue(value: number, unit: string | null = null){
    return `${value.toFixed(1)} ${unit.toUpperCase()}`
}
