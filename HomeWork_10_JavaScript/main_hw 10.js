// Стоврити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
let form = document.forms['testForm']
form.onsubmit  = function (e) {
    e.preventDefault()
    let person = {
        name : this.name.value,
        surname : this.surname.value,
        age : this.age.value,
    }
    let div = document.createElement('div')
    div.innerText = (JSON.stringify(person))
    document.body.appendChild(div)
}




































