import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const UserLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet /> {/* This renders the current route's component */}
      <Footer />
    </>
  );
};

export default UserLayout;
