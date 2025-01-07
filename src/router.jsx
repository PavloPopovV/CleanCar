import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./constantes/routes.js";
import App from "./containers/App/index.jsx";
import Home from "./pages/Home/index.jsx";
import ModelDetails from "./pages/ModelDetails/index.jsx";

export const router = createBrowserRouter([
  {
    path: "",
    element: <App/>,
    children: [
      {
        path: ROUTES.HOME,
        element: <Home />,
      },
      {
        path: ROUTES.MODELSBYID,
        element: <ModelDetails />,
      },
    ],
  },
]);
