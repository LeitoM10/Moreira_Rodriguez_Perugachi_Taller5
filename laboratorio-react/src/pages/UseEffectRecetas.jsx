import { useEffect, useState } from "react";

function UseEffectRecetas() {
  const [idReceta, setIdReceta] = useState(1);
  const [receta, setReceta] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controlador = new AbortController();

    async function consultarReceta() {
      setCargando(true);
      setError("");

      try {
        const respuesta = await fetch(
          `https://dummyjson.com/recipes/${idReceta}`,
          { signal: controlador.signal }
        );

        if (!respuesta.ok) {
          throw new Error("No se pudo obtener la receta.");
        }

        const datos = await respuesta.json();

        if (!controlador.signal.aborted) {
          setReceta(datos);
        }
      } catch (error) {
        if (!controlador.signal.aborted) {
          setError(error.message);
        }
      } finally {
        if (!controlador.signal.aborted) {
          setCargando(false);
        }
      }
    }

    consultarReceta();

    // Cancela la petición si cambiamos de página o de receta.
    return () => controlador.abort();
  }, [idReceta]);

  return (
    <>
      <h1>useEffect: inspiración para el menú</h1>
      <p>Consultamos una receta desde una API externa.</p>

      <section className="tarjeta">
        {cargando ? (
          <p role="status">Cargando receta...</p>
        ) : error ? (
          <p className="error" role="alert">{error}</p>
        ) : receta ? (
          <>
            <img
              className="foto"
              src={receta.image}
              alt={receta.name}
            />

            <h2>{receta.name}</h2>
            <p>Cocina: {receta.cuisine}</p>
            <p>Dificultad: {receta.difficulty}</p>
            <p>Porciones: {receta.servings}</p>
          </>
        ) : null}

        <div className="acciones">
          <button
            onClick={() => setIdReceta((actual) => actual - 1)}
            disabled={idReceta <= 1 || cargando}
          >
            Anterior
          </button>

          <button
            onClick={() => setIdReceta((actual) => actual + 1)}
            disabled={idReceta >= 30 || cargando}
          >
            Siguiente
          </button>
        </div>

        <p>Receta seleccionada: {idReceta}</p>
      </section>
    </>
  );
}

export default UseEffectRecetas;