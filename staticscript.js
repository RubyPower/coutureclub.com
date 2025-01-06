// Base URL for the API
const apiBaseUrl = "http://127.0.0.1:5000/api";

// Function to fetch and display products
async function loadProducts() {
    try {
        const response = await fetch(`${apiBaseUrl}/products`);
        const products = await response.json();

        const productsSection = document.getElementById('products');
        const productList = document.createElement('div');
        productList.className = 'product-list';

        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.className = 'product-item';
            productItem.innerHTML = `
                <h2>${product.name}</h2>
                <p>Price: $${product.price.toFixed(2)}</p>
                <p>Available Sizes: ${product.size.join(', ')}</p>
                <p>Stock: ${product.stock}</p>
                <button onclick="addToCart(${product.id}, '${product.size[0]}')">Add to Cart</button>
            `;
            productList.appendChild(productItem);
        });

        productsSection.appendChild(productList);
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

// Function to add an item to the cart
async function addToCart(productId, size) {
    try {
        const response = await fetch(`${apiBaseUrl}/cart`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ product_id: productId, size })
        });
        const result = await response.json();

        if (response.ok) {
            alert("Item added to cart!");
        } else {
            alert(`Error: ${result.error}`);
        }
    } catch (error) {
        console.error("Error adding to cart:", error);
    }
}

// Load products on page load
document.addEventListener('DOMContentLoaded', loadProducts);
