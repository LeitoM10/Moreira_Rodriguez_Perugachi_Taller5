import PropsTarjetaPostre from "./PropsTarjetaPostre";

function PropsCatalogo() {
  const postres = [
    {
      id: 1,
      nombre: "Cheesecake de maracuyá",
      descripcion: "Postre frío con cobertura de maracuyá.",
      precio: 3.75,
      icono: "🍰",
    },
    {
      id: 2,
      nombre: "Galleta de avena",
      descripcion: "Galleta horneada con avena y pasas.",
      precio: 1.25,
      icono: "🍪",
    },
    {
      id: 3,
      nombre: "Helado de mora",
      descripcion: "Helado artesanal con fruta.",
      precio: 2,
      icono: "🍨",
    },
  ];

  return (
    <>
      <h1>Props: catálogo de postres</h1>
      <p>
        El catálogo es el padre y cada tarjeta es un hijo
        que recibe información mediante props.
      </p>

      <div className="cuadricula">
        {postres.map((postre) => (
          <PropsTarjetaPostre
            key={postre.id}
            postre={postre}
          />
        ))}
      </div>
    </>
  );
}

export default PropsCatalogo;