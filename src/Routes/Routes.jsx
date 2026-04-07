import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import HomePage from "../Pages/Home/HomePage";
import AllApps from "../Pages/Apps/AllApps";
import InstalledPage from "../Pages/InistalledApp/InstalledPage";

export const route = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        path: "/",
        Component: HomePage,
      },
      {
        path: "/allapps",
        Component: AllApps,
      },
      {
        path: "/installapps",
        Component: InstalledPage,
      },
    ],
  },
]);
