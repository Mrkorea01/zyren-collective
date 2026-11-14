import './header.js';
import {products} from '../data/data.js';


export const cart = JSON.parse(localStorage.getItem("cart")) || [];

export function addToCart() {
    const cartBtn = document.querySelectorAll(".product-card__cart-btn");
    const headerCartCount = document.querySelector(".header-section__cart-count");

    headerCartCount.textContent = updateCartCount();

    cartBtn.forEach((eachCartButton) => {
        eachCartButton.addEventListener('click', () => {
            const productId = Number(eachCartButton.dataset.productId);

            let matchingProduct = false;

            cart.forEach((eachProduct) => {
                if(productId === eachProduct.productId) {
                    matchingProduct = true;
                    eachProduct.quantity += 1;
                }
            })

            if(matchingProduct === false){
                cart.push({
                    productId: productId,
                    quantity: 1
                });
            } 

            saveCart();

            headerCartCount.textContent = updateCartCount();

            console.log(cart);
        })
    })
}


function updateCartCount() {
    let total = 0;

    cart.forEach((eachProduct) => {
        total += eachProduct.quantity;
    })

    return total;
}


function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}


let subTotal = 0;

cart.forEach((cartItem) => {
    const findProduct = products.find(function(eachProduct) {
        return cartItem.productId === eachProduct.id;
    })

    if(findProduct) {
        const total = findProduct.price * cartItem.quantity;
        subTotal += total;
    }
})


const promoCodeInput = document.querySelector('#cart__promo-input');
const promoApplyBtn = document.querySelector('.cart__promo-btn');

const promoMessage = document.querySelector('.cart__promo-message');

if(promoApplyBtn) {
    promoApplyBtn.addEventListener('click', (event) => {
        validateUserInput();
    })
}


if(promoCodeInput) {
    promoCodeInput.addEventListener('keydown', (event) => {
        if(event.key === "Enter"){
            validateUserInput();
        }
    })
}

if (promoCodeInput) {
    promoCodeInput.addEventListener('input', removeErrorMsg);
}


let promoTimer;

function validateUserInput() {
    if (promoCodeInput.value !== "MrKorea2027"){
        promoMessage.classList.remove("promo-success-message");
        promoMessage.classList.add("promo-error-message");
        promoMessage.textContent = "Invalid promo code";

        clearTimeout(promoTimer);
         
        promoTimer = setTimeout(() => {
            promoMessage.classList.remove("promo-error-message");
            promoMessage.textContent = "";
        }, 3000);
    }

    else {
        clearTimeout(promoTimer);
        promoMessage.classList.remove("promo-error-message");
        promoMessage.classList.add("promo-success-message");
        promoMessage.textContent = "Promo code applied successfully!"
        promoCodeInput.value = "";
    }
}

function removeErrorMsg() {
    if(promoCodeInput.value.trim() === ""){
        promoMessage.classList.remove("promo-error-message");
    }
}


function calculateDiscount() {
    
}
