#include <stdio.h>

/* 9) Calcular cuántos pesos tiene un banco en monedas si dispone de N1 monedas de 1
peso, N2 de medio peso, N3 de un cuarto de peso, N4 de 10 centavos de peso y N5
de 5 centavos de peso. */

int main()
{
    int n1 = 0, n2 = 0, n3 = 0, n4 = 0, n5 = 0;
    float total = 0;

    printf("Ingrese la cantidad de monedas de 1 peso: ");
    scanf("%d", &n1);
    printf("Ingrese la cantidad de monedas de medio peso: ");
    scanf("%d", &n2);
    printf("Ingrese la cantidad de monedas de un cuarto de peso: ");
    scanf("%d", &n3);
    printf("Ingrese la cantidad de monedas de 10 centavos: ");
    scanf("%d", &n4);
    printf("Ingrese la cantidad de monedas de 5 centavos: ");
    scanf("%d", &n5);
    total = n1 + (n2 * 0.5) + (n3 * 0.25) + (n4 * 0.1) + (n5 * 0.05);
    printf("El banco tiene %.2f", total);

    return 0;
}