import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import HomePage from "../Pages/Home/HomePage";
import AllApps from "../Pages/Apps/AllApps";
import InstalledPage from "../Pages/InistalledApp/InstalledPage";
import ErrorPage from "../Pages/Error/ErrorPage";
import AppDeetails from "../Pages/AppDetails/AppDeetails";
import DashBord from "../Pages/DashBord/DashBord";

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
        path: "/apps/:id",
        Component: AppDeetails,
      },
      {
        path: "/inistallation",
        Component: InstalledPage,
      },
      {
        path: "/dashbord",
        Component: DashBord,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
