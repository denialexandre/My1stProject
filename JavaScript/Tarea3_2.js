function enter()
    {
    var array=[];
    array=document.formulario.miarea.value.split(" ");
    var n_palabras=array.length;
    var primera_palabra=array[0];
    document.getElementById("resultado").innerHTML="Número de palabras: " +n_palabras+ 
                                                "<br>Primera palabra: " +primera_palabra;
    }