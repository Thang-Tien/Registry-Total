"use client";

import CenterProfile from "../../../containers/Admin/CentersPage/containers/CenterProfile";

export default function RouteToCenterID({params}: {params: {id: string}}) {
  return (
    <div>
        <CenterProfile centerId = {Number(params.id)} />
    </div>
  );
}
