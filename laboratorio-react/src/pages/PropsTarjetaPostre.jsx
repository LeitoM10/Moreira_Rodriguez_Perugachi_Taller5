function PropsTarjetaPostre({ postre }) {
  return (
    <article className="tarjeta">
      <span className="emoji">{postre.icono}</span>
      <h2>{postre.nombre}</h2>
      <p>{postre.descripcion}</p>
      <p>Precio: ${postre.precio.toFixed(2)}</p>
    </article>
  );
}

export default PropsTarjetaPostre;