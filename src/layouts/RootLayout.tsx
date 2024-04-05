import Navbar from "@/components/shared/Navbar";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

const RootLayout = () => {
  const { isAuthenticated, getAccessTokenSilently, isLoading } = useAuth0();

  // Function to update the authToken in local storage
  const updateAuthToken = async () => {
    try {
      const authToken = await getAccessTokenSilently();
      localStorage.setItem('authToken', authToken);
    } catch (error) {
      console.error('Error updating authToken');
    }
  };

  // useEffect hook to update authToken when authentication state changes
  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      updateAuthToken();
    }
  }, [isLoading, isAuthenticated, getAccessTokenSilently]);

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