#include <stdio.h>
#include <ctype.h>

/* 17) Una distribuidora de libros vende a librerías y a particulares. Aplica
bonificaciones por cantidad según el siguiente criterio:
a librerías: hasta 24 unidades, el 20%; más de 24 unidades, el 25%.
a particulares: menos de 6 unidades, nada; desde 6 hasta 18 unidades, el 5%; y
más de 18 unidades, el 10%.
El tipo de cliente está codificado así: 'L' para librerías, 'P' para particular. Dado el
importe bruto de una compra de libros, el tipo de cliente de que se trata y la cantidad
total pedida por el mismo, determinar el importe bruto bonificado. */

int main()
{
    char tipo_cliente;
    int cant = 0;
    float impbr = 0, bonus = 0, impbon = 0;

    printf("Ingrese el tipo de cliente (L para libreria, P para particular): ");
    scanf(" %c", &tipo_cliente);

    tipo_cliente = tolower(tipo_cliente);

    printf("Ingrese la cant de libros: ");
    scanf("%d", &cant);

    printf("Ingrese el importe bruto de la compra: ");
    scanf("%f", &impbr);

    switch (tipo_cliente)
    {
    case 'l':
        if (cant <= 24)
            bonus = 0.20;
        else
            bonus = 0.25;
        break;
    case 'p':
        if (cant < 6)
            bonus = 0.0;
        else if (cant <= 18)
            bonus = 0.05;
        else
            bonus = 0.10;
        break;
    default:
        printf("Tipo de cliente no válido.\n");
        return 1;
    }

    impbon = impbr * (1 - bonus);

    printf("Importe bonificado: %.2f\n", impbon);

    return 0;
}