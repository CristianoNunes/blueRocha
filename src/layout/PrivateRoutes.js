import { Route, Redirect } from "react-router-dom";
import Denied from "../pages/Denied";
import { storage } from "../services/storage";
import Default from "./Default";

const PrivateRoutes = ({ children, ...rest }) => {
  const rotaOk = true;
  return (
    <Route {...rest}>
      {storage.getTokenAuthetication() ? (
        rotaOk ? (
          <Default>{children}</Default>
        ) : (
          <Denied />
        )
      ) : (
        <Redirect to={{ pathname: "/login" }} />
      )}
    </Route>
  );
};

export default PrivateRoutes;
