#include <stdio.h>

/* 11) Dados dos números distintos, mostrarlos ordenados en forma creciente. */

int main()
{
    float num1 = 0, num2 = 0;

    do
    {
        printf("Ingrese el primer numero: ");
        scanf("%f", &num1);
        printf("Ingrese el segundo numero: ");
        scanf("%f", &num2);

        if (num1 == num2)
        {
            printf("Los numeros deben ser distintos. Intente nuevamente.\n\n");
        }

    } while (num1 == num2);

    if (num1 > num2)
    {
        printf("Numeros en orden creciente: %.2f %.2f\n", num2, num1);
    }
    else
    {
        printf("Numeros en orden creciente: %.2f %.2f\n", num1, num2);
    }

    return 0;
}