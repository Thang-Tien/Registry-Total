import InspectionView from "../../../containers/Admin/Inspection/InspectionVierw";

export async function generateStaticParams() {
  const totalInspection = 10000; // Adjust based on your actual car count
  const dynamicPaths = Array.from({ length: totalInspection }, (_, index) => ({
      id: `${index + 1}`,
  }));

  return dynamicPaths;
}

export default function RouteToInspectionProfile({
  params,
}: {
  params: { id: string };
}) {
  return <InspectionView inspectionId = {Number(params.id)}/>
}
