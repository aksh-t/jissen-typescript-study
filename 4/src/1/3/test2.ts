function getFormattedValue(value: number, unit: string | null = null){
    const _value = value.toFixed(1)
    if (unit === null) return `${_value}`
    return `${value.toFixed(1)} ${unit.toUpperCase()}`
}
