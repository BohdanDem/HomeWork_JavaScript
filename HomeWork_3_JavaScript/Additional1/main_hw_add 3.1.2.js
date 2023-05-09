//- є масив
const array = [2,17,13,6,22,31,45,66,100,-18]

// 1. перебрати його циклом while

console.log('1-------------------1')

let i = 0;
while (i < array.length) {
    const elem = array[i]
    console.log(elem)
    i++
}

console.log('reverse')

let ii = array.length - 1;
while (ii >= 0) {
    const elem = array[ii]
    console.log(elem)
    ii--
}

// 2. перебрати його циклом for

console.log('2-------------------2')

for (let j = 0; j < array.length; j++) {
    const arrayElement = array[j];
    console.log(arrayElement)
}

console.log('reverse')

for (let j = array.length - 1; j >= 0; j--) {
    const arrayElement = array[j];
    console.log(arrayElement)
}

// 3. перебрати циклом while та вивести  числа тільки з парним індексом

console.log('3-------------------3')

let a = 0;
while (a < array.length) {
    const elem = array[a]
    console.log(elem)
    a+=2
}

console.log('reverse')

let aa = array.length - 2;
while (aa >= 0) {
    const elem = array[aa]
    console.log(elem)
    aa-=2
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

console.log('4-------------------4')

for (let b = 1; b < array.length; b += 2) {
    const arrayElement = array[b];
    console.log(arrayElement)
}

console.log('reverse')

for (let b = array.length - 1; b >= 0; b -= 2) {
    const arrayElement = array[b];
    console.log(arrayElement)
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення

console.log('5-------------------5')

let c = 0;
while (c < array.length) {
    const elem = array[c]
    if (elem % 2 === 0) {
        console.log(elem)
    }
    c++
}

console.log('reverse')

let cc = array.length - 1;
while (cc >= 0) {
    const elem = array[cc]
    if (elem % 2 === 0) {
        console.log(elem)
    }
    cc--
}

// 6. перебрати циклом for та вивести  числа тільки непарні  значення

console.log('6-------------------6')

for (let d = 0; d < array.length; d++) {
    const arrayElement = array[d];
    if (arrayElement % 2 === 1) {
        console.log(arrayElement)
    }
}

console.log('reverse')

for (let d = array.length - 1; d >= 0; d--) {
    const arrayElement = array[d];
    if (arrayElement % 2 === 1) {
        console.log(arrayElement)
    }
}

// 7. замінити кожне число кратне 3 на слово "okten"

console.log('7-------------------7')

for (let e = 0; e < array.length; e++) {
    const arrayElement = array[e];
    if (arrayElement % 3 === 0) {
        console.log("okten")
    }
    else console.log(arrayElement)
}

console.log('reverse----------')

for (let e = array.length - 1; e >= 0; e--) {
    const arrayElement = array[e];
    if (arrayElement % 3 === 0) {
        console.log("okten")
    }
    else console.log(arrayElement)
}

// 8. вивести масив в зворотньому порядку.

console.log('8-------------------8')

for (let f = array.length - 1; f >= 0; f--) {
    const arrayElement = array[f];
    console.log(arrayElement)
}

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)





