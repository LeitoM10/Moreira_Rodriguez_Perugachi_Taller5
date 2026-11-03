import { useState } from "react";

function UseStateCantidad() {
  const [cantidad, setCantidad] = useState(1);
  const precio = 2.5;
  const total = cantidad * precio;

  const confirmarPedido = () => {
    alert(
      `Pedido: ${cantidad} brownie(s)\nTotal: $${total.toFixed(2)}`
    );
  };

  return (
    <>
      <h1>useState: cantidad del pedido</h1>
      <p>Elige cuántos brownies deseas comprar.</p>

      <section className="tarjeta">
        <span className="emoji">🧁</span>
        <h2>Brownie de chocolate</h2>
        <p>Precio unitario: ${precio.toFixed(2)}</p>

        <h3>Cantidad: {cantidad}</h3>

        <div className="acciones">
          <button
            onClick={() => setCantidad((actual) => actual - 1)}
            disabled={cantidad <= 1}
          >
            Quitar uno
          </button>

          <button
            onClick={() => setCantidad((actual) => actual + 1)}
          >
            Agregar uno
          </button>

          <button
            className="secundario"
            onClick={() => setCantidad(1)}
          >
            Reiniciar
          </button>
        </div>

        <h3>Total: ${total.toFixed(2)}</h3>

        <button onClick={confirmarPedido}>
          Confirmar pedido
        </button>
      </section>
    </>
  );
}

export default UseStateCantidad;