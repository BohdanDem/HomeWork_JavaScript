// створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

console.log('1---------------1')
const areaRectangle = (a, b) => a * b

console.log(areaRectangle(5, 4))

// створити функцію яка обчислює та повертає площу кола з радіусом r

console.log('2---------------2')
const areaCircle = (r) => Math.PI * r**2

console.log(areaCircle(3))

// створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

console.log('3---------------3')
const areaCylinder = (h, r) => ( 2 * Math.PI * r * h  )  +  ( 2 * Math.PI * r ** 2 )

console.log(areaCylinder(4, 7))

// створити функцію яка приймає масив та виводить кожен його елемент

console.log('4---------------4')

const  array = [ 365, true, 245, 'program', 256, 4.25 ]
const printArray = (array) => {
    for (const arrayElement of array) {
        console.log(arrayElement)
    }
}

(printArray(array))

// створити функцію яка створює параграф з текстом. Текст задати через аргумент

document.write('5---------------5')

const createParagraph = (text) => document.write(`<p>${text}</p>`)


createParagraph('Hello summer')

// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

document.write('6---------------6')

const createList = (text) => {
    document.write(`<ul>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`</ul>`)
}

createList('hello World')

// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

document.write('7---------------7')

const createList2 = (text, li) => {
    document.write(`<ul>`)
    let i = 0
    while ( i < li ) {
        document.write(`<li>${text}</li>`)
        i++
    }
    document.write(`</ul>`)
}

createList2('JavaScript', 4)

// створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

document.write('8---------------8')

const  array2 = [ 21, 'summer', 99, true, 256, 4.25 ]
const createLiArray = (array) => {
    document.write(`<ul>`)
    for (const arrayElement of array) {
        document.write(`<li>${arrayElement}</li>`)
    }
    document.write(`</ul>`)
}

createLiArray(array2)

// створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

document.write('9----------------9')

let users = [
    {id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 30},
    {id: 3, name: 'kolya', age: 29},
    {id: 4, name: 'olya', age: 28},
    {id: 5, name: 'max', age: 30}
]

const printArrayOfObj = (array) => {
    for (const arrayElement of array) {
        document.write(`<div>${arrayElement.id} - ${arrayElement.name} - ${arrayElement.age}</div>`)
    }
}

printArrayOfObj(users)

// створити функцію яка повертає найменьше число з масиву

console.log('10----------------10')

let numb = [ 2, 58, 478, 23, 5, 1, 19 ]
const getMinNumber = (array) => {
    let min = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i]
        }
    }
    return min
}

console.log(getMinNumber(numb))

// створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

console.log('11----------------11')
const getSum = (array) => {
    let sum = 0
    for (const arrayElement of array) {
        sum += arrayElement
    }
    return sum
}

console.log(getSum(numb))

// створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

console.log('12----------------12')

let numbers = [ 45, 58, 4, 23, 11, 41, 19 ]
const swap = (array, index_1, index_2) => {
    let temp = array[index_1]
    array[index_1] = array[index_2]
    array[index_2] = temp
    return array
}

console.log(numbers)
console.log(swap(numbers, 1, 2))

// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

console.log('13----------------13')

const exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    for (const Value of currencyValues) {
        if (Value.currency === exchangeCurrency) {
            result = sumUAH / Value.value
        }
    }
    return result
}

console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'))



