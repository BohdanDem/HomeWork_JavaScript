//Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

let x = +prompt('Enter the first number')
let y = +prompt('Enter the second number')

if (x === y) {
    console.log('The numbers are equal')
}
else if (x > y) {
    console.log(`The max number is ${x}`)
}
else console.log(`The max number is ${y}`)
