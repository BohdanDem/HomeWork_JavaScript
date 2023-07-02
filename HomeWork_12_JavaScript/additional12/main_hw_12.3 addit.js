// - Імітуємо наповнення інтернет магазину товарами :
// Створити форму з наступними полями :
// - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

let form = document.forms['addNewProduct']
form.onsubmit  = function (e) {
    e.preventDefault()
    let product = {
        ProductName : this.productName.value,
        ProductCount : this.productCount.value,
        ProductPrice : this.productPrice.value,
        ProductImage : this.productImage.value
    }

    let productsPage = JSON.parse(localStorage.getItem('productsPage')) || [];
    productsPage.push(product);
    localStorage.setItem('productsPage', JSON.stringify(productsPage));
}


