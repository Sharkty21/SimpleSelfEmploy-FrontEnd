import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useAuth0 } from "@auth0/auth0-react";


const Account = () => {
    const { user, logout } = useAuth0();

    const handleLogout = () => {
        logout({
            logoutParams: {
                returnTo: window.location.origin + "/login",
            },
        });
    };

    return (
        <div className="w-full">
            <Card className="flex flex-col">
                <div className="flex flex-row justify-between">
                    <CardHeader>
                        <CardTitle>Account</CardTitle>
                    </CardHeader>
                    <Button className="mt-5 mx-5 ml-auto" onClick={handleLogout}>Logout</Button>
                </div>
                <CardContent>
                    <p>Welcome {user?.name}!</p>
                </CardContent>
            </Card>
        </div>
    )
}

export default Account