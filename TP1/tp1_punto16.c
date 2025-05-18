#include <stdio.h>

/* 16) Se leen tres números que son las longitudes de los lados de un triángulo.
Determinar e informar si el mismo es equilátero, isósceles o escaleno. */

int main()
{
    float lado1 = 0, lado2 = 0, lado3 = 0;

    do
    {
        printf("Ingrese el primer lado: ");
        scanf(" %f", &lado1); // Agregar espacio antes de %f
        printf("Ingrese el segundo lado: ");
        scanf(" %f", &lado2); // Agregar espacio antes de %f
        printf("Ingrese el tercer lado: ");
        scanf(" %f", &lado3); // Agregar espacio antes de %f

        if ((lado1 + lado2 > lado3) &&
            (lado1 + lado3 > lado2) &&
            (lado2 + lado3 > lado1))
        {
            break;
        }
        else
        {
            printf("Los lados ingresados no forman un triangulo valido. Intente de nuevo.\n\n");
        }

    } while (1);

    if (lado1 == lado2 && lado2 == lado3)
    {
        printf("El triangulo es equilatero.\n");
    }
    else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3)
    {
        printf("El triangulo es isosceles.\n");
    }
    else
    {
        printf("El triangulo es escaleno.\n");
    }

    return 0;
}