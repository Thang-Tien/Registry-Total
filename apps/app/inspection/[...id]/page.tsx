"use client";

// pages/inspections/[...id]/page.tsx
import { usePathname } from "next/navigation";
import React from "react";
import InspectionInformationPage from "../../../containers/Staff/InspectionInformationPage";

export default function RouteToInspectionInformationPage() {
    const pathname = usePathname();
    const id = pathname.split("/").pop();

    console.log(id);

    return <InspectionInformationPage inspectionId={id} />;
}
