/* Gestión de Combustible en una Estación de Servicio

Problema:

Una estación de servicio necesita desarrollar un programa en lenguaje C que le permita registrar la carga
de combustible que realizan los vehículos a lo largo del día.
El programa deberá ofrecer un menú interactivo que permita realizar diferentes operaciones relacionadas con
el registro y consulta de ventas.
Al inicio del día, se ingresan los costos por litro para cada uno de los tipos de combustibles disponibles:

1: Nafta Súper
2: Nafta Premium
3: Diésel
Una vez ingresados los precios, el programa ofrecerá un menú con las siguientes opciones:

---- Estación de Servicio ----

1. Registrar carga de combustible
2. Mostrar cantidad de cargas mayores a $50.000
3. Mostrar total recaudado
4. Salir

Requisitos técnicos del desarrollo:

El menú debe repetirse mientras no se seleccione la opción 4 (uso obligatorio de do...while).
El programa debe estar modularizado usando procedimientos (void) y funciones.
No se permite el uso de vectores ni estructuras dinámicas. */

#include <stdio.h>

/* Prototipos de Funciones */
float ingresar_precio(char *tipo_combustible);
int obtener_opcion_menu();
int obtener_tipo_combustible();
float obtener_litros();
float calcular_monto(int tipo, float litros, float precio_super, float precio_premium, float precio_diesel);
void mostrar_menu();
void registrar_carga(float *total_recaudado, int *cargas_mayores_50k, float precio_super, float precio_premium, float precio_diesel);
void mostrar_cargas_mayores(int cargas_mayores_50k);
void mostrar_total_recaudado(float total_recaudado);

/* Programa Principal */
int main()
{
    float precio_super, precio_premium, precio_diesel;
    int cargas_mayores_50k = 0;
    float total_recaudado = 0;

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
            registrar_carga(&total_recaudado, &cargas_mayores_50k, precio_super, precio_premium, precio_diesel);
            break;
        case 2:
            mostrar_cargas_mayores(cargas_mayores_50k);
            break;
        case 3:
            mostrar_total_recaudado(total_recaudado);
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
float ingresar_precio(char *tipo_combustible)
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
float calcular_monto(int tipo, float litros, float precio_super, float precio_premium, float precio_diesel)
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

/* Procedimiento para registrar las cargas */
void registrar_carga(float *total_recaudado, int *cargas_mayores_50k, float precio_super, float precio_premium, float precio_diesel)
{
    int tipo = obtener_tipo_combustible();
    float litros = obtener_litros();
    float monto = calcular_monto(tipo, litros, precio_super, precio_premium, precio_diesel);

    printf("Monto a pagar: $%.2f\n", monto);

    *total_recaudado += monto;
    if (monto > 50000)
    {
        (*cargas_mayores_50k)++;
    }
}

/* Procedimiento para mostrar las cargas mayores a 50k */
void mostrar_cargas_mayores(int cargas_mayores_50k)
{
    printf("\nCargas mayores a $50.000: %d\n", cargas_mayores_50k);
}

/* Procedimiento para mostrar los totales recaudados */
void mostrar_total_recaudado(float total_recaudado)
{
    printf("\nTotal recaudado: $%.2f\n", total_recaudado);
}