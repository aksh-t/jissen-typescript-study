import('./test').then(module => {
    const amount = module.value
})
async function main2() {
    const { value }= await(import('./test'))
    const amount = value
}