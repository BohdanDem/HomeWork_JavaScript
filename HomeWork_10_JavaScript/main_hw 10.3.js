// Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

let text = document.getElementById('text')
let btn = document.getElementById('btn')

btn.onclick = function (ev) {
    ev.preventDefault()
    text.style.display = 'none'
}

















