type User435 = { gender: string; [k: string]: any }
type UserA435 = User435 & { name: string }
type UserB435 = User435 & { age: number }

function isUserA435(user: UserA435 | UserB435 ) : user is UserA435 {
    return user.name !== undefined
}
function isUserB435(user: UserA435 | UserB435 ) : user is UserB435 {
    return user.age !== undefined
}

function getUserType(user: any) {
    const u0 = user
    if (isUserA435(user)) {
        const u1 = user
        return 'A435'
    }
    if (isUserB435(user)) {
        const u2 = user
        return 'B435'
    }
    return 'unknown'
}
const x435 = getUserType({ name: 'Taro' })