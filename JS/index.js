//Array de productos
let Productos =[
    {id:1, nombre: "Zapatillas", cantidad: 3, precio: 80000},
    {id:2, nombre: "Mochila", cantidad: 5, precio: 50000},
    {id:3, nombre: "Cartera", cantidad: 10, precio: 60000},
    {id:4, nombre: "Billetera", cantidad: 2, precio: 40000},
]

// Función para calcular el precio con IVA
const iva = 0.21;
function PrecioIva(precio) {
    return precio + precio * iva;
}

// Mostrar información de los productos
for (let index = 0; index < Productos.length; index++) {
    const producto = Productos[index];
    const precioConIva = PrecioIva(producto.precio); //

    console.log(
        `${producto.nombre}: ${producto.cantidad} un. | Precio: $${producto.precio} | Precio con IVA: $${precioConIva}`
    );
   
}

//Hice unas modificaciones en el código cuando apliqué la opción de precio con IVA y esta parte del código me quedó aplicada sólo al ultimo elemento del array (antes era a cada uno de ellos). Intenté hacerlo de otra forma pero no me salió.
let stockSuficiente = 5

    if (stockSuficiente <= 4) {
        console.log("Stock suficiente");
    } 
    else {
        console.log("Reponer stock!");
    }


//Suma de total de productos en stock
let total = 0;

for (let i = 0; i < Productos.length; i++) {
    total += Number(Productos[i].cantidad); 
}

console.log("Total de productos en stock:", total);

//Alerta de bajo stock total
if (total >= 50) {
    console.log("Stock suficiente");
} 
else {
    alert("Atención: Tu local tiene muy poco stock. Reponé tus productos!");
}