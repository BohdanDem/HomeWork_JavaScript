// створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

console.log('1---------------1')

function areaRectangle(a, b) {
    return a * b
}

console.log(areaRectangle(3, 5))


// створити функцію яка обчислює та повертає площу кола з радіусом r

console.log('2---------------2')

function areaCircle(r) {
    return Math.PI * (r * r)
}

console.log(areaCircle(5))


// створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

console.log('3---------------3')

function areaCylinder(h, r) {
    return ( 2 * Math.PI * r * h ) + ( 2 * Math.PI * (r * r))
}

console.log(areaCylinder(5, 3))


// створити функцію яка приймає масив та виводить кожен його елемент

console.log('4---------------4')

const  array = [ 365, true, 245, 'program', 256, 4.25 ]
function printArray(array) {
    for (const arrayElement of array) {
        console.log(arrayElement)
    }
}

printArray(array)


// створити функцію яка створює параграф з текстом. Текст задати через аргумент

document.write('5---------------5')

function createParagraph(text) {
    document.write(`<p>${text}</p>`)
}

createParagraph('Hello summer')

// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

document.write('6---------------6')

function createList(text) {
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

function createList2(text, li) {
    document.write(`<ul>`)
    let i = 1
    while (i <= li) {
        document.write(`<li>${text}</li>`)
        i++
    }
    document.write(`</ul>`)
}

createList2('JavaScript', 6)



// створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

document.write('8---------------8')

const  array2 = [ 21, 'summer', 99, true, 256, 4.25 ]
function createLiArray(array) {
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

function printArrayOfObj(array) {
    for (const arrayElement of array) {
        document.write(`<div>${arrayElement.id} - ${arrayElement.name} - ${arrayElement.age}</div>`)
    }
}

printArrayOfObj(users)


// створити функцію яка повертає найменьше число з масиву

console.log('10----------------10')

let numb = [ 2, 58, 478, 23, 5, 1, 19 ]

function getMinNumber(array) {
    let min = array[0]
    for (let i = 1; i < array.length; i++) {
        const Element = array[i];
        if (Element < min) {
            min = Element
        }
    }
    return min
}

console.log(getMinNumber(numb))


// створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

console.log('11----------------11')

function getSum(array) {
    let sum = array[0]
    for (let i = 1; i < array.length; i++) {
        const Element = array[i];
        sum += Element
    }
    return sum
}

console.log(getSum(numb))

// створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

console.log('12----------------12')

let numbers = [ 45, 58, 4, 23, 11, 41, 19 ]

function swap(array, index1, index2) {
    let temp = array[index1]
    array[index1] = array[index2]
    array[index2] = temp
    return array
}

console.log(numbers);
console.log(swap(numbers, 0, 1));

// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

console.log('13----------------13')

function exchange(sumUAH, currencyValues, exchangeCurrency) {
    for (let i = 0; i < currencyValues.length; i++) {
        const Value = currencyValues[i];
        if (Value.currency === exchangeCurrency) {
            result = sumUAH / Value.value
        }
        return result
    }
}

console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'))









