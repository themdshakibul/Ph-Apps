import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import { route } from "./Routes/Routes";
import "./index.css";
import InstallProveider from "./Context/InstallProveider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <InstallProveider>
      <RouterProvider router={route} />
    </InstallProveider>
  </StrictMode>,
);
