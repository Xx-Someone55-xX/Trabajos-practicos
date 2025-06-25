/* Desarrollar el algoritmo en lenguaje C
Utilizar por lo menos una función, un procedimiento y un pasaje de parámetros por referencia.
No se pueden utilizar variables globales. No se permite el uso de vectores ni estructuras dinámicas.
Primero poner los prototipos de funciones y abajo de todo inicializarlas.

Una cooperativa de servicios públicos del municipio de La Plata, desea relevar el consumo de agua en 3 barrios distintos. En cada barrio, los vecinos informan mensualmente el consumo en m³ y su categoría: Jubilado, Familiar o Comercial.
Se pide:
1.	Por cada barrio, mostrar el consumo total de agua y el promedio por usuario.
2.	Determinar cuál fue el barrio con menor consumo total.
3.	Calcular el porcentaje de usuarios Comerciales respecto al total.
4.	Mostrar el porcentaje de usuarios Jubilados que consumieron más de 20 m³. */

#include <stdio.h>

// Prototipos de funciones
void procesarBarrio(int numBarrio, float *totalBarrio, int *totalUsuarios, int *jubiladosMas20, int *comerciales);
float calcularPorcentaje(int parte, int total);
void mostrarResultados(float total1, float total2, float total3, int usuarios1, int usuarios2, int usuarios3, int jubilados1, int jubilados2, int jubilados3, int comerciales1, int comerciales2, int comerciales3, int totalUsuarios);

int main()
{
    // Variables para cada barrio
    float total1 = 0, total2 = 0, total3 = 0;
    int usuarios1 = 0, usuarios2 = 0, usuarios3 = 0;
    int jubilados1 = 0, jubilados2 = 0, jubilados3 = 0;
    int comerciales1 = 0, comerciales2 = 0, comerciales3 = 0;
    int totalUsuarios = 0;

    // Procesar cada barrio
    procesarBarrio(1, &total1, &usuarios1, &jubilados1, &comerciales1);
    procesarBarrio(2, &total2, &usuarios2, &jubilados2, &comerciales2);
    procesarBarrio(3, &total3, &usuarios3, &jubilados3, &comerciales3);

    // Calcular total de usuarios
    totalUsuarios = usuarios1 + usuarios2 + usuarios3;

    // Mostrar resultados
    mostrarResultados(total1, total2, total3, usuarios1, usuarios2, usuarios3,
                      jubilados1, jubilados2, jubilados3,
                      comerciales1, comerciales2, comerciales3, totalUsuarios);

    return 0;
}

// Procedimiento para procesar los datos de un barrio
void procesarBarrio(int numBarrio, float *totalBarrio, int *totalUsuarios, int *jubiladosMas20, int *comerciales)
{
    char categoria;
    float consumo;
    char continuar;

    printf("\n--- Barrio %d ---\n", numBarrio);

    do
    {
        printf("Ingrese categoria (J: Jubilado, F: Familiar, C: Comercial): ");
        scanf(" %c", &categoria);

        printf("Ingrese consumo en m³: ");
        scanf("%f", &consumo);

        // Acumular total y contador
        *totalBarrio += consumo;
        (*totalUsuarios)++;

        // Contar comerciales
        if (categoria == 'C' || categoria == 'c')
        {
            (*comerciales)++;
        }

        // Contar jubilados con más de 20m³
        if ((categoria == 'J' || categoria == 'j') && consumo > 20)
        {
            (*jubiladosMas20)++;
        }

        printf("¿Desea ingresar otro usuario? (S/N): ");
        scanf(" %c", &continuar);
    } while (continuar == 'S' || continuar == 's');

    // Mostrar resultados parciales del barrio
    printf("\nResumen Barrio %d:\n", numBarrio);
    printf("Consumo total: %.2f m³\n", *totalBarrio);
    if (*totalUsuarios > 0)
    {
        printf("Promedio por usuario: %.2f m³\n", *totalBarrio / *totalUsuarios);
    }
    else
    {
        printf("No hay usuarios registrados.\n");
    }
}

// Función para calcular porcentaje
float calcularPorcentaje(int parte, int total)
{
    if (total == 0)
        return 0;
    return (float)parte / total * 100;
}

// Procedimiento para mostrar resultados finales
void mostrarResultados(float total1, float total2, float total3, int usuarios1, int usuarios2, int usuarios3, int jubilados1, int jubilados2, int jubilados3, int comerciales1, int comerciales2, int comerciales3, int totalUsuarios)
{
    // Determinar barrio con menor consumo
    int barrioMenor = 1;
    float menorConsumo = total1;

    if (total2 < menorConsumo)
    {
        menorConsumo = total2;
        barrioMenor = 2;
    }
    if (total3 < menorConsumo)
    {
        menorConsumo = total3;
        barrioMenor = 3;
    }

    printf("\n--- RESULTADOS FINALES ---\n");
    printf("\nBarrio con menor consumo total: Barrio %d (%.2f m³)\n", barrioMenor, menorConsumo);

    // Porcentaje de usuarios comerciales
    int totalComerciales = comerciales1 + comerciales2 + comerciales3;
    float porcentajeComerciales = calcularPorcentaje(totalComerciales, totalUsuarios);
    printf("Porcentaje de usuarios comerciales: %.2f%%\n", porcentajeComerciales);

    // Porcentaje de jubilados que consumieron más de 20m³
    int totalJubilados = jubilados1 + jubilados2 + jubilados3;
    float porcentajeJubiladosMas20 = calcularPorcentaje(totalJubilados, totalUsuarios);
    printf("Porcentaje de jubilados que consumieron mas de 20m³: %.2f%%\n", porcentajeJubiladosMas20);
}