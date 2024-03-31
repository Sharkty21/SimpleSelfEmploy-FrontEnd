import Navbar from "@/components/shared/Navbar";
import { useAuth0 } from "@auth0/auth0-react";
import { Outlet } from "react-router-dom";
import Login from "./pages/Login";

const RootLayout = () => {

  const { isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return (
      <div className="w-full flex flex-col">
        <section className="flex flex-1 justify-center items-center w-4/5 mx-auto">
          <Login />
        </section>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <section className="flex flex-1 justify-center items-center w-4/5 mx-auto">
        <Outlet />
      </section>
    </div>
  );
};

export default RootLayout;