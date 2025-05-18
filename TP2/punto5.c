#include <stdio.h>

/* 5. Escribir un algoritmo que, dado un importe, permita calcular e informar
cuanto corresponde pagar por un impuesto, en cuantas cuotas y el valor
de las mismas. Tener en cuenta los siguientes datos:
IMPUESTO = 15% del importe dado.
Los importes mayores que $3000 y menor o igual que $10000 se
pagan en dos cuotas.
Los mayores de $10000 en tres cuotas.
El algoritmo debe permitir tratar varios importes finalizando cuando se
ingresa 9999 como importe. */

int main()
{
    float importe = 0, valor_cuotas = 0, importe_con_impuesto = 0;
    int cuotas = 2;

    printf("\n--- Ingrese 9999 si desea dejar de ingresar datos ---\n");

    do
    {
        printf("Ingrese el valor del importe: ");
        scanf(" %f", &importe);

        if (importe < 0)
        {
            printf("\n--- Usted ha ingresado un valor no valido, intente de nuevo ---\n");
            continue;
        }

        importe_con_impuesto = importe * 1.15;

        printf("\n--- Su importe con impuestos es %.2f ---\n", importe_con_impuesto);

        if (importe > 3000 && importe <= 10000)
        {
            cuotas = 2;
            valor_cuotas = importe_con_impuesto / 2;
        }
        else if (importe_con_impuesto > 10000)
        {
            cuotas = 3;
            valor_cuotas = importe_con_impuesto / 3;
        }

        if (importe <= 3000)
        {
            printf("\n--- Usted no puede pagar con cuotas ya que su importe es menor o igual a 3000$ ---\n");
        }
        else
        {
            printf("\n--- Usted puede pagar en %d cuotas, las cuales tienen un valor de %.2f$ c/u ---\n", cuotas, valor_cuotas);
        }

    } while (importe != 9999);

    printf("\n--- Gracias por usar nuestros servicios ---\n");

    return 0;
}