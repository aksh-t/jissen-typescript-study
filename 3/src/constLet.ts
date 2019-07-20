let user = 'Taro'
let value = 0
let flag = false

var userVar = 'Taro'
var valueVar = 0
var flagVar = false 

const userConst = 'Taro'
const valueConst = 0
const flagConst = false


const wideningZero = 0
const nonWideningZero: 0 = 0
const asNonWideningZero = 0 as 0

let zeroA = 0
let zeroB = wideningZero
let zeroC = nonWideningZero
let zeroD = asNonWideningZero
const zeros = {
    zeroA,
    zeroB,
    zeroC,
    zeroD
}

const wideningValue = 'value'
const nonWideningValue: 'value' = 'value'
const asNonWideningValue = 'value' as 'value'

let valueA = 'value'
let valueB = wideningValue
let valueC = nonWideningValue
let valueD = asNonWideningValue

const wideningFlag = true
const nonWideningFlag: true = true
const asNonWideningFlag = true as true

let flagA = true
let flagB = wideningFlag
let flagC = nonWideningFlag
let flagD = asNonWideningFlag
