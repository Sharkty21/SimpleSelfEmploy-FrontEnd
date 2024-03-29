import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./_root/pages/Home";
import RootLayout from "./_root/RootLayout";
import { Toaster } from "./components/ui/toaster";
import Jobs from "./_root/pages/Jobs";
import JobsDetail from "./_root/pages/JobsDetail";
import Payments from "./_root/pages/Payments";
import PaymentsDetail from "./_root/pages/PaymentsDetail";
import New from "./_root/pages/New";
import { AuthenticationGuard } from "./components/shared/AuthenticationGuard";
import Account from "./_root/pages/Account";
import Login from "./_root/pages/Login";
import AuthLayout from "./_root/AuthLayout";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>

        {/* public routes */}
        <Route element ={<AuthLayout />}>
          <Route path="login" element={<Login />} />
        </Route>

        {/* private routes */}
        <Route element={<AuthenticationGuard component={RootLayout} />}>
          <Route index element={<Home/>} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="jobs/:id" element={<JobsDetail />} />
          <Route path="jobs/new" element={<New type="job" />} />
          <Route path="payments" element={<Payments />} />
          <Route path="payments/:id" element={<PaymentsDetail />} />
          <Route path="payments/new" element={<New type="payment" />} />
          <Route path="account" element={<Account />} />
        </Route>
      </Routes>

      <Toaster />
    </main>
  );
};

export default App;