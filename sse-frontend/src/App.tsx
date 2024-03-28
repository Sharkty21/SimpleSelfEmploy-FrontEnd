import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./_root/pages/Home";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import SignInForm from "./_auth/forms/SignInForm";
import { Toaster } from "./components/ui/toaster";
import Jobs from "./_root/pages/Jobs";
import JobsDetail from "./_root/pages/JobsDetail";
import Payments from "./_root/pages/Payments";
import PaymentsDetail from "./_root/pages/PaymentsDetail";
import New from "./_root/pages/New";

const App = () => {
    return (
      <main className="flex h-screen">
        <Routes>
          {/* public routes */}
          <Route element={<AuthLayout />}>
            <Route path="/sign-in" element={<SignInForm />} />
          </Route>
  
          {/* private routes */}
          <Route element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="jobs" element={<Jobs />} />
            <Route path="jobs/:id" element={<JobsDetail />} />
            <Route path="jobs/new" element={<New type="job"/>} />
            <Route path="payments" element={<Payments />} />
            <Route path="payments/:id" element={<PaymentsDetail />} />
            <Route path="payments/new" element={<New type="payment"/>} />
          </Route>
        </Routes>

        <Toaster />
      </main>
    );
  };

export default App;