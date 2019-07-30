type State = {
    id: number
    name: string
}
const state: State = {
    id: 1,
    name: 'Taro'
}
const frozenState = Object.freeze(state)
frozenState.name = 'Hanako'
frozenState.id = 2