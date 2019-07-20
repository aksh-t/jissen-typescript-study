function getPriceLabel(amount: number, tax: number) {
    return `￥${amount * tax}`
}

function log(message: string) {
    console.log(message)
}

function getStringValue(value: number, prefix?: string): string {
    // if (prefix === undefined) return value // error TS2322: Type 'number' is not assignable to type 'string'.
    return `${prefix} ${value}`
}
// prefix?の?は、optionalなparameterであることを示す。細かいことは以下を参照。
// http://www.typescriptlang.org/docs/handbook/functions.html#optional-and-default-parameters

function getScore(score: number) {
    if (score < 0 || score > 100) return null
    return score
}

function getScoreAmount(score: 'A' | 'B' | 'C') {
    switch(score) {
        case 'A':
            return 100
        case 'B':
            return 60
        case 'C':
            return 30
    }
}