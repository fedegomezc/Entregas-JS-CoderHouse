class Cafe {
    constructor (nombre, precio, stock, descripcion) {
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
        this.descripcion = descripcion
    }

    restarStock(num) {
        if (num < this.stock) {
            this.stock = this.stock - num
        } else if (num === this.stock) {
            this.stock = this.stock - num
            alert('stock en cero, reponer!')
        } else {
            alert('Operación inválida. El stock disponible es: ' + this.stock)
        }
    }
}

const stockProductos = []

function agregarProducto () {
    let nombre = prompt('Ingrese el nombre del producto')
    let precio = parseInt(prompt('Ingrese el precio del producto'))
    let stock = parseInt(prompt('Ingrese la cantidad de unidades del producto'))
    let descripcion = prompt('Ingrese descripción del producto')
    // let descripcion = completar_descripcion()          // Se omite el uso de la función con fines prácticos
    const prod = new Cafe (nombre, precio, stock, descripcion)
    stockProductos.push(prod)
    // console.table(stock_productos)
}

// Ejemplos de instancias-objetos Cafe (nombre, precio, cantidad, descripción)
let cafe1 = new Cafe('HONDURAS', 3290, 20, 'descripción1')
let cafe2 = new Cafe('MEXICO', 3190, 10, 'descripción2')
let cafe3 = new Cafe('COSTA RICA', 2489, 15, 'descripción3')
let cafe4 = new Cafe('ETIOPIA', 2489, 15, 'descripción4')
let cafe5 = new Cafe('EL SALVADOR', 1593, 18, 'descripción5')
let cafe6 = new Cafe('COLOMBIA', 1593, 9, 'descripción6')

// AGREGAMOS LOS OBJETOS AL ARRAY stockProductos
stockProductos.push(cafe1, cafe2, cafe3, cafe4, cafe5, cafe6)

// RECORRIDO DE UN ARRAY - imprimimos por consola los nombres de los productos
// for (const producto of stockProductos) {
//     console.table(producto)
// }

// AGREGAR UN PRODUCTO Y LUEGO VERLO INCORPORADO EN LA LISTA
// agregarProducto()
// console.table(stockProductos)




/////// A los fines prácticos se omite función de incorporar descripción detallada del café ///////
// function completar_descripcion () {
//     let region = prompt('REGION: ')
//     let productor =prompt('PRODUCTOR:')
//     let variedad = prompt('VARIEDAD: ')
//     let proceso = prompt('PROCESO: ')
//     let periodo = prompt('PERIODO DE COSECHA:')
//     let altura = prompt('ALTURA: ')
//     let notas = prompt('NOTAS DE CATA:')

//     let descripcion = [region, productor, variedad, proceso, periodo, altura, notas]
//     return descripcion
// }
////////////////////////////////////////////////////////////////////////////////////////////////


