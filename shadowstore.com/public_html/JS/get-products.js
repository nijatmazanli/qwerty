function createProductCards(products) {
  const productContainer = document.getElementById('product-container');
  productContainer.innerHTML = ''; // Clear previous content

  products.forEach(product => {
    const   
 productCard = document.createElement('div');
    productCard.classList.add('product-card');

    // Create elements for product details   

    const productImage = document.createElement('img');
    productImage.src = product.imh_link;
    productCard.appendChild(productImage);

    const productName = document.createElement('h3');
    productName.textContent = product.name;   

    productCard.appendChild(productName);

    const productPrice = document.createElement('p');
    productPrice.textContent = `Price:   
 $${product.price}`;
    productCard.appendChild(productPrice);

    const productButton   
 = document.createElement('button');
    productButton.textContent = 'View';
    productCard.appendChild(productButton);

    productContainer.appendChild(productCard);
  });
}



// Replace with your actual JSON response
const productsData = [
  {
    "id": 1,
    "name": "Product 1",
    "image": "product1.jpg",
    "price": 19.99
  },  {
    "id": 1,
    "name": "Product 1",
    "image": "product1.jpg",
    "price": 19.99
  },  {
    "id": 1,
    "name": "Product 1",
    "image": "product1.jpg",
    "price": 19.99
  },  {
    "id": 1,
    "name": "Product 1",
    "image": "product1.jpg",
    "price": 19.99
  },  {
    "id": 1,
    "name": "Product 1",
    "image": "product1.jpg",
    "price": 19.99
  },  {
    "id": 1,
    "name": "Product 1",
    "image": "product1.jpg",
    "price": 19.99
  },  {
    "id": 1,
    "name": "Product 1",
    "image": "product1.jpg",
    "price": 19.99
  },  {
    "id": 1,
    "name": "Product 1",
    "image": "product1.jpg",
    "price": 19.99
  },  {
    "id": 1,
    "name": "Product 1",
    "image": "product1.jpg",
    "price": 19.99
  },  {
    "id": 1,
    "name": "Product 1",
    "image": "product1.jpg",
    "price": 19.99
  },  {
    "id": 1,
    "name": "Product 1",
    "image": "product1.jpg",
    "price": 19.99
  },  {
    "id": 1,
    "name": "Product 1",
    "image": "product1.jpg",
    "price": 19.99
  },  {
    "id": 1,
    "name": "Product 1",
    "image": "product1.jpg",
    "price": 19.99
  },  {
    "id": 1,
    "name": "Product 1",
    "image": "product1.jpg",
    "price": 19.99
  },  {
    "id": 1,
    "name": "Product 1",
    "image": "product1.jpg",
    "price": 19.99
  },  {
    "id": 1,
    "name": "Product 1",
    "image": "product1.jpg",
    "price": 19.99
  },  {
    "id": 1,
    "name": "Product 1",
    "image": "product1.jpg",
    "price": 19.99
  },  {
    "id": 1,
    "name": "Product 1",
    "image": "product1.jpg",
    "price": 19.99
  },
  // ... more products
];

createProductCards(productsData);
