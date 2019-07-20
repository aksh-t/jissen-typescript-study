// Array
function list_3_2_1() {
    const a1 = [true, false]
    const a2 = [0, 1, '2']
    const a3 = [false, 1, '2']
}

function list_3_2_3() {
    const a1 = [0 as 0, 1 as 1]
    a1.push(1)
    // a1.push(2) // error TS2345: Argument of type '2' is not assignable to parameter of type '0 | 1'.
}

function list_3_2_3_advance() {
    const a1 = [0 as 2, 1 as 1] // 0を2にassertionできてしまう
    a1.push(1)
    a1.push(2)
}

function list_3_2_4() {
    const zero: 0 = 0
    const one: 1 = 1
    const a1 = [zero, one] // 'zeroおよびoneでは型推論は行われませんが'？
}

// Tuple
function list_3_2_5() {
    const t1 = [false] as [boolean]
    const t2 = [false, 1] as [boolean, number]
    const t3 = [false, 1, '2'] as [boolean, number, string]


    // list 3-2-6
    const v3_0 = t3[0]
    const v3_1 = t3[1]
    const v3_2 = t3[2]
    // const v3_3 = t3[3] // error TS2493: Tuple type '[boolean, number, string]' of length '3' has no element at index '3'.

    
    // list 3-2-7
    t1.push(false)
    // t1.push(1) // error TS2345: Argument of type '1' is not assignable to parameter of type 'boolean'.
    // t1.push('2') // error TS2345: Argument of type '"2"' is not assignable to parameter of type 'boolean'.

    t2.push(false)
    t2.push(1)
    // t2.push('2') // error TS2345: Argument of type '"2"' is not assignable to parameter of type 'number | boolean'.

    t3.push(false)
    t3.push(1)
    t3.push('2')
    t3.push('string') // assertionしたindex範囲外へのpushはerrorにならない
}

function list_3_2_5_advance() {
    const t1 = [false] // boolean[]
    const t2 = [false, 1] // (number | boolean)[]
    const t3 = [false, 1, '2'] // (string | number | boolean)[]

    const v3_0 = t3[0]
    const v3_1 = t3[1]
    const v3_2 = t3[2]
    const v3_3 = t3[3] // 固定indexのTupleではないので、Errorにならない
}

function list_3_2_8() {
    let list = ['this', 'is', 'a', 'test']

    list.push('!')
    console.log(list)

    list = list.map(item => item.toUpperCase()) // item: string
    console.log(list)

    // prev: string, current: string
    let message = list.reduce((prev, current) => `${prev} ${current}`)
    console.log(message)
}

function list_3_2_9() {
    const list = [['this', 'is'], ['a', 'test']]
    // const flatten = list.flat()
    // "target": "esnext"にしないと以下のerror
    // error TS2339: Property 'flat' does not exist on type 'string[][]'.
}
