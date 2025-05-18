#include <stdio.h>

/* 4) Dadas las medidas de dos ángulos de un triángulo, determinar la medida del
   tercer ángulo e informar el resultado. Validar los datos ingresados. */

int main()
{
    float ang1 = 0, ang2 = 0, ang3 = 0;

    printf("Ingrese el primer angulo: ");
    scanf("%f", &ang1);

    printf("Ingrese el segundo angulo: ");
    scanf("%f", &ang2);

    if (ang1 <= 0 || ang2 <= 0)
    {
        printf("Error: Los angulos deben ser mayores a 0.\n");
        return 1;
    }

    if ((ang1 + ang2) >= 180)
    {
        printf("Error: La suma de los dos angulos debe ser menor que 180.\n");
        return 1;
    }

    ang3 = 180 - (ang1 + ang2);
    printf("El tercer angulo es: %.2f\n", ang3);

    return 0;
}
