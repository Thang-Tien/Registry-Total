"use client";

import { usePathname } from "next/navigation";
import React from "react";
import CarInformationPage from "../../../containers/Staff/CarInformationPage";

// Car information page for 1 car, not flexible
export default function RouteToCarInformationPage() {
    const pathname = usePathname();
    const id = pathname.split("/").pop();

    console.log(id);
    return <CarInformationPage carId={id} />;
}
