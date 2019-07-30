function increment() {
    return { type: 'INCREMENT' }
}
function decrement() {
    return { type: 'DECREMENT' } as const
}
const x = increment()
const y = decrement()