#include <stdio.h>
#include <ctype.h> // Para usar tolower //

/* 15) Determinar y exhibir si la estatura de una persona adulta dada, es mayor que la
estatura media de las personas adultas de su sexo, siendo:
estatura media de mujeres adultas: 1,65 m.
estatura media de varones adultos: 1,72 m. */

int main()
{
    char sex;
    float h;

    do
    {
        printf("Ingrese el genero de la persona (M/F): ");
        scanf(" %c", &sex);
        sex = tolower(sex); // Para el ingreso de mayusculas //

        if (sex != 'm' && sex != 'f')
        {
            printf("El genero ingresado no es valido. Intente nuevamente.\n");
        }

    } while (sex != 'm' && sex != 'f');

    printf("Ingrese la estatura de la persona (en metros): ");
    scanf("%f", &h);

    if (sex == 'f')
    {
        if (h > 1.65)
            printf("La estatura de la mujer ingresada es mayor al promedio\n");
        else if (h == 1.65)
            printf("La estatura de la mujer ingresada es promedio\n");
        else
            printf("La estatura de la mujer ingresada es menor al promedio\n");
    }
    else if (sex == 'm')
    {
        if (h > 1.72)
            printf("La estatura del hombre ingresado es mayor al promedio\n");
        else if (h == 1.72)
            printf("La estatura del hombre ingresado es promedio\n");
        else
            printf("La estatura del hombre ingresado es menor al promedio\n");
    }

    return 0;
}