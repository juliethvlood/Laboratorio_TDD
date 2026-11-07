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

Resultado final:

```text
# tests 17
# suites 8
# pass 17
# fail 0
```

## API del carrito

- `agregar(nombre, precio, cantidad = 1)`
- `eliminar(nombre)`
- `cantidadDeItems()`
- `subtotal()`
- `aplicarCupon(codigo)`
- `descuento()`
- `baseGravable()`
- `iva()`
- `total()`

El total se calcula como `(subtotal − descuento) + IVA`, con IVA del 19 % sobre la base gravable.
