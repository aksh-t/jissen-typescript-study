type User = {
    age?: number
    name?: string
}
function registerUser(user: User) { }

const maybeUser = {
    age: 26,
    name: 'Taro',
    gender: 'male'
}
const notUser = {
    gender: 'male',
    graduate: 'Tokyo'
}
registerUser(maybeUser)
registerUser(notUser)

registerUser({})
registerUser()

registerUser({
    age: 26,
    name: 'Taro',
    gender: 'male'
})

registerUser({...{
    age: 26,
    name: 'Taro',
    gender: 'male'
}})