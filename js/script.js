// For Menu Toggle (Navigation)
let menuToggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
menuToggle.onclick = function () {
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

// For Right Side Drawer
let button = document.querySelector('.btn');
let cart = document.querySelector('.ticket-cart');
button.addEventListener('click', () => {
    cart.classList.toggle('animateMe');
})
let cartClose = document.querySelector('.close-Cart');
cartClose.addEventListener('click', () => {
    cart.classList.toggle('animateMe');
})