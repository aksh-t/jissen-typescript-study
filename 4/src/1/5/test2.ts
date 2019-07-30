type State = {
    id: number
    name: string
}
const state: Readonly<State> = {
    id: 1,
    name: 'Taro'
}
state.name = 'Hanako'
state.id = 2