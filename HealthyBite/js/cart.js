var cart = {};
var order = {};
var totalamount = {};

function loadOrder() {
    // Проверяю, есть ли запись cart в local storage
    if (localStorage.getItem('order')) {
        // Если есть - расшифровываю
        order = JSON.parse(localStorage.getItem('order'));
        showOrder();
    }
    else {
        $('.cart-order-wrap').html('<h3 class="cart-order-name">---</h3>');
        $('.cart-order-bottom').html('<a href="#" class="order-btn">Перейти к оформлению</a>');
    }
}

function showOrder() {
    // Вывод заказа
    if (!isEmpty(order)) {
        $('.cart-order-wrap').html('<h3 class="cart-order-name">---</h3>');
    }
    else {
        $.getJSON('../js/goods.json', function (data){
            var goods = data;
            var out = '';
            for (var key in order) {
                out+=`<h3 class="cart-order-name">${data[key].name}</h3>`;
                loadAmount();
            }
            $('.cart-order-wrap').html(out);
        }); 
    }
}

function loadAmount() {
    // Проверяю, есть ли запись cart в local storage
    if (localStorage.getItem('cart')) {
        // Если есть - расшифровываю
        cart = JSON.parse(localStorage.getItem('cart'));
        showAmount();
    }
    else {
        $('.cart-order-bottom-amount-text-wrap').html('<p class="cart-order-bottom-amount-text">0 товар(/ов)</p>');
        $('.cart-order-bottom-amount-text-price-wrap').html('<p class="cart-order-bottom-amount-text-price">0 ₽</p>');
    }
}

function showAmount() {
    // Проверяем, есть ли запись cart в local storage
    if (localStorage.getItem('cart')) {
        // Если есть - расшифровываем
        cart = JSON.parse(localStorage.getItem('cart'));
        showTotalAmount();
    } 
    else {
        $('.cart-order-bottom-amount-text-wrap').html('<p class="cart-order-bottom-amount-text">0 товар(ов)</p>');
        $('.cart-order-bottom-amount-text-price-wrap').html('<p class="cart-order-bottom-amount-text-price">0 ₽</p>');
    }
}

function showTotalAmount() {
    $.getJSON('../js/goods.json', function(data) {
        var goods = data;
        var totalPrice = 0; // Общая цена всех товаров в корзине
        var totalQuantity = 0; // Общее количество товаров в корзине
        for (var key in cart) {
            var amount = cart[key] * goods[key]['cost']; // Рассчитываем цену конкретного товара в корзине
            var quantity = parseInt(cart[key]); // Получаем количество конкретного товара в корзине
            totalPrice += amount; // Добавляем цену конкретного товара к общей цене
            totalQuantity += quantity; // Добавляем количество конкретного товара к общему количеству
        }
        $('.cart-order-bottom-amount-text-wrap').html('<p class="cart-order-bottom-amount-text">' + totalQuantity + ' товар(ов)</p>');
        $('.cart-order-bottom-amount-text-price-wrap').html('<p class="cart-order-bottom-amount-text-price">' + totalPrice + ' ₽</p>');
    });
}

function loadCart(){
    // Проверяю, есть ли запись cart в local storage
    if (localStorage.getItem('cart')) {
        // Если есть - расшифровываю
        cart = JSON.parse(localStorage.getItem('cart'));
        showCart();
        loadOrder();
    }
    else {
        $('.cart-content').html('<h3 class="cart-order-title">Корзина пуста...</h3>');
    }
}

function showCart() {
    // Вывод корзины
    if (!isEmpty(cart)) {
        $('.cart-content').html('<h3 class="cart-order-title">Корзина пуста...</h3>');
    }
    else {
        $.getJSON('../js/goods.json', function (data){
            var goods = data;
            var out = '';
            var totalPrice = 0;
            for (var key in cart) {
                var amount = cart[key] * goods[key]['cost']; // Рассчитываем цену конкретного товара в корзине
                totalPrice += amount;
                out+='<div class="cart-element">';
                out+=`<div class="cart-el-img">`;
                out+=`<img src="../images/${data[key].img}" alt="#">`;
                out+=`</div>`;
                out+=`<div class="cart-el-info">`;
                out+=`<h3 class="cart-el-name">${data[key].name}</h3>`;
                out+=`<div class="cart-el-structure-wrap">`;
                out+=`<h4 class="cart-el-structure-title">Состав:</h4>`;
                out+=`<ul class="cart-el-structure-list">`;
                out+=`<li>${data[key].description}</li>`;
                out+=`</ul>`;
                out+='<p class="cart-el-cost">Цена: ' + amount + ' ₽</p>';
                out+=`</div>`;
                out+=`<div class="interact-with-el-wrap">`;
                out+=`<div class="cart-el-plus" data-id=${key}>`;
                out+=`<div>`;
                out+=`</div>`;
                out+=`</div>`;
                out+=`<p class="cart-el-amount">${cart[key]}</p>`;
                out+=`<div class="cart-el-minus" data-id=${key}>`;
                out+=`<div>`;
                out+=`</div>`;
                out+=`</div>`;
                out+=`<div class="cart-el-delete" data-id=${key}>`;
                out+=`<p>Удалить &#215;</p>`;
                out+=`</div>`;
                out+=`<div class="cart-el-delete small-screen" data-id=${key}>`;
                out+=`<p>&#215;</p>`;
                out+=`</div>`;
                out+=`</div>`;
                out+=`</div>`;
                out+='</div>';
                loadAmount();
            }
            $('.cart-content').html(out);
            $('.cart-el-delete').on('click', delGoods);
            $('.cart-el-minus').on('click', minusGoods);
            $('.cart-el-plus').on('click', plusGoods);
        });
    }
}

function delGoods() {
    // Удаление товара из корзины
    var id = $(this).attr('data-id');
    delete cart[id];
    delete order[id];
    saveCart();
    saveOrder();
    showCart();
    showOrder();
    loadAmount();
}

function plusGoods() {
    // Добавление одной еденицы товара в корзине
    var id = $(this).attr('data-id');
    cart[id]++;
    order[id]++;
    saveCart();
    saveOrder();
    showCart();
    showOrder();
    loadAmount();
}

function minusGoods() {
    // Добавление одной еденицы товара в корзине
    var id = $(this).attr('data-id');
    if (cart[id]==1 && order[id]==1) {
        delete cart[id]; 
        delete order[id];
    }
    else {
        cart[id]--;
        order[id]--;
    }
    saveCart();
    saveOrder();
    showCart();
    showOrder();
    loadAmount();
}

function saveCart(){
    // Сохранение корзины в local storage
    localStorage.setItem('cart', JSON.stringify(cart));
}

function saveOrder(){
    // Сохранение корзины в local storage
    localStorage.setItem('order', JSON.stringify(cart));
}

function isEmpty(object){
    // Проверка корзины на пустоту
    for (var key in object)
    if (object.hasOwnProperty(key)) return true;
    return false;
}

$(document).ready(function () {
    loadCart();
    loadOrder();
    loadAmount();
});