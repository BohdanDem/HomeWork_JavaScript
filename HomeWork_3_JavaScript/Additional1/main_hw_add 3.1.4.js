//- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

console.log('1------------------1');

const arr1 = [];

arr1[0] = 25;
arr1[1] = true;
arr1[2] = '333';
arr1[3] = null;
arr1[4] = 3.14;
arr1[5] = 99;
arr1[6] = -6;
arr1[7] = 'Hello';
arr1[8] = true;
arr1[9] = 2445;

for (const arr1Element of arr1) {
    console.log(arr1Element)
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

console.log('2------------------2');

for (let i = 0; i < 10; i++) {
    console.log(i)
    document.write(`<div>${i}</div>`)
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

console.log('3------------------3');
document.write('3------------------3')

for (let i = 0; i < 100; i++) {
    console.log(i)
    document.write(`<div>${i}</div>`)
}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

console.log('4------------------4');
document.write('4------------------4')

for (let i = 0; i < 100; i+=2) {
    console.log(i)
    document.write(`<div>${i}</div>`)
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

console.log('5------------------5');
document.write('5------------------5')

for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log(i)
        document.write(`<div>${i}</div>`)
    }
}

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

console.log('6------------------6');
document.write('6------------------6')

for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
        console.log(i)
        document.write(`<div>${i}</div>`)
    }
}