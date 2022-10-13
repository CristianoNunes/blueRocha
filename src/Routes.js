import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoutes from "./layout/PrivateRoutes";
import MeuUniverso from "./pages/MeuUniverso";
import Login from "./pages/Login";
import Contratos from "./pages/Contratos";
import Publicacoes from "./pages/Publicacoes";
import VisualLawDesign from "./pages/VisualLawDesign";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>

        <PrivateRoutes exact path="/">
          <MeuUniverso />
        </PrivateRoutes>
        <PrivateRoutes path="/visuallawdesign">
          <VisualLawDesign />
        </PrivateRoutes>
        <PrivateRoutes path="/contratos">
          <Contratos />
        </PrivateRoutes>
        <PrivateRoutes path="/publicacoes">
          <Publicacoes />
        </PrivateRoutes>
      </Switch>
    </BrowserRouter>
  );
}
