#include <stdio.h>

/* 10) Ingresar 3 valores en 3 variables X, Y y Z. Se desea obtener una rotación de
sus valores, es decir que el contenido de Z pase a X, el contenido de X pase a Y, y el
contenido de Y pase a Z. Mostrar luego las variables en el mismo orden en que se
ingresaron (X,Y,Z).
Indicar cómo será la salida luego de realizar lo pedido en el párrafo anterior, si se
ingresa 5 en la variable X, 15 en la variable Y y 25 en la variable Z.  */

int main()
{
    int x = 0, y = 0, z = 0, w = 0;

    printf("Ingrese el valor de la variable X: ");
    scanf("%d", &x);
    printf("Ingrese el valor de la variable Y: ");
    scanf("%d", &y);
    printf("Ingrese el valor de la variable Z: ");
    scanf("%d", &z);

    w = x;
    x = z;
    z = y;
    y = w;

    printf("\nLos valores rotados seran: \nx: %d \ny: %d \nz: %d", x, y, z);

    return 0;
}