// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку

let swearWords = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

let form = document.forms['checkWords']
form.onsubmit = function (e) {
    e.preventDefault()
    if (swearWords.includes(this.swear.value)) {
        alert(`The ${this.swear.value} is bad word`)
    }
    else alert(`The ${this.swear.value} is NOT bad word`)
}
