import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import HomePage from "../Pages/Home/HomePage";
import AllApps from "../Pages/Apps/AllApps";
import InstalledPage from "../Pages/InistalledApp/InstalledPage";
import ErrorPage from "../Pages/Error/ErrorPage";

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
        path: "/apps",
        Component: AllApps,
      },
      {
        path: "/inistallation",
        Component: InstalledPage,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
