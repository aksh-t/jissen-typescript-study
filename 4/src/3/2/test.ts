type User = { gender: string }
type UserA = User & { name: string }
type UserB = User & { age: number; graduate: string}

function judgUserType(user: UserA | UserB) {
    if ('gender' in user) {
        const u0 = user
        console.log('user type is UserA | UserB')
    }
    if ('name' in user) {
        const u1 = user
        console.log('user type is UserA')
        return
    }
    const u2 = user
    console.log('user type is UserB')
}
