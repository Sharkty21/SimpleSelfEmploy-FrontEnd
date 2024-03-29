import { Button } from "@/components/ui/button"
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const navigate = useNavigate();

    if (isAuthenticated)
    {
        navigate("/");
    }

    const handleLogin = async () => {
        await loginWithRedirect({
          appState: {
            returnTo: "/",
          },
        });
      };

    return (
        <div className="flex flex-col mx-auto w-full items-center space-y-5">
            <div className="flex flex-row items-center">
                <img src="/logo.png" className="h-20" />
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Simple Self Employ</h1>
            </div>
            <Button className="mx-auto text-3xl font-semibold p-8" onClick={handleLogin}>Login</Button>
            <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">Welcome!</h3>
        </div>
    )
}

export default Login