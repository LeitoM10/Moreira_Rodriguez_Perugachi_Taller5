import useStorePedido from "../context/storePedido";

function ZustandResumen() {
  const cantidad = useStorePedido((estado) => estado.cantidad);
  const precio = useStorePedido((estado) => estado.precio);

  return (
    <section className="tarjeta resumen">
      <h2>Resumen del pedido</h2>

      {cantidad === 0 ? (
        <p>Tu pedido está vacío.</p>
      ) : (
        <>
          <p>Brownies: {cantidad}</p>
          <p>Precio unitario: ${precio.toFixed(2)}</p>
          <h3>Total: ${(cantidad * precio).toFixed(2)}</h3>
        </>
      )}
    </section>
  );
}

export default ZustandResumen;