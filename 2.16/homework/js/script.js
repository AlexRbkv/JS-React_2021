let menuItem = document.querySelectorAll('.menu-item'),
    menu = document.querySelector('.menu');

menu.insertBefore(menuItem[2], menuItem[1]);

let menuItemFive = document.createElement('li');
menuItemFive.classList.add('menu-item');
menuItemFive.textContent = "Пятый элемент";
menu.appendChild(menuItemFive);

document.body.style.background = "url(./img/apple_true.jpg)";

let title = document.getElementById('title');

title.textContent = "Мы продаем только подлинную технику Apple";

document.querySelectorAll('.adv').forEach(item => {
    item.remove();
});

let question = prompt('Расскажите нам о Вашем отношении к технике Apple'),
    promptText = document.getElementById('prompt');

    promptText.textContent = question;