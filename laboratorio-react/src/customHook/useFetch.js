import { useCallback, useState } from "react";

export function useFetch() {
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState("");

  const obtenerDatos = useCallback(async (url) => {
    setCargando(true);
    setError("");

    try {
      const respuesta = await fetch(url);

      if (!respuesta.ok) {
        throw new Error("No se pudo consultar el catálogo.");
      }

      return await respuesta.json();
    } catch (error) {
      setError(error.message);
      return null;
    } finally {
      setCargando(false);
    }
  }, []);

  return { obtenerDatos, cargando, error };
}