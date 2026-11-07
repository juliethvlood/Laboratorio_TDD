# Laboratorio TDD: carrito de compras

Requisitos: Node.js 20 o superior. No se instala ninguna dependencia.

```bash
npm test            # ejecuta las pruebas una vez
npm run test:watch  # vuelve a ejecutarlas cada vez que guardas
```

Sigue la guía del taller: primero la prueba (rojo), luego el código mínimo (verde) y por último la mejora (refactor).

## Laboratorio paso a paso

El proyecto implementa las 7 iteraciones de la guía, cada una con su prueba y su código:

| Iteración | Comportamiento | Pruebas |
|---|---|---:|
| 1 | Carrito vacío: 0 ítems y subtotal 0 | 2 |
| 2 | Agregar productos con cantidad por defecto 1 | 3 |
| 3 | Producto repetido: acumula la cantidad en una sola línea | 1 |
| 4 | Validaciones de precio y cantidad | 2 |
| 5 | Eliminar productos y error si no existe | 2 |
| 6 | Cupones `DESC10` y `DESC20` | 4 |
| 7 | IVA del 19 % y total a pagar | 3 |

Resultado del laboratorio base:

```text
# tests 17
# suites 8
# pass 17
# fail 0
```

## Retos adicionales

| Reto | Comportamiento | Pruebas |
|---|---|---:|
| A | `resumen()` devuelve subtotal, descuento, IVA y total | 1 |
| B | `envio()`: $12.000, gratis desde una base gravable de $150.000 | 4 |
| C | `actualizarCantidad(nombre, nueva)`: 0 elimina, negativo es error | 5 |
| D | Cupones sin distinguir mayúsculas ni espacios | 2 |
| E | Cupón de valor fijo `MENOS30K` sin dejar la base en negativo | 2 |

Resultado final con los retos:

```text
# tests 31
# suites 13
# pass 31
# fail 0
```

## API del carrito

- `agregar(nombre, precio, cantidad = 1)`
- `eliminar(nombre)`
- `actualizarCantidad(nombre, nueva)`
- `cantidadDeItems()`
- `subtotal()`
- `aplicarCupon(codigo)`
- `descuento()`
- `baseGravable()`
- `iva()`
- `envio()`
- `total()`
- `resumen()`

El total se calcula como `base gravable + IVA + envío`, con IVA del 19 % sobre la base gravable. El envío cuesta $12.000 y es gratis cuando la base gravable es de $150.000 o más. El cupón `MENOS30K` es de valor fijo y su descuento nunca deja la base gravable en negativo.
