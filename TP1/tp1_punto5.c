#include <stdio.h>

/*5) Dado como dato el valor del lado de un cuadrado calcular su perímetro y su
superficie, e informar los mismos. */

int main()
{
    float lado = 0, per = 0, sup = 0;

    printf("Ingrese el lado del cuadrado para conocer su perimetro y superficie: ");
    scanf("%f", &lado);
    per = lado * 4;
    sup = lado * lado;
    printf("Perimetro: %.2f \n", per);
    printf("Superficie: %.2f \n", sup);

    return 0;
}