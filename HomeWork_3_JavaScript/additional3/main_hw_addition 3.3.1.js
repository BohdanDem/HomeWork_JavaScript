//Створити пустий масив та :
//        a. заповнити його 50 парними числами за допомоги циклу.

console.log('1---------------1')

const array = []

for (let i = 0; array.length < 50; i++) {
    if (i % 2 === 0) {
        array[array.length] = i;
    }
}
console.log(array);

//        b. заповнити його 50 непарними числами за допомоги циклу.

console.log('2---------------2')

const array2 = []

for (let i = 0; array2.length < 50; i++) {
    if (i % 2 !== 0) {
        array2[array2.length] = i;
    }
}
console.log(array2);

//        c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

console.log('3---------------3')

const array3 = []

for (let i = 0; array3.length < 20; i++) {
    array3[array3.length] = Math.floor(Math.random() * 100);
}

console.log(array3);

//        d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

console.log('4---------------4')

const array4 = []

for (let i = 0; array4.length < 20; i++) {
    array4[array4.length] = Math.floor(Math.random() * (732 - 8 + 1) ) + 8;
}

console.log(array4);

//Вивести за допомогою console.log кожен третій елемен

console.log('5---------------5')

const array5 = []

for (let i = 0; array5.length < 50; i++) {
        array5[array5.length] = i;
}

console.log(array5);

for (let i = 0; i < array5.length; i+=3) {
    const array5Element = array5[i];
    console.log(array5Element);
}

//Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

console.log('6---------------6')

for (let i = 0; i < array5.length; i+=3) {
    const array5Element = array5[i];
    if (array5Element % 2 === 0) {
        console.log(array5Element);
    }
}

//Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

console.log('7---------------7')

const array6 = []

for (let i = 0; i < array5.length; i+=3) {
    const array5Element = array5[i];
    if (array5Element % 2 === 0) {
        array6.push(array5Element)
        console.log(array5Element);
    }
}

console.log(array6);

//Вивести кожен елемент масиву, сусід справа якого є парним
//   EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

console.log('8---------------8')

const array7 = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ]

for (let i = 0; i < array7.length; i++) {
    const array7Element = array7[i];
    if ((array7[i + 1]) % 2 === 0) {
        console.log(array7Element)
    }
}

//Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

console.log('9---------------9')

const array8 = [100,250,50,168,120,345,188]
let sum = 0;

for (let i = 0; i < array8.length; i++) {
    const array8Element = array8[i];
    sum += array8Element
}

const midPrise = sum / array8.length
console.log(midPrise);

//Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

console.log('10---------------10')

const array9 = []
const array10 = []

for (let i = 0; array9.length < 10; i++) {
    array9.push(Math.floor(Math.random() * 100))
    const array9Element = array9[i];
    array10.push(array9Element * 5)
}

console.log(array9);
console.log(array10);

// Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

console.log('11---------------11')

const array11 =['This', 22, 'array', 'with', 30, true, 'data', 55, false, 'the', 39, 'end'];
const array12 = [];

for (const array11Element of array11) {
    if (typeof array11Element === 'number') {
        array12.push(array11Element)
    }
}

console.log(array12);











