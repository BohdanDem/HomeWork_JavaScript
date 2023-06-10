// зробити div contenteditable ввести будь яке ціле слово. та при натисканні табуляції перетворити його на подвійний тег
// asd ->tab-> <asd></asd>

let contenteditable = document.createElement('div')
contenteditable.classList.add('contenteditable')
contenteditable.innerText = 'asd'
contenteditable.style.fontSize = '40px'

document.body.appendChild(contenteditable)

window.onkeydown = function (ev) {
    if (ev.key === 'Tab') {
        contenteditable.innerHTML = `<${contenteditable.innerText}></${contenteditable.innerText}>`
    }
    document.body.replaceChildren(contenteditable.innerHTML)
}
