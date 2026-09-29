import {products} from '../data/data.js';
import { renderProducts } from '../reusable-components/renderproduct.js';
import '../reusable-components/header.js';


const container = document.querySelector('.shop-products__grid')
renderProducts(products, container);


const productSortingsLabelBtn = document.querySelector('.product-sortings__label');
const productSortingsLists = document.querySelector('.product-sortings__lists');

productSortingsLabelBtn.addEventListener('click', () => {
    productSortingsLists.classList.toggle('active');
})

const productSortingsText = document.querySelector('.product-sortings__selected-text');
const productSortingsBtn = document.querySelectorAll('.product-sortings__list-btn');

productSortingsBtn.forEach(btn => {
    btn.addEventListener('click', () => {

        productSortingsBtn.forEach(button => {
            button.classList.remove('active');
        })

        btn.classList.add('active');

        productSortingsText.textContent = btn.textContent;

        productSortingsLists.classList.remove('active');
    })
})

const filterBtn = document.querySelector('.js-filter-btn');
const filters = document.querySelector('.js-shop-filter');
const filterPanelClose = document.querySelector('.js-filter-panel-close');

filterBtn.addEventListener('click', () => {
    filters.classList.add('is-active');
    
})

filterPanelClose.addEventListener('click', () => {
    filters.classList.remove('is-active');
})
