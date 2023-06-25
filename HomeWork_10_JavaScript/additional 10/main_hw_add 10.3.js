// - Создайте меню, которое раскрывается/сворачивается при клике

let nav = document.getElementById('nav-menu')
let dropdownMenu = document.getElementById('dropdown-menu')

nav.onclick = function (ev) {
    dropdownMenu.style.display === 'block'
        ? dropdownMenu.style.display = 'none'
        : dropdownMenu.style.display = 'block'
}
