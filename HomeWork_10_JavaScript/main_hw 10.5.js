// (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//  зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//  При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається

let block = document.createElement('div')
let time = localStorage.getItem('time');
let price = JSON.parse(localStorage.getItem('price')) || 100;

let currentTime = new Date().getTime()

if (time && currentTime - time > 2000) {
    price += 10
    localStorage.setItem('price', price.toString())
}

block.innerText = price + 'hrn'
localStorage.setItem('time', currentTime.toString())
document.body.appendChild(block)
