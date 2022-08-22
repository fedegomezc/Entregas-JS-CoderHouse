/*
Se pide al usuario que ingrese un número entero y se devuelve la cantidad 
de dígitos que tiene el número
*/

let numero = parseInt(prompt("Ingrese un número entero:"))
// Se inicializa un contador en 0
let cantidad = 0

// Si se ingresa un numero negativo se convierte a positivo para operarlo
if (numero < 0){
    numero = numero*(-1)
}
// mientras el numero tenga digitos se contabiliza 1 y se quita un dígito
while (numero > 0){
    cantidad += 1
    numero = parseInt(numero/10)
}

console.log("El número ingresado tiene", cantidad, "dígitos")