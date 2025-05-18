#include <stdio.h>

/* 7) Calcular el sueldo de un operario conociendo la cantidad de horas que trabajó en el
mes y el valor de la hora trabajada. */

int main()
{
    float hs = 0, valorh = 0, sueldo = 0;

    printf("Ingrese la cantidad de horas que trabajo el funcionario en el mes: ");
    scanf("%f", &hs);
    printf("Ingrese el valor de cada hora del funcionario: ");
    scanf("%f", &valorh);
    sueldo = hs * valorh;
    printf("El sueldo del operario es: %.2f", sueldo);

    return 0;
}