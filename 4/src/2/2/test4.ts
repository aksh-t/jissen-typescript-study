interface User5 {
    [k: string]: () => Promise<any>
}
const user5: User5 = {
    name: 'Taro',
    age: 28,
    walk: () => {},
    talk: async () => {}
}