/* Desarrollar el algoritmo en lenguaje C
Utilizar por lo menos una función, un procedimiento y un pasaje de parámetros por referencia.
No se pueden utilizar variables globales. No se permite el uso de vectores ni estructuras dinámicas.
Primero poner los prototipos de funciones y abajo de todo inicializarlas.

Una cooperativa de servicios públicos del municipio de La Plata, desea relevar el consumo de agua en 3 barrios distintos.
En cada barrio, los vecinos informan mensualmente el consumo en m³ y su categoría: Jubilado, Familiar o Comercial.
Se pide:
1.	Por cada barrio, mostrar el consumo total de agua y el promedio por usuario.
2.	Determinar cuál fue el barrio con menor consumo total.
3.	Calcular el porcentaje de usuarios Comerciales respecto al total.
4.	Mostrar el porcentaje de usuarios Jubilados que consumieron más de 20 m³. */

#include <stdio.h>

void procesar_barrio(int barrio, float *tot, int *user, int *mayor_20, int *comer);

int main()
{
    float consumo1, prom1, tot1;
    float consumo2, prom2, tot2;
    float consumo3, prom3, tot3;
    int user1, user2, user3;
    int mayor_20, comer;
    float total;

    procesar_barrio(1, &tot1, &tot1, &user1, &mayor_20, &comer);
    procesar_barrio(2, &tot2, &user2, &mayor_20, &comer);
    procesar_barrio(3, &tot3, &user3, &mayor_20, &comer);

    total = tot1 + tot2 + tot3;

    return 0;
}

void procesar_barrio(int barrio, float *tot, int *user, int *mayor_20, int *comer)
{
    char cat, continuar;
    float consumo;

    printf("Barrio: %d\n", barrio);

    do
    {
        printf("Ingrese la categoria (j),(f) o (c): \n");
        scanf("%c", cat);

        printf("Ingrese el consumo en metros cubicos: \n");
        scanf("%f", consumo);

        *tot += consumo;
        (*user)++;

        if (cat == 'j' || cat == 'J' && consumo > 20)
        {
            (*mayor_20)++;
        }
        if (cat == 'c' || cat == 'C')
        {
            (*comer)++;
        }
        printf("Desea ingresar otro usuario? s/n \n");
        scanf("%c", continuar);

    } while (continuar == 's' || continuar == 'S');

    printf("Total Barrio %d", barrio);
    printf("Consumo total: %.2f", tot);
}