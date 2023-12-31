"use client";
import { use, useEffect } from "react";
import { useRouter } from "next/navigation";
import AuthenticationPage from "../containers/Staff/Authentication";
import HomePage from "../containers/Staff/HomePage";
import SettingsPage from "../containers/Staff/SettingsPage";

export default function RouteToHomePage() {
    const router = useRouter();

    useEffect(() => {
        if(localStorage.length === null)
        router.push("/auth");
        else 
        router.push("/dashboard");
    }, []);
    return <div> 
    </div>;
}
