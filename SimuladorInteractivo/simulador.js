// Función para pedir al usuario la cantidad de productos a llevar (validación de datos)
const cantidadProductos = () => {
    let cantidad = 0
    // Se pide la cantidad de productos a llevar y se valida la entrada
    while(true){
        cantidad = parseInt(prompt("Ingrese la cantidad de productos a llevar: "))
        if (!isNaN(cantidad) && cantidad!=null && cantidad!="" && cantidad<=10 && cantidad>0 ){
            // es numero y es menor o igual a 10 productos
            break
        } else {
            alert("Ingrese un número válido (Puede ingresar hasta 10 productos)")
        }
    }
    return cantidad
}

// Funcion para ingresar el precio de cada producto y devolver la suma total
const ingresoPrecios = (cant_productos) => {
    let precio = 0
    let suma = 0

    for (i=1; i<=cant_productos; i++) {
        // se pide el precio y se valida que la entrada sea numerica
        while(true){
            precio = parseFloat(prompt("Ingrese el precio del producto " + i ))
            if (!isNaN(precio) && precio!=null && precio!="" ){
                // es numero
                break
            } else {
                alert("ingreso incorrecto, vuelva a ingresar el precio")
            }
        }
        suma = suma + precio
    }
    return suma.toFixed(2)
}

// Función para obtener el precio con IVA
const precioIva = (valor) => { return valor*1.21}



// Función aplicar código descuento

const descuento = (valor) => { 
    // Códigos válidos
    let desc10 = "TIENDA10"
    let desc20 = "PROMO20"
    let precioFinal = valor

    while(true){
        pregunta = confirm("Tiene un código de descuento?")
        if (pregunta === true) {
            codigo = prompt('Ingrese su código de descuento:')
            if (codigo === desc10){
                precioFinal = precioFinal*0.9
                break
            } else if (codigo === desc20){
                precioFinal = precioFinal*0.8
                break
            } else {
                alert("Código inválido")
                continue
            }
        } else {
            break
        }
    }
    return precioFinal 
 }


// Simulador
// Pedimos al usuario la cantidad de productos a llevar
let nProductos = cantidadProductos()
document.write("La cantidad de productos a llevar son: " + nProductos + "<br>")

// Solicitamos que ingrese el precio de cada producto
let sumaProd = ingresoPrecios(nProductos)
document.write("La suma de los precios de sus productos es: $" + sumaProd + "<br>")

// Mostramos el precio con IVA
let precioConIva = precioIva(sumaProd).toFixed(2)
document.write("El precio con IVA es de: $" + precioConIva + "<br>")

// Preguntamos al usuario si tiene un cupón de descuento y en el caso de ser así aplicamos el descuento (códigos válidos: 'TIENDA10', 'PROMO20')
let TotalConDescuentos = descuento(precioConIva)
document.write("Descuento (cupón): $" + (precioConIva - TotalConDescuentos) + "<br>")
document.write("<h3>TOTAL: " + TotalConDescuentos + "<h3>")
