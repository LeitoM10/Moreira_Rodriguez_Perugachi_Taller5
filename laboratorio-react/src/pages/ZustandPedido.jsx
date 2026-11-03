import useStorePedido from "../context/storePedido";
import ZustandResumen from "./ZustandResumen";

function ZustandPedido() {
  const cantidad = useStorePedido((estado) => estado.cantidad);
  const agregar = useStorePedido((estado) => estado.agregar);
  const quitar = useStorePedido((estado) => estado.quitar);
  const vaciar = useStorePedido((estado) => estado.vaciar);

  return (
    <>
      <h1>Zustand: pedido compartido</h1>
      <p>
        Los controles y el resumen usan el mismo estado global.
        El pedido se conserva al navegar entre ejemplos,
        mientras no recargues la página.
      </p>

      <section className="tarjeta">
        <span className="emoji">🛒</span>
        <h2>Brownie de chocolate</h2>

        <div className="acciones">
          <button onClick={agregar}>
            Agregar brownie
          </button>

          <button onClick={quitar} disabled={cantidad === 0}>
            Quitar brownie
          </button>

          <button
            className="secundario"
            onClick={vaciar}
            disabled={cantidad === 0}
          >
            Vaciar pedido
          </button>
        </div>
      </section>

      <ZustandResumen />
    </>
  );
}

export default ZustandPedido;