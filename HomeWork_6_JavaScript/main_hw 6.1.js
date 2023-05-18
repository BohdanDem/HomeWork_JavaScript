//Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'

console.log('1----------------1')

let a = 'hello world'
let b = 'lorem ipsum'
let c = 'javascript is cool'

console.log(a.length)
console.log(b.length)
console.log(c.length)

// Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'

console.log('2----------------2')

console.log(a.toUpperCase())
console.log(b.toUpperCase())
console.log(c.toUpperCase())

// Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

console.log('3----------------3')

console.log(a.toLowerCase())
console.log(b.toLowerCase())
console.log(c.toLowerCase())

// Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

console.log('4----------------4')

let str = ' dirty string   '

// console.log(str.trim())
let newStr = (str.substring(1, 13))

console.log(newStr)
console.log(newStr.length)

// Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

console.log('5----------------5')

let str2 = 'Ревуть воли як ясла повні'

const stringToArray = (string) => {
    let arr = []
    arr = string.split(' ')
    return arr
}

console.log(stringToArray(str2))

// є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

console.log('6----------------6')

let array = [10,8,-7,55,987,-1011,0,1050,0]

//const numToStr = array.map(el => `${el}`)
const numToStr = array.map(el => el.toString())

console.log(numToStr)

//створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

console.log('7----------------7')

let nums = [11,21,3]

const sortNums = (nums, direction) => {
    if (direction === 'ascending') {
        nums.sort((a, b) => {
            return a - b
        })
        return nums
    }
    if (direction === 'descending') {
        nums.sort((a, b) => {
            return b - a
        })
        return nums
    }
}

console.log(sortNums(nums, 'ascending'))
console.log(sortNums(nums, 'descending'))

//  є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//  -- відсортувати його за спаданням за monthDuration

console.log('8----------------8')

let sortByMonthDuration = coursesAndDurationArray.sort((a, b) => {
    return b.monthDuration - a.monthDuration
})

console.log(sortByMonthDuration)

// відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

console.log('9----------------9')

let timeDuration = coursesAndDurationArray.filter(course => course.monthDuration > 5)

console.log(timeDuration)

// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

console.log('10----------------10')

let changedCourseArray = coursesAndDurationArray.map((course, index) => ({
    id: index + 1, title: course.title, monthDuration: course.monthDuration
}))

console.log(changedCourseArray)

// описати колоду карт (від 6 до туза без джокерів)

console.log('11----------------11')

const cardSuits = [
    {color: "red", suit: "Hearts"},
    {color: "black", suit: "Spades"},
    {color: "black", suit: "Clubs"},
    {color: "red", suit: "Diamonds"},
];

const cardValues = ["6", "7", "8", "9", "10", "jack", "queen", "king", "ace" ]

const deck = []

for (let i = 0; i < cardValues.length; i++) {
    for (let j = 0; j < cardSuits.length; j++) {
        deck.push({name: cardValues[i], suit: cardSuits[j].suit, color: cardSuits[j].color})
    }
}

console.log(deck)

//знайти піковий туз

console.log('12----------------12')

deck.forEach(card => {
    if (card.name === 'ace' && card.suit === "Spades") {
        console.log(card)
    }
})

// всі шістки

console.log('13----------------13')

deck.forEach(card => {
    if (card.name === '6') {
        console.log(card)
    }
})

// всі червоні карти

console.log('14----------------14')

deck.forEach(card => {
    if (card.color === 'red') {
        console.log(card)
    }
})

// всі буби

console.log('15----------------15')

deck.forEach(card => {
    if (card.suit === 'Diamonds') {
        console.log(card)
    }
})

// всі трефи від 9 та більше

console.log('16----------------16')

deck.forEach(card => {
    if (card.suit === 'Clubs' && (card.name >= "9" || parseInt(card.name) >= 9)) {
        console.log(card)
    }
})

// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

console.log('17----------------17')


console.log(deck.reduce((acc, card) => {
    if (card.suit === "Hearts") {
        acc.hearts.push(card)
    }
    else if (card.suit === "Spades") {
        acc.spades.push(card)
    }
    else if (card.suit === "Clubs") {
        acc.clubs.push(card)
    }
    else acc.diamonds.push(card)
    return acc
}, { spades:[], diamonds:[], hearts:[], clubs:[] }))


// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// --написати пошук всіх об'єктів, в який в modules є sass

console.log('18----------------18')

coursesArray.find(object => {
    if (object.modules.includes('sass')) {
        console.log(object)
    }
})

// --написати пошук всіх об'єктів, в який в modules є docker

console.log('19----------------19')

coursesArray.find(object => {
    if (object.modules.includes('docker')) {
        console.log(object)
    }
})












