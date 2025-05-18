#include <stdio.h>

/* 2) Dados cinco números obtener el promedio de los mismos e informar el resultado. */

int main()
{
    float num1 = 0, num2 = 0, num3 = 0, num4 = 0, num5 = 0, prom = 0;

    printf("Ingrese cinco numeros para conocer su promedio: ");
    scanf("%f %f %f %f %f", &num1, &num2, &num3, &num4, &num5);

    prom = (num1 + num2 + num3 + num4 + num5) / 5;

    printf("El promedio de los numeros ingresados es: %.2f\n", prom);

    return 0;
}