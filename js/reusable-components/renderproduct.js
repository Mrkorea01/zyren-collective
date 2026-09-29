export function renderProducts(productArray, container) {
    container.innerHTML = "";

    productArray.forEach(product => {
        container.innerHTML += `
        <div class="product-card__container">
                <div class="product-card__img-wrapper">
                    <img class="product-card__img" src="${product.img}" alt="${product.imageAlt}">
                    <button type="button" class="product-card__cart-btn"  data-product-id="${product.id}">
                        <span class="product-card__cart-btn-icon"><svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" aria-hidden="true" fill="#e3e3e3"><path d="M444-144v-300H144v-72h300v-300h72v300h300v72H516v300h-72Z"/></svg></span>
                        <span class="product-card__cart-btn-text">Add to Cart</span>
                    </button>
                    <button type="button" class="product-card__wishlist-add" aria-label="add to wishlist">
                        <span class="product-card__wishlist-icon"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" height="16px" viewBox="0 -960 960 960" width="16px" fill="currentcolor"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg></span>
                    </button>
                </div>

                <div class="product-card__info-wrapper">
                    <div class="product-card__info">
                        <span class="product-card__seasonal-tag">${product.seasonalTag}</span>
                        <h3 class="product-card__title">${product.title}</h3>
                        <div class="product-card__meta-row">
                            <div class="product-card__meta">
                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="rgb(160, 25, 55)"><path d="M12 2.5l2.94 5.96 6.58.96-4.76 4.64 1.12 6.56L12 17.77 6.12 20.62l1.12-6.56L2.48 9.42l6.58-.96L12 2.5z"/></svg></span>
                                <span class="product-card__rating">${product.rating}</span>
                            </div>
                            <p class="product-card__colors">${product.colors}</p>
                        </div>
                    </div>

                    <span class="product-card__price">$${product.price / 100}</span>
                </div>
        </div>
        `
    })
}


