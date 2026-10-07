import {products} from './data/data.js';
import {renderProducts} from './reusable-components/renderproduct.js';
import './reusable-components/header.js';
import { addToCart } from './reusable-components/cart.js';
import { cart } from './reusable-components/cart.js';



const bestSeller = products.filter(eachProduct => eachProduct.isBestSeller === true);
renderProducts(bestSeller, document.querySelector('.best-sellers__product-grid'));

addToCart();

const bestSellerLabelBtn = document.querySelector('.best-sellers__label');
const bestSellerFilterLists = document.querySelector('.best-sellers__sortings-lists');

bestSellerLabelBtn.addEventListener('click', () => {
    bestSellerFilterLists.classList.toggle('active');
})

const bestSellersSortingsText = document.querySelector('.best-sellers__selected-text');
const bestSellersSortingsBtn = document.querySelectorAll('.best-sellers__sortings-list-btn');

bestSellersSortingsBtn.forEach(btn => {
    btn.addEventListener('click', () => {

        bestSellersSortingsBtn.forEach(button => {
            button.classList.remove('active');
        })

        btn.classList.add('active');

        bestSellersSortingsText.textContent = btn.textContent;

        bestSellerFilterLists.classList.remove('active');
    })
})



const subscribeBtn = document.querySelector('.js-subscribe-btn');
const promotionalInput = document.querySelector('.js-promotional-input');
const promotionalBtnSound = document.querySelector('.promotional-section__btn-sound');

function updateButtonState(){
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let email = promotionalInput.value.trim();

    if(!emailPattern.test(email)){
        subscribeBtn.textContent = 'Subscribe';
    }

    else{
        subscribeBtn.textContent = 'Ready to subscribe';
    }
}


promotionalInput.addEventListener('focus', updateButtonState);
promotionalInput.addEventListener('input', updateButtonState);

subscribeBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let email = promotionalInput.value.trim();

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){
        alert('Please enter an email address');
        return;
    }

    else{
        subscribeBtn.textContent = 'Subscribed to Zyren journal';
        promotionalBtnSound.currentTime = 0;
        promotionalBtnSound.play();
        promotionalInput.value = "";
    }

    setTimeout(function(){
        updateButtonState();
    }, 2000);
})

