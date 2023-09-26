//A treia sarcina
const products = [
    {
        name: "Laptop",
        category: "Electronics",
        price: 1800,
        originCountry: { name: "China", code: "CN" }
    },
    {
        name: "Tableta",
        category: "Electronics",
        price: 1000,
        originCountry: { name: "Taiawan", code: "TW" }
    },
    {
        name: "Blugi",
        category: "Clothing",
        price: 300,
        originCountry: { name: "Moldova", code: "MD" }
    },
];

const productListContainer = document.getElementById("productList");
products.forEach(product => {

    const card = document.createElement("div");
    card.classList.add("card");

    const name = document.createElement("h2");
    name.appendChild(document.createTextNode("Name: " + product.name))

    const category = document.createElement("p");
    category.appendChild(document.createTextNode("Category: " + product.category))

    const price = document.createElement("p");
    price.appendChild(document.createTextNode("Price: " + product.price + " lei"))

    const originCountry = document.createElement("p");
    originCountry.appendChild(document.createTextNode("Country: " + product.originCountry.code))

    const editButon = document.createElement("button");
    editButon.appendChild(document.createTextNode("Edit"))
    editButon.addEventListener("click", () => {
        const names = prompt("Introdu noul nume", product.name)
    })
    


    const removeButon = document.createElement("button");
    removeButon.appendChild(document.createTextNode("Remove"))
    removeButon.addEventListener("click", () => {
        const names = prompt("Introdu noul nume", product.name)
    })
    
    
    card.appendChild(name);
    card.appendChild(category);
    card.appendChild(price);
    card.appendChild(originCountry);
    card.appendChild(editButon)
    card.appendChild(removeButon)

    productListContainer.appendChild(card);
});



function addProduct(product) {
    products.push(product);
}

addProduct({
    name: "Mouse",
    category: "Electronics",
    price: 25,
    originCountry: { name: "China", code: "CN" }
});

function takeProduct(productName) {
    const index = products.findIndex(product => product.name === productName);
    if (index !== -1) {
        const product = products.splice(index, 1)[0];
        return product;
    }
    return null;
}

const takenProduct = takeProduct("Mouse");
console.log("Produsul luat din depozit:", takenProduct);

function filterByCategory(category) {
    return products.filter(product => product.category === category);
}

const electronicsProducts = filterByCategory("Electronics");
console.log("Produsele din categoria Electronics:", electronicsProducts);

function filterByOriginCountry(countryCode) {
    return products.filter(product => product.originCountry.code === countryCode);
}

const usOriginProducts = filterByOriginCountry("US");
console.log("Produsele de origine SUA:", usOriginProducts);

function findMostExpensiveProduct() {
    let mostExpensiveProduct = products[0];

    products.forEach(product => {
        if (product.price > mostExpensiveProduct.price)
            mostExpensiveProduct = product;
    });
    return mostExpensiveProduct;
}

const mostExpensive = findMostExpensiveProduct();
console.log("Produsul cel mai scump:", mostExpensive);

function findCheapestProduct() {
    let cheapesProduct = products[0];

    products.forEach(product => {
        if (product.price < cheapesProduct.price)
            cheapesProduct = product;
    });

    return cheapesProduct;
}

const cheapest = findCheapestProduct();
console.log("Produsul cel mai ieftin:", cheapest);

function findProductsInRange(minPrice, maxPrice) {
    return products.filter(product => product.price >= minPrice && product.price <= maxPrice);
}

const priceRangeProducts = findProductsInRange(600, 1000);
console.log("Produsele cu preț între 600 și 1000:", priceRangeProducts);
