import { IoAddCircleOutline } from "react-icons/io5";
import { useState } from "react";
import Button from "@/modules/ui/components/Button";
import Flex from "@/modules/ui/components/Flex";
import Typography from "@/modules/ui/components/Text";
import CenterCreateModal from "./CenterCreateModal";

const CenterCreate = (props) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div style={{ marginBottom: "20px" }}>
      <CenterCreateModal
        provinces={props.provinces}
        setOpen={setOpenModal}
        open={openModal}
        mode="add"
      />
      <Button.Float
        onClick={() => setOpenModal(true)}
        style={{ border: "1px dashed", borderRadius: "20px", height: "30px" }}
      >
        <Flex.Row alignItems="center" gap="6px">
          <IoAddCircleOutline />
          <Typography.Div content={"Thêm trung tâm"} />
        </Flex.Row>
      </Button.Float>
    </div>
  );
};

export default CenterCreate;
