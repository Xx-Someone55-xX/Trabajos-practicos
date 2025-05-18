#include <stdio.h>

/* 14) Ingresar tres nros. enteros, distintos. Determinar y mostrar si ingresaron en
orden creciente. */

int main()
{
    int num1 = 0, num2 = 0, num3 = 0;

    printf("Ingrese 3 numeros: ");
    scanf("%d %d %d", &num1, &num2, &num3);

    if (num3 > num2 && num2 > num1)
    {
        printf("Los numeros ingresados estan en orden creciente");
    }
    else
    {
        printf("Los numeros ingresados no estan en orden creciente");
    }

    return 0;
}