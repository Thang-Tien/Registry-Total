import Total from "../HomePage/containers/Total";
import ThisYear from "../HomePage/containers/ThisYear";
import Flex from "@/modules/ui/components/Flex";

const Count = () => {
  return (
    <Flex.Col gap="20px" style={{height: "100%"}}>
      <Total style={{height: "50%"}}/>
      <ThisYear style={{height: "50%"}}/>
    </Flex.Col>
  );
};

export default Count;
