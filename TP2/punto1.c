#include <stdio.h>

/* 1. En un experimento químico se obtuvieron un conjunto de pares de valores
de compuestos (C1, C2) y se requiere que desarrolle un programa que
determine e imprima:
a. Cuantos pares (C1,C2) tienen el mismo valor de C1 que el primer
par (C1,C2) de la lista.
b. Primer valor de C1 mayor que C2
c. En cuantos pares (C1, C2) se cumple que C1 es el triple de C2 */

int main()
{
    float c1 = 0, c2 = 0, primer_c1 = 0, primv = 0;
    int check = 0, cont = -1, check_primv = 0, cont3 = 0;

    printf("Ingrese los valores de los compuestos, si desea dejar de ingresar pongale 0 a ambos \n");
    do
    {
        printf("Ingrese el valor de C1: ");
        scanf(" %f", &c1);
        printf("Ingrese el valor de C2: ");
        scanf(" %f", &c2);

        if (c1 == 0 && c2 == 0)
        {
            break;
        }

        if (check != 1) /* Punto a) */
        {
            primer_c1 = c1;
            check = 1;
        }

        if (primer_c1 == c1)
        {
            cont++;
        }

        if (check_primv != 1) /* Punto b) */
        {
            if (c1 > c2)
            {
                primv = c1;
                check_primv = 1;
            }
        }

        if (c1 == 3 * c2) /* Punto c) */
        {
            cont3++;
        }

    } while (c1 != 0 || c2 != 0);

    printf("\nResultados:\n");

    printf("Los pares que tienen el mismo valor del primer C1 son: %d\n", cont);

    if (check_primv == 0)
    {
        printf("No se encontro ningun valor de C1 mayor a C2\n");
    }
    else
    {
        printf("El primer valor de C1 mayor a C2 es:  %.2f\n", primv);
    }

    printf("En %d pares se cumple que C1 es el triple de C2\n", cont3);

    return 0;
}