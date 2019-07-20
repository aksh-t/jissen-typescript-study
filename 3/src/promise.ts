// "target": "es2015"以降にする必要があるので注意！！

function wait(duration: number) {
    return new Promise(resolve => {
        setTimeout(() => resolve(`${duration}ms passed`), duration)
    })
} // テキストでは戻り値の型がPromise<{}>と記載があるが、実際にはPromise<unknown>と推論されている
wait(1000).then(res => {})
// resも{}ではなく、unknownになっている


function wait2(duration: number): Promise<string> {
    return new Promise(resolve => {
        setTimeout(() => resolve(`${duration}ms passed`), duration)
    })
}
wait2(1000).then(res => {})


function wait3(duration: number) {
    return new Promise<string>(resolve => {
        setTimeout(() => resolve(`${duration}ms passed`), duration)
    })
}
wait3(1000).then(res => {})


// resolveにstring以外を代入してみる
function wait_assign_string_to_resolve(duration: number) {
    return new Promise(resolve => {
        setTimeout(() => resolve(duration), duration) // errorにならない
    })
}
wait_assign_string_to_resolve(1000).then(res => {})


function wait2_assign_string_to_resolve(duration: number): Promise<string> {
    return new Promise(resolve => {
        // setTimeout(() => resolve(duration), duration)
        // error TS2345: Argument of type 'number' is not assignable to parameter of type 'string | PromiseLike<string> | undefined'.
    })
}
wait2_assign_string_to_resolve(1000).then(res => {})


function wait3_assign_string_to_resolve(duration: number) {
    return new Promise<string>(resolve => {
        // setTimeout(() => resolve(duration), duration)
        // error TS2345: Argument of type 'number' is not assignable to parameter of type 'string | PromiseLike<string> | undefined'.
    })
}
wait3_assign_string_to_resolve(1000).then(res => {})



async function queue() {
    const message = await wait2(1000)
    return message
}


function waitThenString(duration: number) {
    return new Promise<string>(resolve => {
        setTimeout(() => resolve(`${duration}ms passed`), duration)
    })
}

function waitThenNumber(duration: number) {
    return new Promise<number>(resolve => {
        setTimeout(() => resolve(duration), duration)
    })
}

function waitAll() {
    return Promise.all([
        waitThenString(10),
        waitThenNumber(100),
        waitThenString(1000)
    ])
}

function waitRace() {
    return Promise.race([
        waitThenString(10),
        waitThenNumber(100),
        waitThenString(1000)
    ])
}

async function main() {
    const [a, b, c] = await waitAll()
    const result = await waitRace()
}