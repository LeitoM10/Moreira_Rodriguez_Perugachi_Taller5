import { NavLink, Outlet } from "react-router";

const enlaces = [
  { ruta: "/fundamentos", texto: "Fundamentos" },
  { ruta: "/usestate", texto: "useState · Cantidades" },
  { ruta: "/useeffect", texto: "useEffect · Recetas" },
  { ruta: "/customhook", texto: "Custom Hook · Catálogos" },
  { ruta: "/props", texto: "Props · Tarjetas" },
  { ruta: "/zustand", texto: "Zustand · Pedido" },
  { ruta: "/renderizado", texto: "Renderizado · Postres" },
  { ruta: "/localstorage", texto: "localStorage · Preferencias" },
];

function LandingPage() {
  return (
    <div className="aplicacion">
      <aside className="barra-lateral">
        <h2>🧁 Dulce Momento</h2>
        <p>Laboratorio de React</p>

        <nav aria-label="Temas del laboratorio">
          {enlaces.map((enlace) => (
            <NavLink
              key={enlace.ruta}
              to={enlace.ruta}
              className={({ isActive }) =>
                isActive ? "enlace activo" : "enlace"
              }
            >
              {enlace.texto}
            </NavLink>
          ))}
        </nav>
      </aside>

      <main className="contenido">
        <Outlet />
      </main>
    </div>
  );
}

export default LandingPage;