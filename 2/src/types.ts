let flag: boolean = false;

let decimal: number = 256;
let hex: number = 0xfff;
let binary: number = 0b0000;
let octal: number = 0o123;

let color: string = "white";
color = 'black';
let myColor: string =  `my color is ${color}`

let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3]

let x: [string, number];
x = ["hello", 10];
// x = [10, "hello"]; // Error!

console.log(x[0].substr(1));
// console.log(x[1].substr(1)); // error TS2339: Property 'substr' does not exist on type 'number'.

// x[3] = "world"; // ErrorにならないはずがErrorになる
// x[3].toString(); // ErrorにならないはずがErrorになる
// x[6] = true; // そもそもtupleのlengthをオーバーしてると怒られる

let whatever: any = 0;
whatever = "something";
whatever = false;

// const certainlyNumbers: number[] = ['0'] // error TS2322: Type 'string' is not assignable to type 'number'.
const certainlyNumbers: number[] = [0]
const maybeNumbers: any[] = ['0']
const probablyNumbers: unknown[] = ['0']

certainlyNumbers[0].toFixed(1)
maybeNumbers[0].toFixed(1)
// probablyNumbers[0].toFixed(1) // error TS2571: Object is of type 'unknown'.

function logger(message: string): void {
    console.log(message);
}

let unusable: void = undefined;
// let unusable2: void = null; // voidにnull代入できるって書いてあるができない

let u: undefined = undefined;
let n: null = null;

function error(message: string): never {
    throw new Error(message);
}
function infiniteLoop(): never {
    while (true) {
    }
}

let objectBrace: {}
let objectType: object

objectBrace = true
objectBrace = 0
// objectType = false // error TS2322: Type 'false' is not assignable to type 'object'.
// objectType = 1 // error TS2322: Type '1' is not assignable to type 'object'.

type Tail = string
type Wing = string
type Dog = {
    tail: Tail
    bark: () => void
}
type Bird = {
    wing: Wing
    fly: () => void
}
type Kimera = Dog & Bird

function returnNever(): never {
    throw new Error()
}
let unexistenceType: string & number & boolean = returnNever()

// let problematicNumber: string & number = '0' // error TS2322: Type '"0"' is not assignable to type 'string & number'.

let value: boolean | number | string
value = false
value = 1
value = '2'

let numberOrStrings: (number | string)[]
numberOrStrings = [0, '1']
// numberOrStrings = [0, '1', false] // error TS2322: Type 'false' is not assignable to type 'string | number'.

let nullableString: string | null
nullableString = null
nullableString = 'notNull'

let nullableStrings: (string | null)[] = []
nullableStrings.push('1')
nullableStrings.push(null)
// nullableStrings.push(false) // error TS2345: Argument of type 'false' is not assignable to parameter of type 'string | null'.

let myName: 'Taro'
myName = 'Taro'
// myName = 'Jiro' // error TS2322: Type '"Jiro"' is not assignable to type '"Taro"'.
myName.toLowerCase() 

let users: 'Taro' | 'Jiro' | 'Hanako'

let zero: 0
zero = 0
// zero = 1 // error TS2322: Type '1' is not assignable to type '0'.
zero.toFixed(1)

let bit: 8 | 16 | 32 | 64
bit = 8
// bit = 12 // error TS2322: Type '12' is not assignable to type '8 | 16 | 32 | 64'.

let truth: true
truth = true
// truth = false // error TS2322: Type 'false' is not assignable to type 'true'.

let asString: string = ''
let valueA: typeof asString
valueA = 'value'
// valueA = 0 // error TS2322: Type '0' is not assignable to type 'string'.

let myObject = { foo: 'foo' }
let anotherObject: typeof myObject = { foo: ''}
anotherObject['foo'] = 'value'
// anotherObject['bar'] = 'value' //  error TS7053: Element implicitly has an 'any' type because expression of type '"bar"' can't be used to index type '{ foo: string; }'.
// Property 'bar' does not exist on type '{ foo: string; }'.

type SomeType = {
    foo: string
    bar: string
    baz: string
}

let someKey: keyof SomeType

const myObjectA = {
    foo: 'FOO',
    bar: 'BAR',
    baz: 'BAZ'
}

let myObjectKeyA: keyof typeof myObjectA
myObjectKeyA = 'bar'
// myObjectKeyA = 'qux' // error TS2322: Type '"qux"' is not assignable to type '"foo" | "bar" | "baz"'.

const indexedObject = {
    0: 0,
    1: 1
}
let indexedKey: keyof typeof indexedObject
indexedKey = 1
// indexedKey = 2 // error TS2322: Type '2' is not assignable to type '0 | 1'.