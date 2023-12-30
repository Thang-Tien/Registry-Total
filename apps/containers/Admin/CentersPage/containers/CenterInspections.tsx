import InspectionsTable from "../../Inspection/InspectionTable";

const CenterInspections = (props) => {
  return <InspectionsTable mode="all" centreId={props.centreId} />;
};

export default CenterInspections;