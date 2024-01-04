import {
  Button,
  Descriptions,
  Popconfirm,
  Skeleton,
  Space,
  message,
} from "antd";
import { useEffect, useState } from "react";
import {
  IoCallOutline,
  IoConstructOutline,
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
  const [loading, setLoading] = useState(false);
  const [centerName, setCenterName] = useState("");
  const [centerAddress, setCenterAddress] = useState("");
  const [centerPhone, setCenterPhone] = useState("");
  const [centerEmail, setCenterEmail] = useState("");
  const [centerNumberOfStaffs, setCenterNumberOfStaffs] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [addressList, setAddressList] = useState([] as any);
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const openMessage = (type, content) => {
    messageApi.open({
      type: type,
      content: content,
    });
  };

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      await delay(1500);
      try {
        let response = await fetch(
          `http://fall2324w3g10.int3306.freeddns.org/api/v1/centres?centre_id=${props.centerId}`,
          {  
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("accessToken"),
            },
          }
        );
        if (!response.ok) throw new Error("Fail to get data");

        let tmp = await response.json();

        setCenterName(tmp.data[0].name);
        setCenterAddress(tmp.data[0].address);
        setCenterEmail(tmp.data[0].email);
        setCenterPhone(tmp.data[0].phone);
        response = await fetch(
          `http://fall2324w3g10.int3306.freeddns.org/api/v1/centres/staff/${props.centerId}`,
          {  
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("accessToken"),
            },
          }
        );
        if (!response.ok) throw new Error("Fail to get data");

        tmp = await response.json();
        setCenterNumberOfStaffs(tmp.data.length);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div style={{ padding: "2rem 3.2rem 0" }}>
      {contextHolder},
      <Skeleton loading={loading} active>
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
            addressList={addressList}
            mode="edit"
            initialValues={{
              name: centerName,
              phone: centerPhone,
              email: centerEmail,
              address: centerAddress,
            }}
            centerId={props.centerId}
            setCenterName={setCenterName}
            setCenterAddress={setCenterAddress}
            setCenterPhone={setCenterPhone}
            setCenterEmail={setCenterEmail}
          />
          <Descriptions bordered column={1}>
            <Descriptions.Item
              label={
                <Flex.Row alignItems="center" gap="10px">
                  <IoConstructOutline />
                  <Typography.Div content="Tên trung tâm" />
                </Flex.Row>
              }
            >
              {centerName}
            </Descriptions.Item>
            <Descriptions.Item
              label={
                <Flex.Row alignItems="center" gap="10px">
                  <IoLocationOutline />
                  <Typography.Div content="Địa chỉ" />
                </Flex.Row>
              }
            >
              {centerAddress}
            </Descriptions.Item>
            <Descriptions.Item
              label={
                <Flex.Row alignItems="center" gap="10px">
                  <IoCallOutline />
                  <Typography.Div content="Số điện thoại" />
                </Flex.Row>
              }
            >
              {centerPhone}
            </Descriptions.Item>
            <Descriptions.Item
              label={
                <Flex.Row alignItems="center" gap="10px">
                  <IoMailOutline />
                  <Typography.Div content="Email" />
                </Flex.Row>
              }
            >
              {centerEmail}
            </Descriptions.Item>
            <Descriptions.Item
              label={
                <Flex.Row alignItems="center" gap="10px">
                  <IoPersonOutline />
                  <Typography.Div content="Số lượng nhân viên" />
                </Flex.Row>
              }
            >
              {centerNumberOfStaffs}
            </Descriptions.Item>
          </Descriptions>

          <Space size="middle">
            <Button
              icon={<EditOutlined />}
              onClick={async () => {
                setOpen(true);
                const response = await fetch(
                  "http://fall2324w3g10.int3306.freeddns.org/api/v1/centres",
                  {  
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: "Bearer " + localStorage.getItem("accessToken"),
                    },
                  }
                );
                let tmpData = await response.json();
                tmpData = tmpData.data;

                let data: any[] = [];
                tmpData.forEach((e) => {
                  data.push(e.address);
                });
                data = Array.from(new Set(data));
                setAddressList(data);
              }}
            >
              Chỉnh sửa
            </Button>
            <Popconfirm
              title="Xóa trung tâm"
              description="Bạn có chắc chắn muốn xóa trung tâm này?"
              okText={deleting ? "Đang xóa..." : "Tiếp tục"}
              cancelText="Hủy"
              onConfirm={async () => {
                setDeleting(true);
                try {
                  const response = await fetch(
                    `http://fall2324w3g10.int3306.freeddns.org/api/v1/centres/deactivate/${props.centerId}`,
                    {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + localStorage.getItem("accessToken"),
                      },
                    }
                  );
                  if (!response.ok) throw new Error("Fail to delete center");
                  openMessage("success", "Xóa trung tâm thành công");
                  setDeleting(false);
                  router.back();
                } catch (error) {
                  setDeleting(false);
                  console.log(error);
                }
              }}
            >
              <Button danger type="primary" icon={<DeleteOutlined />}>
                Xóa trung tâm
              </Button>
            </Popconfirm>
          </Space>
        </div>
      </Skeleton>
    </div>
  );
};

export default CentreInformation;
