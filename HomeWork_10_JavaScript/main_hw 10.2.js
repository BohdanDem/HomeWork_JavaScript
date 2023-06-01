// створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту
// та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let testAge = document.forms['testAge']

testAge.onsubmit = function (ev) {
    ev.preventDefault()
    if (this.age.value < 18) {
        document.write("Your age less than 18")
    }
    else document.write(`Your age is ${this.age.value}`)
}








