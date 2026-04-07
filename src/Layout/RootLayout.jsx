import NavBar from "../Components/Shared/NavBar";
import { Outlet } from "react-router";
import Footer from "../Components/Shared/Footer";

const RootLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
