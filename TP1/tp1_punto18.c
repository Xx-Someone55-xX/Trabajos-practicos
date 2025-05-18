#include <stdio.h>

/* 18) Dado como dato la cantidad de kilowatios consumidos por un usuario en un
mes, calcular el importe a pagar por el mismo teniendo en cuenta que:
si la cantidad de kilowatios consumidos es menor ó igual a 200, el precio del
kilowatio es de 0.05 pesos.
si la cantidad de kilowatios consumidos es mayor que 200 y menor que 1000, el precio
del kilowatio es de 0.1 pesos.
si la cantidad de kilowatios consumidos es mayor ó igual que 1000, el precio del
kilowatio es de 0.15 pesos. */

int main()
{
    float kw = 0, kwf = 0;

    do
    {

        printf("Ingrese la cantidad de kilowatios consumidos por un usuario en un mes: ");
        scanf(" %f", &kw);

        if (kw < 0)
        {
            printf("Ingrese un valor de kilowatios valido");
        }

    } while (kw < 0);

    if (kw <= 200)
    {
        kwf = kw * 0.05;
    }

    else if (kw > 200 && kw < 1000)
    {
        kwf = kw * 0.1;
    }
    else
    {
        kwf = kw * 0.15;
    }
    printf("El precio de los kilowatios consumidos es %.2f pesos\n", kwf);

    return 0;
}