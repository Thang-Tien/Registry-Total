import CenterProfile from "../../../containers/Admin/CentersPage/containers/CenterProfile";

export async function generateStaticParams() {
  const totalCenter = 10000; // Adjust based on your actual car count
  const dynamicPaths = Array.from({ length: totalCenter }, (_, index) => ({
      id: `${index + 1}`,
  }));

  return dynamicPaths;
}

export default function RouteToCenterProfile({params}: {params: {id: string}}) {
  return (
    <div>
        <CenterProfile centerId = {Number(params.id)} />
    </div>
  );
}
