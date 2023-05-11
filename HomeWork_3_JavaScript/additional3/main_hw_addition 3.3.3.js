// Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

console.log('1---------------1')

const array1 = [ 1, 2, 3, 5, 4, 9, 56, 8, 67, 10 ]

for (const number of array1) {
    if (number % 2 === 0) {
        console.log(number);
    }
}

// Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

console.log('2---------------2')

const array2 = [ 1, 2, 3, 5, 4, 9, 56, 8, 67, 10 ]
const array3 = []

for (const number of array2) {
    array3.push(number)
}

console.log(array2);
console.log(array3);

// Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

console.log('3---------------3')

const array4 = [ 'a', 'b', 'c']
let word = '';

for (let i = 0; i < array4.length; i++) {
    const wordElement = array4[i];
    word += wordElement
}

console.log(word);

// Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

console.log('4---------------4')

let i = 0;
let word2 = '';

while (i < array4.length) {
    word2 += array4[i]
    i++
}

console.log(word2);

// Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

console.log('5---------------5')

let word3 = '';

for (const string of array4) {
    word3 += string
}

console.log(word3);



















