//За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i = 0; i < 10; i++) {
    document.write('<div>Hello World</div>')
}
document.write('===========================')

//======================================================================================================================

// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 0; i < 10; i++) {
    document.write(`<div>${i} Hello World</div>`)
}

//======================================================================================================================

//За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let i = 0;
while (i < 20) {
    document.write(`<h1>Hello Sun</h1>`)
    i++
}
document.write('===========================')

//======================================================================================================================

//За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let a = 0;
while (a < 20) {
    document.write(`<h1>${a} Hello Sun</h1>`)
    a++
}