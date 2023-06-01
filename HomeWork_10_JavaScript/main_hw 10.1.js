// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let refreshCount = document.getElementById('block');
window.onload = function () {
    let count = localStorage.getItem('block') || 1;
    refreshCount.innerHTML = count;
    count = +count + 1;
    localStorage.setItem('block', `${count}`);
}

//localStorage.clear()



