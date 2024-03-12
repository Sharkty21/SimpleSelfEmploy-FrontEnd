import Navbar from "@/components/shared/Navbar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
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