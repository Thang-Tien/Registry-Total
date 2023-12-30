import { Button, Descriptions, Popconfirm, Space, message } from "antd";
import { useState } from "react";
import {
  IoCallOutline,
  IoConstructOutline,
  IoDocumentTextOutline,
  IoLocationOutline,
  IoMailOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import CenterModal from "./CenterCreateModal";
import Flex from "@/modules/ui/components/Flex";
import Typography from "@/modules/ui/components/Text";
import { useRouter } from "next/navigation";

const CentreInformation = (props) => {
  const [centreName, setCentreName] = useState("");
  const [centreAddress, setCentreAddress] = useState("");
  const [centrePhone, setCentrePhone] = useState("");
  const [centreEmail, setCentreEmail] = useState("");
  const [centreDescription, setCentreDescription] = useState("");
  const [centreNumberOfStaffs, setCentreNumberOfStaffs] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [provinces, setProvinces] = useState([]);

  const openMessage = (type, content) => {
    messageApi.open({
      type: type,
      content: content,
    });
  };

  setCentreName(`Trung tâm đăng kiểm ${props.centerId}`);
  setCentreAddress("Some weird place");
  setCentrePhone("0000000000");
  setCentreEmail("abc123@gmail.com");
  setCentreDescription("nothing");
  setCentreNumberOfStaffs(props.centerId);

  return (
    <div style={{ padding: "2rem 3.2rem 0" }}>
      {contextHolder},
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <CenterModal
          open={open}
          setOpen={setOpen}
          provinces={provinces}
          mode="edit"
          initialValues={{
            name: centreName.replace("Trung tâm đăng kiểm", "").trimStart(),
            phone: centrePhone,
            email: centreEmail,
            address: centreAddress,
            description: centreDescription,
          }}
          centreId={props.centreId}
          setCentreName={setCentreName}
          setCentreAddress={setCentreAddress}
          setCentrePhone={setCentrePhone}
          setCentreDescription={setCentreDescription}
          setCentreEmail={setCentreEmail}
        />
        <Descriptions bordered column={1}>
          <Descriptions.Item
            label={
              <Flex.Row>
                <IoConstructOutline />
                <Typography.Div content="Tên trung tâm" />
              </Flex.Row>
            }
          >
            {centreName}
          </Descriptions.Item>
          <Descriptions.Item
            label={
              <Flex.Row>
                <IoLocationOutline />
                <Typography.Div content="Địa chỉ" />
              </Flex.Row>
            }
          >
            {centreAddress}
          </Descriptions.Item>
          <Descriptions.Item
            label={
              <Flex.Row>
                <IoCallOutline />
                <Typography.Div content="Số điện thoại" />
              </Flex.Row>
            }
          >
            {centrePhone}
          </Descriptions.Item>
          <Descriptions.Item
            label={
              <Flex.Row>
                <IoMailOutline />
                <Typography.Div content="Email" />
              </Flex.Row>
            }
          >
            {centreEmail}
          </Descriptions.Item>
          <Descriptions.Item
            label={
              <Flex.Row>
                <IoDocumentTextOutline />
                <Typography.Div content="Mô tả" />
              </Flex.Row>
            }
          >
            {centreDescription}
          </Descriptions.Item>
          <Descriptions.Item
            label={
              <Flex.Row>
                <IoPersonOutline />
                <Typography.Div content="Số lượng nhân viên" />
              </Flex.Row>
            }
          >
            {centreNumberOfStaffs}
          </Descriptions.Item>
        </Descriptions>

        <Space size="middle">
          <Button
            icon={<EditOutlined />}
            onClick={() => {
              setOpen(true);
            }}
          >
            Chỉnh sửa
          </Button>
          <Popconfirm
            title="Xóa trung tâm"
            description="Bạn có chắc chắn muốn xóa trung tâm này?"
            okText={deleting ? "Đang xóa..." : "Tiếp tục"}
            cancelText="Hủy"
            onConfirm={() => {
                setDeleting(true);
                setDeleting(false);
                openMessage("success", "Xóa trung tâm thành công");
                router.back();
              }
            }
          >
            <Button danger type="primary" icon={<DeleteOutlined />}>
              Xóa trung tâm
            </Button>
          </Popconfirm>
        </Space>
      </div>
    </div>
  );
};

export default CentreInformation;
