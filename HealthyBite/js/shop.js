var cart = {}; //Корзина
var order = {}; //Заказ

function init() {
    //Поиск файла goods.json
    $.getJSON("../js/goods.json", goodsOut);
}

function goodsOut(data) {
    // вывод на страницу
    console.log(data);
    var out = '';
    for (var key in data){
        out+='<div class="products-element">';
        out+=`<div class="products-element-image">`;
        out+=`<img src="../images/${data[key].img}" alt="#" class="products-image">`;
        out+=`</div>`;
        out+=`<div class="products-info">`;
        out+=`<h3 class="products-name">${data[key].name}</h3>`;
        out+=`<div class="products-structure-wrap">`;
        out+=`<h4 class="products-structure-title">Состав:</h4>`;
        out+=`<ul class="products-structure-list">`;
        out+=`<li>${data[key].description}</li>`;
        out+=`</ul>`;
        out+=`</div>`;
        out+=`</div>`;
        out+=`<div class="products-price-wrap">`;
        out+=`<div class="products-buy">`;
        out+=`<div class="buy-btn" data-id="${key}">В корзину</div>`
        out+=`</div>`;
        out+=`<p class="products-price">Цена: ${data[key].cost} ₽</p>`;
        out+=`</div>`;
        out+='</div>';
    }
    $('#goods').html(out);
    $('.buy-btn').on('click', addToCart);
    $('.buy-btn').on('click', addToOrder);
}

function addToCart(){
    // Добавляем товар в корзину
    var id = $(this).attr('data-id');
    if (cart[id]===undefined) {
        cart[id] = 1; // Если в корзине нет товара с таким уникальным id - делаем равным 1
    }
    else {
        cart[id]++; // Если такой товар есть - увеличиваем на 1
    }
    saveCart();
}

function addToOrder(){
    // Добавляем товар в корзину
    var id = $(this).attr('data-id');
    if (order[id]===undefined) {
        order[id] = 1; // Если в корзине нет товара с таким уникальным id - делаем равным 1
    }
    else {
        order[id]++; // Если такой товар есть - увеличиваем на 1
    }
    saveOrder();
}

function saveCart(){
    // Сохранение корзины в local storage
    localStorage.setItem('cart', JSON.stringify(cart));
}

function saveOrder(){
    // Сохранение заказа в local storage
    localStorage.setItem('order', JSON.stringify(cart));
}

function loadCart(){
    // Проверяю, есть ли запись cart в local storage
    if (localStorage.getItem('cart')) {
        // Если есть - расшифровываю
        cart = JSON.parse(localStorage.getItem('cart'));
    }
}

function loadOrder() {
    // Проверяю, есть ли запись order в local storage
    if (localStorage.getItem('order')) {
        // Если есть - расшифровываю
        order = JSON.parse(localStorage.getItem('order'));
    }
}

$(document).ready(function(){
    init();
    loadCart();
    loadOrder();
});