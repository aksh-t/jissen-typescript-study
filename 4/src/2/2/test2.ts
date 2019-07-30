type Answer = 'mighty' | 'lot' | 'few' | 'entirely'
type User3 = {
    name: string
    enquete: { [k: string]: Answer | undefined }
}
const userA3: User3 = {
    name: 'Taro',
    enquete: {
        exercise_habits: 'entirely',
        time_of_sleeping: 'few'
    }
}
const x3 = userA3.enquete['exercise_habits']
const y3 = userA3.enquete['steps_per_day']
// const y3: Answer