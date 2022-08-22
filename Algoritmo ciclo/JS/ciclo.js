/*
Se pide al usuario que ingrese un número entero y se devuelve la cantidad 
de dígitos que tiene el número
*/

let numero = parseInt(prompt("Ingrese un número entero:"))
let cantidad = 0

while (numero > 0){
    cantidad += 1
    numero = parseInt(numero/10)
}
console.log("El número ingresado tiene", cantidad, "dígitos")