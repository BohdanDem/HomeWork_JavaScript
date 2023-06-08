// зробити div contenteditable ввести будь яке ціле слово. та при натисканні табуляції перетворити його на подвійний тег
// asd ->tab-> <asd></asd>

let contenteditable = document.createElement('div')
contenteditable.classList.add('contenteditable')
contenteditable.innerHTML = '25'
contenteditable.style.fontSize = '40px'

contenteditable.onkeydown = function (ev) {
    if (ev.key === 'tab') {
        contenteditable.innerHTML = '20'
    }
}

document.body.appendChild(contenteditable)