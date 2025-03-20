import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import AdminNavbar from "../components/AdminNavbar";

const AdminLayout = () => {
  const user = useSelector(state => state.user);

  // Redirect to login if user is not an admin
  if (!user || user.role !== "admin") {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <AdminNavbar />
      <Outlet />
    </>
  );
};

export default AdminLayout;
