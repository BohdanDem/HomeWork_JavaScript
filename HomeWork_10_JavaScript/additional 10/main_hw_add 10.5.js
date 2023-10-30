// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

let btn = document.forms['hide']

btn.onsubmit = function (ev) {
    ev.preventDefault()
    btn.style.display = 'none'
}
