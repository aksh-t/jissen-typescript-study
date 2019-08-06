let o1: {} = 0
let o2: {} = '1'
let o3: {} = false
let o4: {} = {}

// let o1_5_1_7: object = 0
// let o2_5_1_7: object = '1'
// let o3_5_1_7: object = false
let o4_5_1_7: object = {}

type K0 = keyof {}
type K1 = keyof { K: 'K' }
type K2 = keyof 0
type K3 = keyof '1'
type K4 = keyof false

let o1_5_1_10 = { p1: 0 }
let o2_5_1_10 = { p1: 'test' }
// o1_5_1_10 = o2_5_1_10
// o2_5_1_10 = o1_5_1_10

let o1_5_1_11 = { p1: 'test' }
let o2_5_1_11 = { p2: 'test' }
// o1_5_1_11 = o2_5_1_11
// o2_5_1_11 = o1_5_1_11

let o1_5_1_12 = { p1: 'test' }
let o2_5_1_12 = { p1: 'test', p2: 0 }
o1_5_1_12 = o2_5_1_12
// o2_5_1_12 = o1_5_1_12

let o1_5_1_13 = {}
let o2_5_1_13 = { p1: 'test' }
o1_5_1_13 = o2_5_1_13
// o2_5_1_13 = o1_5_1_13
