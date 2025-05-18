#include <stdio.h>

/* 3. Elabore un algoritmo que calcule el producto de dos enteros A y B
empleando sólo la operación suma. */

int main()
{
    int num1 = 0, num2 = 0, i = 0, multi = 0;

    printf("\n Ingrese dos numeros para multiplicarlos: \n");

    printf("Primer numero: ");
    scanf(" %d", &num1);

    printf("Segundo numero: ");
    scanf(" %d", &num2);

    for (i = 1; i <= num2; i++)
    {
        multi += num1;
    }

    printf("El numero resultante de la multiplicacion es: %d\n", multi);

    return 0;
}