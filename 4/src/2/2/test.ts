type User2 = {
    name: string
    [k: string]: number | string
}
const userA: User2 = {
    name: 'Taro',
    age: 26
}

const x = userA.name
const y = userA.age