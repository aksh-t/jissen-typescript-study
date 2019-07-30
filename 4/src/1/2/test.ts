function greet(name?: string) {
    return `Hello ${name.toUpperCase()}`
}
console.log(greet())
console.log(greet('Taro'))