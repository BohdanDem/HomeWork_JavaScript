// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

const form = document.forms['tableCreator']

form.onsubmit = function (ev) {
    ev.preventDefault()

    const table = document.createElement('table')
    table.classList.add('table')
    for (let i = 0; i < this.rows.value; i++) {
        let row = document.createElement('tr')
            for (let j = 0; j < this.column.value; j++) {
                let column = document.createElement('td')
                table.appendChild(column)
                column.innerText = this.content.value
            }
        table.appendChild(row)
    }
    document.body.append(table)
}























