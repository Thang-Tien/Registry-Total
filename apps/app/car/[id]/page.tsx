import CarProfile from "../../../containers/Admin/CarsPage/containers/CarProfile";

export async function generateStaticParams() {
  const totalCar = 10000; // Adjust based on your actual car count
  const dynamicPaths = Array.from({ length: totalCar }, (_, index) => ({
      id: `${index + 1}`,
  }));

  return dynamicPaths;
}

export default function RouteToCarProfile({params}: {params: {id: string}}) {
  return (
    <div>
        <CarProfile carId = {Number(params.id)} />
    </div>
  );
}
