#include <stdio.h>

/* 2. La UTN quiere recoger información respecto a 3 carreras: SIS, MEC y
QUI. Diseñe un algoritmo que permita conocer por Facultad el porcentaje
de alumnos de estas 3 carreras sobre el total de egresados. Informando
al final el total de alumnos por carrera de todas las facultades y el total
general. */

int main()
{
    int carrera = 0, egresados = 0, tot_general = 0, sis = 0, tot_sis = 0, mec = 0, tot_mec = 0, qui = 0, tot_qui = 0, i = 0, facus = 0;
    float porc_sis = 0, porc_mec = 0, porc_qui = 0;

    printf("Ingrese la cantidad de facultades: ");
    scanf(" %d", &facus);

    for (i = 1; i <= facus; i++)

    {
        printf("Ingrese codigo de carrera (1 = SIS, 2 = MEC, 3 = QUI): ");
        scanf(" %d", &carrera);

        printf("Ingrese la cantidad de egresados: ");
        scanf(" %d", &egresados);

        switch (carrera)
        {
        case 1:
            sis = egresados;
            break;

        case 2:
            mec = egresados;
            break;

        case 3:
            qui = egresados;
            break;
        }

        tot_sis = tot_sis + sis;
        tot_mec = tot_mec + mec;
        tot_qui = tot_qui + qui;
    }

    tot_general = tot_sis + tot_mec + tot_qui;

    porc_sis = (float)(tot_sis * 100) / tot_general;
    porc_mec = (float)(tot_mec * 100) / tot_general;
    porc_qui = (float)(tot_qui * 100) / tot_general;

    printf("\nPorcentajes: \n");
    printf("Porcentaje de alumnos de Sistemas: %.2f%%\n", porc_sis);
    printf("Porcentaje de alumnos de Mecanica: %.2f%%\n", porc_mec);
    printf("Porcentaje de alumnos de Quimica: %.2f%%\n", porc_qui);

    if (tot_general > 0)
    {
        printf("\nTotales: \n");
        printf("Total general de alumnos: %d\n", tot_general);
        printf("Total de alumnos de Sistemas: %d\n", tot_sis);
        printf("Total de alumnos de Mecanica: %d\n", tot_mec);
        printf("Total de alumnos de Quimica: %d\n", tot_qui);
    }
    else
    {
        printf("No se ingresaron alumnos");
    }

    return 0;
}