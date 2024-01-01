// cars/[...id]/page.tsx

import { usePathname } from "next/navigation";
import React from "react";
import CarInformationPage from "../../../containers/Staff/CarInformationPage";

export async function generateStaticParams() {
    const totalCars = 10000; // Adjust based on your actual car count
    const dynamicPaths = Array.from({ length: totalCars }, (_, index) => ({
        id: `${index + 1}`,
    }));

    return dynamicPaths;
}

// Car information page for 1 car, not flexible
export default function RouteToCarInformationPage({ params } = {} as any) {
    const id = params.id;

    console.log(id);
    return <CarInformationPage carId={id} />;
}
