type UserA434 = { gender: 'male'; name: string }
type UserB434 = { gender: 'female'; age: number }
type UserC434 = { gender: 'other'; graduate: string }

function judgeUserType(user: UserA434 | UserB434 | UserC434) {
    switch(user.gender) {
        case 'male':
            const u0 = user
            return 'user type is UserA434'
        case 'female':
            const u1 = user
            return 'user type is UserB434'
        case 'other':
            const u2 = user
            return 'user type is UserC434'
        default:
            const u3 = user
            return 'user type is never'
    }
}
