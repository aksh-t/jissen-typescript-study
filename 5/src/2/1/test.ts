const Test = {}
interface Test {}
namespace Test {}

const value1 = 'test'
// let value1 = 'test'
// function greet() {}
// const greet = 'hello'

interface User {
    name: string
}
interface User {
    age: number
}

// type User = {
//     name: string
// }
// type User ={
//     age: number
// }

interface Test {
    value: string
}
namespace Test {
    export interface Properties {
        name: string
    }
}

const test: Test = {
    value: 'value'
}
const properties: Test.Properties = {
    name: 'Taro'
}
