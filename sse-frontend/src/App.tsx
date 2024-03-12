import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./_root/pages/Home";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import SignInForm from "./_auth/forms/SignInForm";
import { Toaster } from "./components/ui/toaster";
import Jobs from "./_root/pages/Jobs";
import JobsDetail from "./_root/pages/JobsDetail";

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
          </Route>
        </Routes>

        <Toaster />
      </main>
    );
  };

export default App;