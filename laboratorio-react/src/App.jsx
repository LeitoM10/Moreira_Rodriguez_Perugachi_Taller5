import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router";

import LandingPage from "./pages/LandingPage";
import FundamentosPostre from "./pages/FundamentosPostre";
import UseStateCantidad from "./pages/UseStateCantidad";
import UseEffectRecetas from "./pages/UseEffectRecetas";
import CustomHookCatalogos from "./pages/CustomHookCatalogos";
import PropsCatalogo from "./pages/PropsCatalogo";
import ZustandPedido from "./pages/ZustandPedido";
import RenderizadoPostres from "./pages/RenderizadoPostres";
import LocalStoragePreferencias from "./pages/LocalStoragePreferencias";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}>
          <Route
            index
            element={<Navigate to="/fundamentos" replace />}
          />

          <Route
            path="fundamentos"
            element={<FundamentosPostre />}
          />

          <Route
            path="usestate"
            element={<UseStateCantidad />}
          />

          <Route
            path="useeffect"
            element={<UseEffectRecetas />}
          />

          <Route
            path="customhook"
            element={<CustomHookCatalogos />}
          />

          <Route
            path="props"
            element={<PropsCatalogo />}
          />

          <Route
            path="zustand"
            element={<ZustandPedido />}
          />

          <Route
            path="renderizado"
            element={<RenderizadoPostres />}
          />

          <Route
            path="localstorage"
            element={<LocalStoragePreferencias />}
          />

          <Route
            path="*"
            element={<Navigate to="/fundamentos" replace />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;