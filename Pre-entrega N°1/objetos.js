class Cafe {
    constructor (nombre, precio, categoria, descripcion) {
        this.nombre = nombre
        this.precio = precio
        this.categoria = categoria
        this.descripcion = descripcion
    }

}

// Se crea una lista para almacenar los objetos Cafe
const cafes = []

// Se crea una función para poder ingresar productos
function agregarProducto () {
    let nombre = prompt('Ingrese el nombre del producto')
    let precio = parseInt(prompt('Ingrese el precio del producto'))
    let categoria = prompt('Ingrese categoría')
    let descripcion = prompt('Ingrese descripción del producto')
    const prod = new Cafe (nombre, precio, categoria, descripcion)
    cafes.push(prod)
    // console.table(cafes)
}

// A los fines de probar los métodos de arrays de objetos se cargan productos a la lista con la siguiente función
function generadorAutomatico() {
    cafes.push(new Cafe('AUTENTICO|BLENDS|250G', 990, 'BLEND-BRASIL', 'Aroma dulce a almendra tostada y chocolate'))
    cafes.push(new Cafe('CHANGO|BLENDS|250G', 1290, 'BLEND-M', 'Notas a Frutos Secos & Maduros'))
    cafes.push(new Cafe('CHULLO|BLENDS|250G', 1290, 'BLEND-M', 'Notas Cítricas & Cacao'))
    cafes.push(new Cafe('CHUSPA|BLENDS|250G', 1290, 'BLEND-M', 'Notas a Crema & Caramelo'))
    cafes.push(new Cafe('CREMA|BLENDS|250G', 990, 'BLEND-BRASIL', 'Aroma intenso a Chocolate'))
    cafes.push(new Cafe('SANTANDER|COLOMBIA|250G', 2650, 'COLOMBIA-M', 'Notas azucar morena, miel y cacao'))
    cafes.push(new Cafe('SANTANDER|COLOMBIA|1000G', 7853, 'COLOMBIA-M', 'Notas azucar morena, miel y cacao'))
    cafes.push(new Cafe('FRESCO|BLENDS|250G', 990, 'BLEND-BRASIL', 'Aroma dulce a almendra tostada. Acidez dulce a naranja'))
    cafes.push(new Cafe('MINAS GERAIS|BRASIL|250G', 1803, 'BRASIL-M', 'Notas azucar mascabo, fruta madura y chocolate'))
    cafes.push(new Cafe('MINAS GERAIS|BRASIL|1000G', 5433, 'BRASIL-M', 'Notas azucar mascabo, fruta madura y chocolate'))
    cafes.push(new Cafe('COBAN|GUATEMALA|250G', 2300, 'GUATEMALA-ORGANICO', 'Notas dulce y sabroso con acidez tartárica, sabores praliné, tofee, manzana, cítricos'))
}
generadorAutomatico()

//////////////Probamos diferentes métodos///////////////////

//Método filter()
function filtrarPorNombre() {
    let parametro = prompt("Buscar por nombre:")
    let resultado = cafes.filter((producto)=> producto.nombre.includes(parametro))
        console.table(resultado)
}
// filtrarPorNombre()

function filtrarPorCategoria() {
    let parametro = prompt("Buscar por categoria/origen:")
    let resultado = cafes.filter((producto)=> producto.categoria.includes(parametro))
        console.table(resultado)
}
// filtrarPorCategoria()


// Descripción de cada producto - Método forEach()
function descripciónProducto() {
    cafes.forEach((cafe)=> {
        console.log(cafe.nombre)
        console.log(cafe.descripcion)
    })
}
// descripciónProducto()


//Ordena los productos por precio - Metodo sort()
function ordenarProductos() {
    cafes.sort((a, b)=> {
        if (a.precio > b.precio) {
            return 1
        }
        if (a.precio < b.precio) {
            return -1
        }
        return 0
    })
    console.table(cafes)
}
// ordenarProductos()