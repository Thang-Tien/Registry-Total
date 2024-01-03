"use client";

import { use, useEffect } from "react";
import { useRouter } from "next/navigation";
import AuthenticationPage from "../containers/Staff/Authentication";
import HomePage from "../containers/Staff/HomePage";

export default function RouteToHomePage() {
    const router = useRouter();

    useEffect(() => {
        if(localStorage.length === 0)
        router.push("/auth"); 
    }, []);

    return <div></div>;
}
