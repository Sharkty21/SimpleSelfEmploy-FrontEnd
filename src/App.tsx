import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import RootLayout from "./layouts/RootLayout";
import { Toaster } from "./components/ui/toaster";
import Jobs from "./pages/Jobs";
import JobsDetail from "./pages/JobsDetail";
import Payments from "./pages/Payments";
import PaymentsDetail from "./pages/PaymentsDetail";
import New from "./pages/New";
import Account from "./pages/Account";
import Login from "./pages/Login";
import AuthLayout from "./layouts/AuthLayout";
import Callback from "./pages/Callback";
import NotFound from "./pages/NotFound";
import { useAuth0 } from "@auth0/auth0-react";
import { Loader2 } from "lucide-react";

const App = () => {

  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="flex h-screen justify-center items-center m-auto">
        <Loader2 className="animate-spin" />
      </div>
    );
  }

  return (
    <main className="flex h-screen">
      <Routes>
        {/* private routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="jobs/:id" element={<JobsDetail />} />
          <Route path="jobs/new" element={<New type="job" />} />
          <Route path="payments" element={<Payments />} />
          <Route path="payments/:id" element={<PaymentsDetail />} />
          <Route path="payments/new" element={<New type="payment" />} />
          <Route path="account" element={<Account />} />
        </Route>

        <Route path="callback" element={<Callback />} />

        {/* public routes */}
        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

      <Toaster />
    </main>
  );
};

export default App;