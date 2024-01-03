// pages/inspections/[...id]/page.tsx
import { usePathname } from "next/navigation";
import React from "react";
import InspectionInformationPage from "../../../containers/Staff/InspectionInformationPage";

export async function generateStaticParams() {
    const totalInspections = 10000; // Adjust based on your actual car count
    const dynamicPaths = Array.from(
        { length: totalInspections },
        (_, index) => ({
            id: `${index + 1}`,
        })
    );

    return dynamicPaths;
}

export default function RouteToInspectionInformationPage(
    { params } = {} as any
) {
    const id = params.id;

    console.log(id);

    return <InspectionInformationPage inspectionId={id} />;
}
