//- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

console.log('1------------------1');

const arr1 = [55, 26, 45.55, 0.5, -58, 69, 51, 0.002, -15, 99]

for (let i = 0; i < arr1.length; i++) {
    const arr1Element = arr1[i];
    console.log(arr1Element);
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

console.log('2------------------2');

const arr2 =['This', 'is', 'array', 'with', 'string', 'data', 'type', 'and', 'the', 'end']

for (let i = 0; i < arr2.length; i++) {
    const arr2Element = arr2[i];
    console.log(arr2Element);
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

console.log('3------------------3');

const arr3 =['This', 22, 'array', 'with', true, 'data', 55, false, 'the', 'end']

for (let i = 0; i < arr3.length; i++) {
    const arr3Element = arr3[i];
    console.log(arr3Element);
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

console.log('4------------------4');

const arr4 =[true, 22, 'array', -88, true, 'data', 55, false, 'the', true]

for (let i = 0; i < arr4.length; i++) {
    const arr4Element = arr4[i];
    if (typeof arr4Element === "boolean") {
        console.log(arr4Element);
    }
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

console.log('5------------------5');

const arr5 =[true, 22, 'array', -88, true, 'data', 55, false, 'the', true]

for (let i = 0; i < arr4.length; i++) {
    const arr5Element = arr5[i];
    if (typeof arr5Element === 'number') {
        console.log(arr5Element);
    }
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

console.log('6------------------6');

const arr6 =[true, 22, 'array', -88, true, 'data', 55, false, 'the', true]

for (let i = 0; i < arr6.length; i++) {
    const arr6Element = arr6[i];
    if (typeof arr6Element === 'string') {
        console.log(arr6Element);
    }
}
