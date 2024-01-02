"use client";

import { useEffect, useState } from "react";
import CarProfile from "../../../containers/Admin/CarsPage/containers/CarProfile";

export default function RouteToCarProfile({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div>
      <CarProfile carId={Number(params.id)} />
    </div>
  );
}
