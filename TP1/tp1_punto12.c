#include <stdio.h>

/* 12) Dado un número determinar si es positivo o negativo. */

int main()
{
    float num = 0;

    printf("Ingrese un numero para ver si es positivo o negativo: ");
    scanf("%f", &num);

    if (num < 0)
    {
        printf("El numero ingresado es negativo");
    }
    else if (num > 0)
    {
        printf("El numero ingresado es positivo");
    }
    else
    {
        printf("El numero ingresado es 0");
    }

    return 0;
}