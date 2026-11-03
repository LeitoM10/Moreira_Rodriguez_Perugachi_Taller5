function FundamentosPostre() {
  const postre = {
    nombre: "Brownie de chocolate",
    precio: 2.5,
    disponible: true,
  };

  const consultarPostre = () => {
    alert(`Elegiste: ${postre.nombre}`);
  };

  return (
    <>
      <h1>Fundamentos de React</h1>
      <p>Información de un producto de nuestra tienda.</p>

      <section className="tarjeta">
        <span className="emoji">🍫</span>
        <h2>{postre.nombre}</h2>
        <p>Precio: ${postre.precio.toFixed(2)}</p>

        <p>
          {postre.disponible ? "Disponible" : "Agotado"}
        </p>

        <button
          onClick={consultarPostre}
          disabled={!postre.disponible}
        >
          Elegir postre
        </button>
      </section>
    </>
  );
}

export default FundamentosPostre;