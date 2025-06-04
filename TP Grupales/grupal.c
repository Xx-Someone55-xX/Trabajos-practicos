/*
Integrantes del grupo:
1. [Agustín Giusso]
2. [Santiago Beneyte]
*/

/* Este trabajo es mi version del grupal, lo hice con Santiago Beneyte, consultandonos y lo entregamos por separado, cada uno con su version*/

#include <stdio.h>

/* Variables globales */

float precio_super, precio_premium, precio_diesel;
int cargas_mayores_50k = 0;
float total_recaudado = 0;

/*Prototipos de Funciones*/

float ingresar_precio(const char *tipo_combustible);
int obtener_opcion_menu();
int obtener_tipo_combustible();
float obtener_litros();
float calcular_monto(int tipo, float litros);
void mostrar_menu();
void registrar_carga();
void mostrar_cargas_mayores();
void mostrar_total_recaudado();

/* Programa Principal */

int main()
{
    printf("Ingrese los precios por litro:\n");
    precio_super = ingresar_precio("Nafta Super");
    precio_premium = ingresar_precio("Nafta Premium");
    precio_diesel = ingresar_precio("Diesel");

    int opcion;
    do
    {
        mostrar_menu();
        opcion = obtener_opcion_menu();

        switch (opcion)
        {
        case 1:
            registrar_carga();
            break;
        case 2:
            mostrar_cargas_mayores();
            break;
        case 3:
            mostrar_total_recaudado();
            break;
        case 4:
            printf("Saliendo del sistema...\n");
            break;
        default:
            printf("\n==== Opcion no valida. Intente nuevamente. ====\n");
        }
    } while (opcion != 4);

    return 0;
}

/* Funcion para ingresar precio */

float ingresar_precio(const char *tipo_combustible)
{
    float precio;
    do
    {
        printf("%s: ", tipo_combustible);
        scanf("%f", &precio);
        if (precio <= 0)
        {
            printf("\n==== Error: El precio debe ser mayor que cero. Intente nuevamente. ====\n");
        }
    } while (precio <= 0);
    return precio;
}

/* Funcion para obtener la opción del menu */

int obtener_opcion_menu()
{
    int opcion;
    printf("Seleccione una opcion: ");
    scanf("%d", &opcion);
    return opcion;
}

/* Funcion para obtener el tipo de combustible */

int obtener_tipo_combustible()
{
    int tipo;
    do
    {
        printf("\nSeleccione el tipo de combustible:\n");
        printf("1. Nafta Super\n");
        printf("2. Nafta Premium\n");
        printf("3. Diesel\n");
        printf("Opcion: ");
        scanf("%d", &tipo);

        if (tipo < 1 || tipo > 3)
        {
            printf("\n==== Error: Opcion no valida. Por favor seleccione 1, 2 o 3. ====\n");
        }
    } while (tipo < 1 || tipo > 3);
    return tipo;
}

/* Funcion para obtener la cantidad de litros de combustible */

float obtener_litros()
{
    float litros;
    do
    {
        printf("Ingrese la cantidad de litros cargados: ");
        scanf("%f", &litros);
        if (litros <= 0)
        {
            printf("\n==== Error: La cantidad debe ser mayor que cero. Intente nuevamente. ====\n");
        }
    } while (litros <= 0);
    return litros;
}

/* Funcion para calcular los montos */

float calcular_monto(int tipo, float litros)
{
    switch (tipo)
    {
    case 1:
        return litros * precio_super;
    case 2:
        return litros * precio_premium;
    case 3:
        return litros * precio_diesel;
    default:
        return 0;
    }
}

/* Procedimiento para mostrar el menu */

void mostrar_menu()
{
    printf("\n---- Estacion de Servicio ----\n");
    printf("1. Registrar carga de combustible\n");
    printf("2. Mostrar cantidad de cargas mayores a $50.000\n");
    printf("3. Mostrar total recaudado\n");
    printf("4. Salir\n");
}

/* Procedimiento para registrar las cargas y aumentar la variable global cargas_mayores_50k en caso de que la misma sea verdadera, lo mismo con total_recaudado += monto*/

void registrar_carga()
{
    int tipo = obtener_tipo_combustible();
    float litros = obtener_litros();
    float monto = calcular_monto(tipo, litros);

    printf("Monto a pagar: $%.2f\n", monto);

    total_recaudado += monto;
    if (monto > 50000)
    {
        cargas_mayores_50k++;
    }
}

/* Procedimiento para mostrar las cargas mayores a 50k */

void mostrar_cargas_mayores()
{
    printf("\nCargas mayores a $50.000: %d\n", cargas_mayores_50k);
}

/* Procedimiento para mostrar los totales recaudados */

void mostrar_total_recaudado()
{
    printf("\nTotal recaudado: $%.2f\n", total_recaudado);
}