#include <stdio.h>

/* 6) Dado como dato el importe de una factura, calcular el valor correspondiente al IVA.
(21% del valor de venta). */

int main()
{
    float factu = 0, iva = 0;

    printf("Ingrese el valor de la factura para saber el valor del IVA: ");
    scanf("%f", &factu);
    iva = (factu * 21) / 100;
    printf("El valor del IVA es: %.2f", iva);

    return 0;
}