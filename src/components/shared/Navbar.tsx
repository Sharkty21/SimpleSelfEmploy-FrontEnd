"use client"

import { Link } from "react-router-dom"

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const Navbar = () => {
    return (
        <section className="flex py-4 px-5 w-4/5 mx-auto justify-between">
            <div>
                <Link to="/" className="flex flex-row items-center">
                    <img src="/logo.png" className="h-10" />
                    <h1>Simple Self Employ</h1>
                </Link>
            </div>
            <NavigationMenu className="flex justify-between w-full">
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link to="/" className={navigationMenuTriggerStyle()}>
                            Home
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link to="/jobs" className={navigationMenuTriggerStyle()}>
                            Jobs
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link to="/payments" className={navigationMenuTriggerStyle()}>
                            Payments
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link to="/account" className={navigationMenuTriggerStyle()}>
                            Account
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </section>
    )
}

export default Navbar