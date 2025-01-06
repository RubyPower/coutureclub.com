// Interactive Product Filter
document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.product-item');
    const filterInput = document.getElementById('filter');

    filterInput.addEventListener('input', (e) => {
        const searchText = e.target.value.toLowerCase();
        products.forEach(product => {
            const productName = product.querySelector('h2').textContent.toLowerCase();
            if (productName.includes(searchText)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });
});

// Contact Form Validation
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        e.preventDefault();
        alert('Please fill out all fields!');
    }
});
