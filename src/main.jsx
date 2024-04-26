import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MotionGraphics from "./components/routes/motion_graphics/motion_graphics.jsx";
import PgProjects from './components/routes/pgProjects/PgProjects.jsx'
import ErrorPage from "./components/routes/error/errorPage.jsx";
import SoundDesign from './components/routes/SoundDesign/SoundDesign.jsx'
import Posters from './components/routes/posters/Posters.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/motionGraphics",
    element: <MotionGraphics />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/PgProjects",
    element: <PgProjects />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/SoundDesign",
    element: <SoundDesign />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Posters",
    element: <Posters />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
