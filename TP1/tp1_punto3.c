#include <stdio.h>

/* 3) Dados dos números enteros obtener su suma, resta, multiplicación y división. */

int main()
{
    int num1 = 0, num2 = 0, sum = 0, multi = 0, resta = 0;
    float div = 0;

    printf("Ingrese el primer numero: ");
    scanf("%d", &num1);
    printf("Ingrese el segundo numero: ");
    scanf("%d", &num2);

    sum = num1 + num2;
    multi = num1 * num2;
    resta = num1 - num2;
    div = (float)num1 / num2;

    printf("\nLa suma de los numeros es: %d", sum);
    printf("\nLa multiplicacion de los numeros es: %d", multi);
    printf("\nLa resta de los numeros es: %d", resta);
    printf("\nLa division de los numeros es: %.2f", div);

    return 0;
}