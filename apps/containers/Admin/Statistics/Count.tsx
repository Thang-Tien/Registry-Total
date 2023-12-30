import Total from "../HomePage/containers/Total";
import ThisYear from "../HomePage/containers/ThisYear";
import Flex from "@/modules/ui/components/Flex";

const Count = () => {
  return (
    <Flex.Col gap="20px">
        <Total />
        <ThisYear/>
    </Flex.Col>
  );
};

export default Count;
