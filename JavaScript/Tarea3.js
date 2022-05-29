/* Tarea 3 | Incorporar Arrays.
Para esta tarea, he decido escribir el código para calcular la secuencia de los números Fibonacci */

var a=new Array();
    a[0]=1;
    a[1]=1;
for(i=2;i<50;i++)
    {
    a[i]=a[i-1]+a[i-2];
    document.write(a[i]+"<br/>");
    }