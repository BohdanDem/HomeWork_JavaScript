// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку

let swearWords = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

let form = document.forms['checkWords']
form.onsubmit = function (e) {
    e.preventDefault()

    let inStr = this.swear.value
    let newInStr = inStr.split(' ')
    //let count = 0
    newInStr.forEach(element => {
        if (swearWords.includes(element)) {
            //return count += 1
            alert(`The sentence consist bad word`)
        }
    })
    // console.log(count);
    // if (count >= 1) {
    //     alert(`The sentence consist bad word`)
    // }
    // else alert(`The sentence DOES NOT consist bad word`)
}
