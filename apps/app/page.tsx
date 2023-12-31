"use client";
import { use, useEffect } from "react";
import { useRouter } from "next/navigation";
import AuthenticationPage from "../containers/Staff/Authentication";
import HomePage from "../containers/Staff/HomePage";

export default function RouteToHomePage() {
    const router = useRouter();

    useEffect(() => {
        router.push("/auth");
    }, []);
    // const pushAuth = () => {
    //     router.push("/auth");
    // };

    // pushAuth();
    return <div></div>;
}
