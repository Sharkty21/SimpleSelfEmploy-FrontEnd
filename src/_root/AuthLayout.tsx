import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="w-full flex flex-col">
      <section className="flex flex-1 justify-center items-center w-4/5 mx-auto">
        <Outlet />
      </section>
    </div>
  );
};

export default AuthLayout;