import { useState } from "react";

const CLAVE = "dulce-momento-preferencias";

function leerPreferencias() {
  try {
    const texto = localStorage.getItem(CLAVE);

    if (!texto) return null;

    const datos = JSON.parse(texto);

    if (
      typeof datos?.nombre !== "string" ||
      typeof datos?.favorito !== "string"
    ) {
      return null;
    }

    return datos;
  } catch {
    return null;
  }
}

function LocalStoragePreferencias() {
  const [guardado, setGuardado] = useState(leerPreferencias);
  const [nombre, setNombre] = useState(guardado?.nombre ?? "");
  const [favorito, setFavorito] = useState(
    guardado?.favorito ?? "Brownie"
  );
  const [mensaje, setMensaje] = useState("");

  const guardarPreferencias = (evento) => {
    evento.preventDefault();

    if (!nombre.trim()) {
      setMensaje("Escribe tu nombre.");
      return;
    }

    const preferencias = {
      nombre: nombre.trim(),
      favorito,
    };

    try {
      localStorage.setItem(
        CLAVE,
        JSON.stringify(preferencias)
      );

      setGuardado(preferencias);
      setMensaje("Preferencias guardadas.");
    } catch {
      setMensaje("No se pudo guardar en este navegador.");
    }
  };

  const eliminarPreferencias = () => {
    try {
      localStorage.removeItem(CLAVE);

      setGuardado(null);
      setNombre("");
      setFavorito("Brownie");
      setMensaje("Preferencias eliminadas.");
    } catch {
      setMensaje("No se pudieron eliminar las preferencias.");
    }
  };

  return (
    <>
      <h1>localStorage: preferencias del cliente</h1>
      <p>Guarda tus preferencias y recarga para comprobarlas.</p>

      <form className="tarjeta" onSubmit={guardarPreferencias}>
        <label htmlFor="nombre">Tu nombre</label>
        <input
          id="nombre"
          type="text"
          value={nombre}
          onChange={(evento) => setNombre(evento.target.value)}
          placeholder="Ejemplo: Mela"
          maxLength={60}
          required
        />

        <label htmlFor="favorito">Postre favorito</label>
        <select
          id="favorito"
          value={favorito}
          onChange={(evento) => setFavorito(evento.target.value)}
        >
          <option value="Brownie">Brownie</option>
          <option value="Cheesecake">Cheesecake</option>
          <option value="Helado">Helado</option>
          <option value="Flan">Flan</option>
        </select>

        <div className="acciones">
          <button type="submit">Guardar</button>

          <button
            type="button"
            className="secundario"
            onClick={eliminarPreferencias}
          >
            Eliminar preferencias
          </button>
        </div>

        <p role="status">{mensaje}</p>
      </form>

      <section className="tarjeta">
        <h2>Datos guardados</h2>

        {guardado ? (
          <>
            <p>Nombre: {guardado.nombre}</p>
            <p>Postre favorito: {guardado.favorito}</p>
          </>
        ) : (
          <p>Aún no tienes preferencias guardadas.</p>
        )}
      </section>
    </>
  );
}

export default LocalStoragePreferencias;