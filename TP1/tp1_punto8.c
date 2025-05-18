#include <stdio.h>

/* 8) Dado el importe bruto de una factura calcular el resultado de bonificarlo con un 4%.
Al monto obtenido calcularle el IVA. Finalmente informar el importe bruto, el valor
de la bonificación, el importe bruto bonificado, el monto correspondiente al IVA y
el importe neto resultante.  */

int main()
{
    float impb = 0, bonus = 0, impbb = 0, iva = 0, impn = 0;

    printf("Ingrese el importe bruto: ");
    scanf("%f", &impb);

    bonus = (impb * 4) / 100;
    impbb = impb + ((impb * 4) / 100);
    iva = (impb * 21) / 100;
    impn = impb - iva;

    printf("El valor del importe bruto es: %.2f\n", impb);
    printf("El valor de la bonificacion es: %.2f\n", bonus);
    printf("El valor del importe bruto bonificado es: %.2f\n", impbb);
    printf("El valor del IVA es: %.2f\n", iva);
    printf("El valor del importe neto es: %.2f\n", impn);

    return 0;
}