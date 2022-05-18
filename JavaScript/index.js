// if - Si se ingresa "SALUDAR", la consola regresa el valor "HOLA".

const datoUsuario = prompt("Ingrese una cadena");

if (datoUsuario==="SALUDAR")
{
    console.log("HOLA");
}

// if - else if - Estos siguen siendo los condicionales. Si es X, pasa tal. Si no => es Y, y pasa otro tal.

if (datoUsuario==="SALUDAR")
{
    console.log("HOLA");
}
else if (datoUsuario==="DESPEDIRSE")
{
    console.log("BYE BYE");
}

// if - else if - else