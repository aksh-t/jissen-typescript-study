const obj = {
    foo: false,
    bar: 1,
    baz: '2'
}

obj['foo'] = true
// obj['foo'] = 0 // error TS2322: Type '0' is not assignable to type 'boolean'.


const obj2 = {
    foo: false as false,
    bar: 1 as 1,
    baz: '2' as '2'
}
// obj2['foo'] = true // error TS2322: Type 'true' is not assignable to type 'false'.
