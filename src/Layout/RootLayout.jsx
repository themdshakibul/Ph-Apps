import NavBar from "../Components/Shared/NavBar";
import { Outlet } from "react-router";
import Footer from "../Components/Shared/Footer";
import { ToastContainer } from "react-toastify";

const RootLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />

      {/* tost  */}
      <ToastContainer />
    </div>
  );
};

export default RootLayout;
