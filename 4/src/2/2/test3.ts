type Question = 'exercise_habits' | 'time_of_sleeping'
type Answer2 = 'mighty' | 'lot' | 'few' | 'entirely'
type User4 = {
    name: string
    enquete: { [K in Question]?: Answer}
}

const userA4: User4 = {
    name: 'Taro',
    enquete: {
        exercise_habits: 'entirely',
        time_of_sleeping: 'few'
    }
}
const x4 = userA4.enquete['exercise_habits']
const y4 = userA4.enquete['steps_per_day'] // not error on vscode
