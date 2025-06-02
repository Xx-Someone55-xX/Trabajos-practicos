// Datos de ejemplo para TP1 Algoritmos
const ejerciciosEjemplo = {
    'algoritmos_tp1': {
        'punto1': `#include <stdio.h>

int main()
{
    float num1 = 0, num2 = 0, sum = 0, multi = 0;

    printf("Ingrese el primer numero: ");
    scanf("%f", &num1);
    printf("Ingrese el segundo numero: ");
    scanf("%f", &num2);

    sum = num1 + num2;
    multi = num1 * num2;

    printf("\\nLa suma de los numeros es: %.2f", sum);
    printf("\\nLa multiplicacion de los numeros es: %.2f", multi);

    return 0;
}`,
        'punto2': `// Código del punto 2...`,
        // Agrega más puntos según necesites
    }
};

export const initDatabase = async () => {
    const SQL = await initSqlJs({
        locateFile: file => `assets/js/db/${file}`
    });
    
    const db = new SQL.Database();
    
    db.run(`
        CREATE TABLE IF NOT EXISTS ejercicios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            tp_id TEXT NOT NULL,
            punto_id TEXT NOT NULL,
            codigo TEXT NOT NULL,
            lenguaje TEXT DEFAULT 'c',
            UNIQUE(tp_id, punto_id)
    `);

    // Insertar todos los ejercicios de ejemplo
    for (const [tpId, puntos] of Object.entries(ejerciciosEjemplo)) {
        for (const [puntoId, codigo] of Object.entries(puntos)) {
            try {
                db.run(
                    `INSERT INTO ejercicios (tp_id, punto_id, codigo, lenguaje) VALUES (?, ?, ?, ?)`,
                    [tpId, puntoId, codigo, 'c']
                );
            } catch(e) { /* Ignora si ya existe */ }
        }
    }
    
    return db;
};