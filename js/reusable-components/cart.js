import './header.js';
import { renderProducts } from './renderproduct.js';
import {products} from '../data/data.js';


export const cart = JSON.parse(localStorage.getItem("cart")) || [];


export function addToCart() {
    const cartBtn = document.querySelectorAll(".product-card__cart-btn");
    const headerCartCount = document.querySelector(".header-section__cart-count");

    headerCartCount.textContent = updateCartCount();

    cartBtn.forEach((eachCartButton) => {
        eachCartButton.addEventListener('click', () => {
            const productId = eachCartButton.dataset.productId;

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


