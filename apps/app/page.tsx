"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


export default function RouteToHomePage() {
    const router = useRouter();
    const [me, setMe] = useState({
      name: '', address: '', phone: 0, email: '', date_of_birth: '', role: '', ssn: '', centre_id: 0,
    });
    const df = { name: "Thiện pờ rồ", age: 18 };
    useEffect(()=>{
      if(me.role ==="staff") router.push("/dashboards") 
      if(me.role === "admin") router.push("/dashboard");
    },[me]);
    useEffect(() => {
        if(localStorage.length === 0)
        router.push("/auth"); 
      else {
        const data = localStorage.getItem("data") === null ? JSON.stringify(df) : localStorage.getItem("data");
        if (data != null) setMe(JSON.parse(data));
      }
    }, []);

  return <div></div>;
}
