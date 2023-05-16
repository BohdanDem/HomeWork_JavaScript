// створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

console.log('1---------------1')

const getMin = (a, b, c) => {
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

const getMax = (a, b, c) => {
    if (a > b && a > c) {
        console.log(`${a} is maximum`)
    }
    else if (b > a && b > c) {
        console.log(`${b} is maximum`)
    }
    else console.log(`${c} is maximum`)
}

getMax(25, 58,36)

//створити функцію яка повертає найбільше число з масиву

console.log('3----------------3')

let number = [ 28, 54, 2, 15, 956, 12 ]

const getMaxNumber = (array) => {
    let max = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }
    }
    return max
}

console.log(getMaxNumber(number))

// створити функцію яка повертає найменьше число з масиву

console.log('4----------------4')

const getMinNumber = (array) => {
    let min = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i]
        }
    }
    return min
}

console.log(getMinNumber(number))

// створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

console.log('5----------------5')

const sumElemArray = (array) => {
    let sum = array[0]
    for (let i = 1; i < array.length; i++) {
        sum += array[i]
    }
    return sum
}

console.log(sumElemArray(number))

// Дано натуральное число n. Выведите все числа от 1 до n.

console.log('6----------------6')

const printNum = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log(i)
    }
}

printNum(5)

// Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания,
// если A < B, или в порядке убывания в противном случае.

console.log('7----------------7')

const printNumRange = (A, B) => {
    if (A < B) {
        for (let i = A; i <= B; i++) {
            console.log(i)
        }
    }
    else if (A > B) {
        for (let i = A; i >= B; i--) {
            console.log(i)
        }
    }
    else console.log('The numbers are equal')
}

printNumRange(2, 5)
console.log('-----------')
printNumRange(9, 6)
console.log('-----------')
printNumRange(5, 5)

// функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

console.log('8----------------8')

let array = [9,8,0,4]

const  swap = (array , i) => {
    let temp = array[i]
    array[i] = array[i + 1]
    array[i + 1] = temp
    return array
}

console.log(array)
console.log(swap(array, 0))
console.log('-----------')
console.log(array)
console.log(swap(array, 1))
console.log('-----------')
console.log(array)
console.log(swap(array, 2))
console.log('-----------')

// Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

console.log('9----------------9')

let array2 = [1,0,6,0,3]

// const changeArray = (array) => {
//     let newArr = []
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] !== 0) {
//             newArr.push(array[i])
//         }
//     }
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === 0) {
//             newArr.push(array[i])
//         }
//     }
//     return newArr
// }

const changeArray = (array) => {
    const start = []
    const end = []

    for (const numb of array) {
        numb ? start.push(numb) : end.push(numb)
    }
    return [...start, ...end]
}

console.log(array2)
console.log(changeArray(array2))





