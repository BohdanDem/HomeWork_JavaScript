// створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

console.log('1---------------1')

function getMin(a, b, c) {
    if (a < b && a < c) {
        console.log(`${a} is minimum`)
    }
    else if (b < a && b < c) {
        console.log(`${b} is minimum`)
    }
    else console.log(`${c} is minimum`)
}

getMin(45, 5,2)


// створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

console.log('2---------------2')

function getMax(a, b, c) {
    if (a > b && a > c) {
        console.log(`${a} is maximum`)
    }
    else if (b > a && b > c) {
        console.log(`${b} is maximum`)
    }
    else console.log(`${c} is maximum`)
}

getMax(25, 12,36)


// створити функцію яка повертає найбільше число з масиву

console.log('3----------------3')

let number = [ 28, 54, 12, 15, 956, 2 ]

function getMaxNumber(array) {
    let max = array[0]
    for (let i = 1; i < array.length; i++) {
        const Element = array[i];
        if (Element > max) {
            max = Element
        }
    }
    return max
}

console.log(getMaxNumber(number))


// створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

console.log('4----------------4')

function arithmetic(array) {
    let sum = 0
    for (const arrayElement of array) {
        sum += arrayElement
    }
    return sum / array.length
}

console.log(arithmetic(number))

// створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

console.log('5----------------5')

function getMinMax(...args) {
    let min = args[0]
    let max = args[0]
    for (const arg of args) {
        if (arg < min) {
            min = arg
        }
        if (arg > max) {
            max = arg
        }
    }
    console.log(max)
    return min
}

console.log(getMinMax(2, 55, 69, 15))


// створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

console.log('6----------------6')

let array = []

function fillArray(array) {
    for (let i = 0; array.length < 10; i++) {
        array.push(Math.round(Math.random()*100))
    }
    return array
}

console.log(fillArray(array))


// створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

console.log('7----------------7')

let array2 = []

function fillArray2(array, limit) {
    for (let i = 0; array.length < 10; i++) {
        array.push(Math.floor(Math.random() * limit))
    }
    return array
}

console.log(fillArray2(array2, 20))


// Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

console.log('8----------------8')

let array3 = [ 1 ,2 ,3 ]

function reverseArray(array) {
    let revArr = []
    for (let i = array.length - 1; i >= 0; i --) {
        revArr.push(array[i])
    }
    return revArr
}

console.log(array3)
console.log(reverseArray(array3))


// створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою

console.log('9----------------9')

function concatArgs(...args) {
    let string = ''
    if (args.length === 1) {
        string = args
    }
    else for (let i = 0; i < args.length; i++) {
        const arg = args[i];
        string += ` ${args[i]}`
    }
    console.log(string)
}

concatArgs('hello', 'my', 'name', 'is')
concatArgs('Bohdan')


// створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]

console.log('10----------------10')

let array4 = [ 1, 2, 3, 4 ]
let array5 = [ 2, 3, 4, 5 ]

function sumArray( array, array_2 ) {
    let resArray = []
    for (let i = 0; i < array.length; i++) {
        const arrayElement = array[i];
        resArray.push(arrayElement + array_2[i])
    }
    return resArray
}

console.log(array4)
console.log(array5)
console.log(sumArray(array4, array5))


// Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

console.log('11----------------11')

let array6 = [{name: 'Dima', age: 13}, {model: 'Camry'}]

// function printObjKey(array) {
//     let key = []
//     for (let arrayElement of array) {
//         key.push(`${Object.keys(arrayElement)}`)
//     }
//     return key
// }

function printObjKey(array) {
    let key = []
    for (let arrayElement of array) {
        for (let arrayElementKey in arrayElement) {
            key.push(arrayElementKey)
        }
    }
    return key
}

console.log(printObjKey(array6))


// Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

console.log('12----------------12')

// function printObjValue(array) {
//     let value = []
//     for (let arrayElement of array) {
//         value.push(`${Object.values(arrayElement)}`)
//     }
//     return value
// }

function printObjValue(array) {
    let value = []
    for (let arrayElement of array) {
        for (let arrayElementKey in arrayElement) {
            value.push(arrayElement[arrayElementKey])
        }
    }
    return value
}

console.log(printObjValue(array6))









