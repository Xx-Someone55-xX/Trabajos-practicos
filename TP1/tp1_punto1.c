#include <stdio.h>

/* 1) Dados como datos dos números calcular su suma y su producto e informar los resultados. */

int main()
{
    float num1 = 0, num2 = 0, sum = 0, multi = 0;

    printf("Ingrese el primer numero: ");
    scanf("%f", &num1);
    printf("Ingrese el segundo numero: ");
    scanf("%f", &num2);

    sum = num1 + num2;
    multi = num1 * num2;

    printf("\nLa suma de los numeros es: %.2f", sum);
    printf("\nLa multiplicacion de los numeros es: %.2f", multi);

    return 0;
}