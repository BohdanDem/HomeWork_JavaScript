// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

// Generate the array of 100 element
const array = []
for (let i = 1; i <= 100; i++) {
    array.push(`number ${i}`)
}

// First 10 element are shown when page is loaded
let page = document.createElement('div')

for (let i = 0; i < 10; i++) {
    let block = []
    let p = document.createElement('p')
    p.innerText = array[i]
    block.push(p)
    page.appendChild(...block)
}

let prev = document.createElement('button')
let next = document.createElement('button')
prev.innerText = 'PREV'
next.innerText = 'NEXT'
prev.setAttribute('disabled', 'disabled')
document.body.append(prev, next)

let numCount = 0

function valid(numCount) {
    if (numCount > 0) {
        prev.removeAttribute('disabled')
    }
    else if (numCount <= 0) {
        prev.setAttribute('disabled', 'disabled')
    }
    if (numCount >= 90){
        next.setAttribute('disabled', 'disabled')
    }
    else next.removeAttribute('disabled')
}

next.onclick = function (ev) {
    ev.preventDefault()
    numCount += 10;
    valid(numCount)
    let block = []
    for (let i = numCount; i < numCount + 10; i++) {
        let p = document.createElement('p')
        p.innerText = array[i]
        block.push(p)
    }
    page.replaceChildren(...block)
}

prev.onclick = function (ev) {
    ev.preventDefault()
    numCount -= 10;
    valid(numCount)
    let block = []
    for (let i = numCount; i < numCount + 10; i++) {
        let p = document.createElement('p')
        p.innerText = array[i]
        block.push(p)
    }
    page.replaceChildren(...block)
}
document.body.appendChild(page)




