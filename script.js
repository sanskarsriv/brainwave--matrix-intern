// JavaScript for dynamically loading products and handling cart

document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { id: 1, name: "A Suitable Boy", price: 10.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKv6ll2W7RVPqN5ZADwTwgZJ6KJXDvgE8FheRv3M2znpP9VD7T" },
        { id: 2, name: "The God Of Small Things", price: 10.55, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1X-8Ld_9xI-_EVruNpN3gVvLqTGkTgKizQ3BNYxsAxJXc6zcG" },
        { id: 3, name: "Malgudi Days", price: 20.99, image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTUfozYpwHCMbzaYfsBzZlmJiVhF8cT_wP-0p0t8G9A9TiOhp09" }
    ];

    const productGrid = document.querySelector(".product-grid");
    const cartCount = document.getElementById("cart-count");
    let cartItems = 0;

    function loadProducts() {
        products.forEach(product => {
            const productCard = document.createElement("div");
            productCard.className = "product-card";
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price.toFixed(2)}</p>
                <button data-id="${product.id}">Add to Cart</button>
            `;
            productGrid.appendChild(productCard);
        });
    }

    function updateCartCount() {
        cartCount.textContent = cartItems;
    }

    productGrid.addEventListener("click", (event) => {
        if (event.target.tagName === "BUTTON") {
            cartItems++;
            updateCartCount();
            alert("Product added to cart!");
        }
    });

    loadProducts();
});
