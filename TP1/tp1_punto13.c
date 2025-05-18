#include <stdio.h>

/* 13) Dada la medida de cada uno de los tres ángulos de un triángulo determinar e
informar mediante un mensaje si pertenecen o no a un triángulo rectángulo. */

int main()
{
    float ang1 = 0, ang2 = 0, ang3 = 0, sum = 0;

    do
    {
        printf("Ingrese el valor del primer angulo: ");
        scanf("%f", &ang1);
        printf("Ingrese el valor del segundo angulo: ");
        scanf("%f", &ang2);
        printf("Ingrese el valor del tercer angulo: ");
        scanf("%f", &ang3);

        sum = ang1 + ang2 + ang3;

        if (sum != 180)
        {
            printf("Los angulos no forman un triangulo valido. Ingrese uno nuevo\n");
        }

    } while (sum != 180);

    if (ang1 == 90 || ang2 == 90 || ang3 == 90)
    {
        printf("Los angulos ingresados pertenecen a un triangulo rectangulo\n");
    }
    else
    {
        printf("Los angulos ingresados NO pertenecen a un triangulo rectangulo\n");
    }

    return 0;
}