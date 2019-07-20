class Creature {
    numberOfHands: number
    numberOfFeet: number
    constructor(numberOfHands: number, numberOfFeet: number) {
        this.numberOfHands = numberOfHands
        this.numberOfFeet = numberOfFeet
    }
}

const creature = new Creature(0, 4)

class Dog2 extends Creature {
    bark: string
    constructor(bark: string) {
        super(0, 4)
        this.bark = bark
    }
    barking() {
        return `${this.bark}! ${this.bark}!`
    }
    shakeTail() {
        console.log(this.barking())
    }
}

class Human extends Creature {
    name: string
    constructor(name: string) {
        super(2, 2)
        this.name = name
    }
    greet() {
        return `Hello! I'm ${this.name}`
    }
    shakeHands() {
        console.log(this.greet())
    }
}

const dog = new Dog2('bow-wow')
const human = new Human('Hanako')

class Human2 extends Creature {
    protected name: string
    constructor(name: string) {
        super(2, 2)
        this.name = name
    }
    protected greet() {
        return `Hello! I'm ${this.name}`
    }
    public shakeHands() {
        console.log(this.greet())
    }
}

class Taro extends Human2 {
    constructor() {
        super('Taro')
    }
    public greeting() {
        console.log(this.greet())
    }
}

const taro = new Taro()

taro.greeting()
// taro.greet() // error TS2445: Property 'greet' is protected and only accessible within class 'Human2' and its subclasses.
taro.shakeHands()