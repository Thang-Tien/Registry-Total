"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RouteToHomePage() {
  const router = useRouter();
    useEffect(() => {
        if(localStorage.length === 0)
        router.push("/auth"); 
    }, []);

  return <div></div>;
}
