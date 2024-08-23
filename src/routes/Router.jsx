import Home from "../components/Home.jsx";
import Layout from "./Layout.jsx";
import ComponentDetail from "../components/ComponentDetail.jsx";

import { createBrowserRouter } from "react-router-dom";

const Router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "components",
        children: [
          {
            path: ":id",
            element: <ComponentDetail />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <h1>Not Found</h1>,
  },
]);

export default Router;
