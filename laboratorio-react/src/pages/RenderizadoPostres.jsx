import { useState } from "react";

const postres = [
  { id: 1, nombre: "Brownie", precio: 2.5, stock: 8 },
  { id: 2, nombre: "Tiramisú", precio: 4, stock: 0 },
  { id: 3, nombre: "Flan de vainilla", precio: 2, stock: 5 },
  { id: 4, nombre: "Tarta de limón", precio: 3.5, stock: 0 },
];

function RenderizadoPostres() {
  const [soloDisponibles, setSoloDisponibles] = useState(false);

  const postresVisibles = soloDisponibles
    ? postres.filter((postre) => postre.stock > 0)
    : postres;

  return (
    <>
      <h1>Renderizado: lista y disponibilidad</h1>
      <p>Mostramos productos usando map y condiciones.</p>

      <label className="filtro">
        <input
          type="checkbox"
          checked={soloDisponibles}
          onChange={(evento) =>
            setSoloDisponibles(evento.target.checked)
          }
        />
        Mostrar solo disponibles
      </label>

      <p>Productos mostrados: {postresVisibles.length}</p>

      <div className="cuadricula">
        {postresVisibles.map((postre) => (
          <article className="tarjeta" key={postre.id}>
            <h2>{postre.nombre}</h2>
            <p>Precio: ${postre.precio.toFixed(2)}</p>

            {postre.stock > 0 ? (
              <p className="disponible">
                Disponible: {postre.stock} unidades
              </p>
            ) : (
              <p className="error">Agotado</p>
            )}
          </article>
        ))}
      </div>
    </>
  );
}

export default RenderizadoPostres;