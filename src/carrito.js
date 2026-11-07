// Laboratorio TDD: carrito de compras
// Escribe aquí el código SOLO después de tener una prueba en rojo.

const IVA = 0.19;
const CUPONES = {
  DESC10: { tipo: 'porcentaje', valor: 0.10 },
  DESC20: { tipo: 'porcentaje', valor: 0.20 },
  MENOS30K: { tipo: 'fijo', valor: 30000 },
};

export class Carrito {
  constructor() {
    this.productos = [];
    this.cupon = null;
  }

  agregar(nombre, precio, cantidad = 1) {
    if (typeof precio !== 'number' || precio <= 0) {
      throw new Error('El precio debe ser mayor que cero');
    }
    if (!Number.isInteger(cantidad) || cantidad <= 0) {
      throw new Error('La cantidad debe ser un entero positivo');
    }
    const existente = this.productos.find((p) => p.nombre === nombre);
    if (existente) {
      existente.cantidad += cantidad;
    } else {
      this.productos.push({ nombre, precio, cantidad });
    }
  }

  eliminar(nombre) {
    const indice = this.productos.findIndex((p) => p.nombre === nombre);
    if (indice === -1) {
      throw new Error(`El producto "${nombre}" no está en el carrito`);
    }
    this.productos.splice(indice, 1);
  }

  actualizarCantidad(nombre, nueva) {
    if (!Number.isInteger(nueva) || nueva < 0) {
      throw new Error('La cantidad debe ser un entero no negativo');
    }
    if (nueva === 0) {
      this.eliminar(nombre);
      return;
    }
    const producto = this.productos.find((p) => p.nombre === nombre);
    if (!producto) {
      throw new Error(`El producto "${nombre}" no está en el carrito`);
    }
    producto.cantidad = nueva;
  }

  cantidadDeItems() {
    return this.productos.reduce((suma, p) => suma + p.cantidad, 0);
  }

  subtotal() {
    return this.productos.reduce((suma, p) => suma + p.precio * p.cantidad, 0);
  }

  aplicarCupon(codigo) {
    const normalizado = String(codigo).trim().toUpperCase();
    if (!Object.hasOwn(CUPONES, normalizado)) {
      throw new Error(`El cupón "${codigo}" no es válido`);
    }
    this.cupon = normalizado;
  }

  descuento() {
    if (!this.cupon) return 0;
    const cupon = CUPONES[this.cupon];
    const calculado =
      cupon.tipo === 'porcentaje'
        ? this.subtotal() * cupon.valor
        : cupon.valor;
    return Math.min(Math.round(calculado), this.subtotal());
  }

  baseGravable() {
    return this.subtotal() - this.descuento();
  }

  iva() {
    return Math.round(this.baseGravable() * IVA);
  }

  envio() {
    if (this.cantidadDeItems() === 0) return 0;
    return this.baseGravable() >= 150000 ? 0 : 12000;
  }

  total() {
    return this.baseGravable() + this.iva() + this.envio();
  }

  resumen() {
    return {
      subtotal: this.subtotal(),
      descuento: this.descuento(),
      iva: this.iva(),
      total: this.total(),
    };
  }
}
