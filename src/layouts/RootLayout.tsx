import Navbar from "@/components/shared/Navbar";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, Outlet } from "react-router-dom";

const RootLayout = () => {
  const { isAuthenticated } = useAuth0();

  return !isAuthenticated ? <Navigate to="/login"/> : (
    <div className="w-full flex flex-col">
      <Navbar />
      <section className="flex flex-1 justify-center items-center w-4/5 mx-auto">
        <Outlet />
      </section>
    </div>
  );
};

export default RootLayout;