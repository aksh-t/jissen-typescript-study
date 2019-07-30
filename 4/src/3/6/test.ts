type User436 = { name: string }
type UserA436 = User & { gender: 'male' | 'female' | 'other' }
type UserB436 = User & { graduate: string }

const users: (UserA436 | UserB436)[] = [
    { name: 'Taro', gender: 'male' },
    { name: 'Hanako', graduate: 'Tokyo' }
]
const filteredUsers = users.filter(user => 'graduate' in user)

function filterUser(user: UserA436 | UserB436): user is UserB {
    return 'graduate' in user
}
const filteredUsers2 = users.filter(filterUser)

const filteredUsers3 = users.filter(
    (user: UserA436 | UserB436): user is UserB436 => 'graduate' in user
)