// Products list
const cafes = [
    {
        id: 1,
        name: 'AUTENTICO | BLENDS | 250G',   
        price: 990,
        category: 'BLEND-BRASIL',
        description: 'Café Autentico Blend. Notas: Aroma dulce a almendra tostada y chocolate',
        image: 'images/AUTENTICO-BLENDS.jpg'
    },
    {
        id: 2,
        name: 'CHANGO | BLENDS | 250G',   
        price: 1290,
        category: 'BLEND-M',
        description: 'Café Chango Blend. Notas: Frutos Secos & Maduros',
        image: 'images/CHANGO-BLENDS.jpg'
    },
    {
        id: 3,
        name: 'CHULLO | BLENDS | 250G',
        price: 1290,
        category: 'BLEND-M',
        description: 'Cafe Chullo Blend. Notas: Cítricas & Cacao',
        image: 'images/CHULLO-BLENDS.jpg'
    },
    {
        id: 4,
        name: 'CREMA | BLENDS | 250G',
        price: 990,
        category: 'BLEND-BRASIL',
        description: 'Café Crema Blend. Notas: Aroma intenso a Chocolate',
        image: 'images/CREMA-BLENDS.jpg'
    },
    {
        id: 5,
        name: 'SANTANDER | COLOMBIA | 250G',
        price: 2650,  
        category: 'COLOMBIA-M',
        description: 'Café Santander, Colombia. Notas: azucar morena, miel y cacao',     
        image: 'images/SANTANDER-COLOMBIA.jpg'
    },
    {
        id: 6,
        name: 'FRESCO | BLENDS | 250G',
        price: 990,
        category: 'BLEND-BRASIL',
        description: 'Café Fresco Blend. Notas: Aroma dulce a almendra tostada. Acidez dulce a naranja',       
        image: 'images/FRESCO-BLENDS.jpg'
    },
    {
        id: 7,
        name: 'MINAS GERAIS | BRASIL | 250G',
        price: 1803,
        category: 'BRASIL-M',    
        description: 'Café Minas Gerais, Brasil. Notas: azucar mascabo, fruta madura y chocolate',
        image: 'images/MINA-GERAIS-BRASIL.jpg'
    },
    {
        id: 8,
        name: 'COBAN | GUATEMALA | 250G',
        price: 2300,
        category: 'GUATEMALA-ORGANICO',   
        description: 'Café Coban, Guatemala. Notas: dulce y sabroso con acidez tartárica, sabores praliné, tofee, manzana, cítricos',
        image: 'images/COBAN-GUATEMALA.jpg'
    }
];


// dynamic loading of products - interaction with HTML
// If another product is added in 'cafes' list, the page is automatically updated
const loadProducts = (cafes) =>
{
    // Select section #container node
    let container = document.querySelector('#container');
    // Looping Products array
    for (const product of cafes) {
        // Create 'div' card
        let div = document.createElement('div')
        // set attribute for css style
        div.setAttribute('class', 'card')
        // Create dynamic HTML content  
        div.innerHTML = `
            <img src="${product.image}" alt="${product.description}">
            <h3>$${product.price}</h3>
            <h4>${product.name}</h4>
        `;
        // Add 'div' to container section
        container.appendChild(div)
    }
}

loadProducts(cafes);