#include <stdio.h>

/* 4. Escriba un algoritmo para calcular cada renglón de una factura
  (valor unitario * cantidad vendida) y el total de la misma,
  suponiendo que el número de renglones es variable.
  Emitir un mensaje de error si el valor unitario es <= 0.*/

int main()
{
    int i = 0, cant_vendida = 0, renglones = 0;
    float subtotal = 0, valor_unitario = 0, total = 0;

    printf("Ingrese el numero de renglones: ");
    scanf("%d", &renglones);

    for (i = 1; i <= renglones; i++)
    {
        printf("\n--- Renglon %d ---\n", i);

        do
        {
            printf("Ingrese el valor unitario del renglon %d: ", i);
            scanf("%f", &valor_unitario);

            if (valor_unitario <= 0)
            {
                printf("\n \\ERROR\\: El valor unitario debe ser mayor que cero.\n");
            }
        } while (valor_unitario <= 0);

        printf("Ingrese la cantidad vendida del renglon %d: ", i);
        scanf("%d", &cant_vendida);

        subtotal = valor_unitario * cant_vendida;
        total += subtotal;

        printf("Subtotal del renglon %d: %.2f\n", i, subtotal);
    }

    printf("\n =========================== \n");
    printf("Total de la factura: %.2f\n", total);

    return 0;
}
