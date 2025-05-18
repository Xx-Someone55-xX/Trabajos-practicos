#include <stdio.h>

/* 6. Escriba un algoritmo que acepte un número entero que representa una
suma de dinero e indique cuantos billetes de cada denominación necesita,
suponiendo que solo existen billetes de 1000, 500, 200, 100 Y 50 pesos. */

int main()
{
    int dinero = 0, mil = 0, quinientos = 0, doscientos = 0, cien = 0, cincuenta = 0;
    do
    {
        printf("Ingrese una cantidad de dinero entera en pesos: ");
        scanf("%d", &dinero);

        if (dinero <= 0)
        {
            printf("\n---  La cantidad ingresada no es valida. Debe ser un numero positivo y mayor a 0, intente de nuevo. ---\n");
        }
    } while (dinero <= 0);

    mil = dinero / 1000;
    dinero = dinero % 1000;

    quinientos = dinero / 500;
    dinero = dinero % 500;

    doscientos = dinero / 200;
    dinero = dinero % 200;

    cien = dinero / 100;
    dinero = dinero % 100;

    cincuenta = dinero / 50;
    dinero = dinero % 50;

    printf("\n--- Billetes necesarios: ---\n");
    if (mil > 0)
    {
        printf("1000: %d\n", mil);
    }

    if (quinientos > 0)
    {
        printf("500 : %d\n", quinientos);
    }

    if (doscientos > 0)
    {
        printf("200 : %d\n", doscientos);
    }

    if (cien > 0)
    {
        printf("100 : %d\n", cien);
    }

    if (cincuenta > 0)
    {
        printf("50  : %d\n", cincuenta);
    }

    if (dinero > 0)
    {
        printf("\nSobrante que no puede representarse en billetes: %d pesos\n", dinero);
    }

    return 0;
}
