// Tarea 1: Crear un algoritmo utilizando un ciclo.
//
// Cierto restaurante quiere calcular sus ganancias diarias para ver si le conviene o no, adquirir "Terminales de pago con Tarjeta"
// y poder pagar la comisión que requiere el banco. Esto es un ejercicio de "market sizing" para el tema de finanzas.
//
// Reglas:
// 1. Número de clientes por día.
// 2. Precio del ticket por cliente.
// 3. Promedio de gasto por cliente.
// 4. Ticket más alto.

let NumeroDeClientes = Number(prompt("Por favor, ingresa el numero de clientes:"));
let PrecioTicketXCliente = 0;
let Bajo = 0;
let Alto = 0;

for (let i=1; i<=NumeroDeClientes; i++)
{
    const PrecioActual = Number(prompt("Por favor, ingresa el monto del ticket: "+(i)));
    PrecioTicketXCliente += PrecioActual;
    if (PrecioActual > Alto);
    {
        Alto = PrecioActual;
    }
    /*
    if(i==1)
    {
        Bajo = PrecioActual;
    }
    
    if(Bajo > PrecioActual);
    {
        Bajo = PrecioActual;
    }*/
}

console.log("Número de clientes (PAX):" + NumeroDeClientes);
/*console.log("El ticket mas bajo fue de:" + Bajo);*/
console.log("El ticket mas alto fue de (MXN):" + Alto);
console.log("El monto promedio de los tickets fue de (MXN):" + PrecioTicketXCliente/NumeroDeClientes);




/*  ---------------------------------

NOTAS DE CLASE:

// if - Si se ingresa "SALUDAR", la consola regresa el valor "HOLA".

const datoUsuario = prompt("Ingrese una cadena");

if (datoUsuario==="SALUDAR")
{
    console.log("HOLA");
}

// if - else if - else - Estos siguen siendo los condicionales. Si es X, pasa tal. Si no => es Y, y pasa otro tal.
//Se pueden poner tantos "else if" como uno quiera.
// "else" es para cuando no se cumpla ninguna de las condiciones.

if (datoUsuario==="SALUDAR")
{
    console.log("HOLA");
}
else if (datoUsuario==="DESPEDIRSE")
{
    console.log("BYE BYE");
}
else if (datoUsuario==="BIENVENIDA")
{
    console.log("WELCOME, idiot!");
}
else
{
    console.log("INVALID OPTION");
}
-----------------------------------------------------------------*/