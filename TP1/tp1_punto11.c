#include <stdio.h>

/* 11) Dados dos números distintos, mostrarlos ordenados en forma creciente. */

int main()
{
    float num1 = 0, num2 = 0;

    printf("Ingrese el primer numero: ");
    scanf("%f", &num1);
    printf("Ingrese el segundo numero: ");
    scanf("%f", &num2);

    if (num1 > num2)
    {
        printf("Numeros en orden creciente: %.2f, %.2f", num1, num2);
    }
    else
    {
        printf("Numeros en orden creciente: %.2f, %.2f", num2, num1);
    }

    return 0;
}
