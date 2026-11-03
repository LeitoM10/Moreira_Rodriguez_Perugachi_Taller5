import { useState } from "react";
import { useFetch } from "../customHook/useFetch";

function CustomHookCatalogos() {
  const [elementos, setElementos] = useState([]);
  const [titulo, setTitulo] = useState("");
  const { obtenerDatos, cargando, error } = useFetch();

  const consultarRecetas = async () => {
    setTitulo("Recetas para inspirar el menú");
    setElementos([]);

    const datos = await obtenerDatos(
      "https://dummyjson.com/recipes?limit=6"
    );

    if (datos) {
      setElementos(
        datos.recipes.map((receta) => ({
          id: receta.id,
          nombre: receta.name,
          imagen: receta.image,
        }))
      );
    }
  };

  const consultarBebidas = async () => {
    setTitulo("Bebidas para acompañar");
    setElementos([]);

    const datos = await obtenerDatos(
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
    );

    if (datos) {
      setElementos(
        (datos.drinks ?? []).slice(0, 6).map((bebida) => ({
          id: bebida.idDrink,
          nombre: bebida.strDrink,
          imagen: bebida.strDrinkThumb,
        }))
      );
    }
  };

  return (
    <>
      <h1>Custom Hook: consulta de catálogos</h1>
      <p>Reutilizamos useFetch para consultar dos APIs.</p>

      <div className="acciones">
        <button onClick={consultarRecetas} disabled={cargando}>
          Consultar recetas
        </button>

        <button onClick={consultarBebidas} disabled={cargando}>
          Consultar bebidas sin alcohol
        </button>
      </div>

      {cargando && <p role="status">Consultando catálogo...</p>}
      {error && <p className="error" role="alert">{error}</p>}

      <h2>{titulo}</h2>

      <div className="cuadricula">
        {elementos.map((elemento) => (
          <article className="tarjeta" key={elemento.id}>
            <img
              className="foto"
              src={elemento.imagen}
              alt={elemento.nombre}
            />
            <h3>{elemento.nombre}</h3>
          </article>
        ))}
      </div>
    </>
  );
}

export default CustomHookCatalogos;