class Cafe {
    constructor (nombre, precio, stock, descripcion) {
        this.nombre = nombre
        this.precio = parseFloat(precio)
        this.stock = stock
        this.descripcion = descripcion
    }

}

const stock_productos = []


function agregarProducto () {
    let nombre = prompt('Ingrese el nombre del producto')
    let precio = prompt('Ingrese el precio del producto')
    let stock = prompt('Ingrese la cantidad de unidades del producto')
    let descripcion = completar_descripcion()
    const prod = new Cafe (nombre, precio, stock, descripcion)
    stock_productos.push(prod)
    // console.table(stock_productos)
}

function completar_descripcion () {
    let region = prompt('REGION: ')
    let productor =prompt('PRODUCTOR:')
    let variedad = prompt('VARIEDAD: ')
    let proceso = prompt('PROCESO: ')
    let periodo = prompt('PERIODO DE COSECHA:')
    let altura = prompt('ALTURA: ')
    let notas = prompt('NOTAS DE CATA:')

    let descripcion = [region, productor, variedad, proceso, periodo, altura, notas]
    return descripcion
}

agregarProducto()