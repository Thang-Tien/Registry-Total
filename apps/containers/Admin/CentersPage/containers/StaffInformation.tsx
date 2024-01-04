import Flex from "@/modules/ui/components/Flex";
import Typography from "@/modules/ui/components/Text";
import {
  Button,
  Popconfirm,
  Table,
  message,
  Form,
  Modal,
  Input,
  Skeleton,
} from "antd";
import { ColumnType } from "antd/es/table";
import { useState, useEffect } from "react";
import { IoAddCircleOutline, IoTrashOutline } from "react-icons/io5";

interface DataType {
  key: number;
  name: string;
  birth: Date;
  phone: number;
  email: string;
}

const StaffInformation = (props) => {
  const [data, setData] = useState([] as any);
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [deleting, setDeleting] = useState(false);
  const [refetch, setRefetch] = useState(0);
  const [form] = Form.useForm();
  const [adding, setAdding] = useState(false);
  const [open, setOpen] = useState(false);
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const openMessage = (type, content) => {
    messageApi.open({
      type: type,
      content: content,
    });
  };

  function formatDate(s: string) {
    let value = s.split("-");
    let day = value[2].split("T")[0];
    return `${day}/${value[1]}/${value[0]}`;
  }

  function validateDate(s: string) {
    let data = s.split("/");
    let valid = new Date(`${data[2]}/${data[1]}/${data[0]}`);
    return !(valid.toString() === "Invalid Date");
  }

  const columns: ColumnType<DataType>[] = [
    {
      title: "Họ và tên",
      dataIndex: "name",
      key: "name",
      width: "25%",
      align: "center",
    },
    {
      title: "Ngày sinh",
      dataIndex: "birth",
      key: "birth",
      width: "15%",
      align: "center",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
      key: "phone",
      width: "15%",
      align: "center",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: "25%",
      align: "center",
    },
    {
      dataIndex: "",
      key: "x",
      width: "5%",
      align: "center",
      render: (record) => (
        <Popconfirm
          title="Xóa nhân viên"
          description="Bạn có chắc chắn muốn xóa nhân viên này?"
          okText={deleting ? "Đang xóa" : "Xóa"}
          cancelText="Hủy"
          onConfirm={async () => {
            setDeleting(true);
            try {
              const response = await fetch(
                `http://fall2324w3g10.int3306.freeddns.org/api/v1/users/delete_account`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + localStorage.getItem("accessToken"),
                  },
                  body: JSON.stringify({ user_id: record.key }),
                }
              );

              console.log("l");
              if (!response.ok) throw new Error("Fail to delete user");

              openMessage("success", `Xóa thành công nhân viên ${record.name}`);
              setDeleting(false);
              setRefetch(1 - refetch);
            } catch (error) {
              setDeleting(false);
              console.log(error);
            }
          }}
        >
          <Button danger type="text">
            <IoTrashOutline style={{ verticalAlign: "middle" }} />
          </Button>
        </Popconfirm>
      ),
    },
  ];

  useEffect(() => {
    setLoading(true);

    const getData = async () => {
      await delay(1500);
      try {
        const response = await fetch(
          `http://fall2324w3g10.int3306.freeddns.org/api/v1/centres/staff/${props.centerId}`,
          {  
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("accessToken"),
            },
          }
        );
        if (!response.ok) throw new Error("Fail to get data");

        const tmp = await response.json();

        let tmpData: any[] = [];
        tmp.data.forEach((e) => {
          tmpData.push({
            key: e.user_id,
            name: e.name,
            birth: formatDate(e.date_of_birth),
            phone: e.phone,
            email: e.email,
          });
        });
        setData(tmpData);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    getData();
  }, [refetch]);

  return (
    <div style={{ padding: "10px 20px" }}>
      {contextHolder},
      <Skeleton loading={loading} active>
        <Modal
          title="Thêm một nhân viên mới"
          onCancel={() => {
            form.resetFields();
            setOpen(false);
          }}
          onOk={async () => {
            setAdding(true);

            try {
              const value = await form.validateFields();
              const centerData = {
                name: `${value.name}`,
                ssn: `${value.ssn}`,
                phone: `${value.phone}`,
                email: `${value.email}`,
                date_of_birth: `${value.dateOfBirth}`,
                centre_id: props.centerId,
              };

              console.log(centerData);
              const response = await fetch(
                `http://fall2324w3g10.int3306.freeddns.org/api/v1/users/create_account`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + localStorage.getItem("accessToken"),
                  },
                  body: JSON.stringify(centerData),
                }
              );

              const tmp = await response.json();

              if (!response.ok) {
                const message = tmp.message
                  .replace("ssn", "Mã CCCD")
                  .replace("slug", "Tên trung tâm")
                  .replace("phone", "Số điện thoại");

                openMessage(
                  "error",
                  message.charAt(0).toUpperCase().concat(message.slice(1))
                );
                throw new Error("There was an error.");
              }

              setOpen(false);
              setAdding(false);
              form.resetFields();
              setRefetch(1 - refetch);
            } catch (error) {
              setAdding(false);
              console.log(error);
            }
          }}
          open={open}
          okText={adding ? "Đang thêm..." : "Thêm"}
          cancelText="Hủy"
        >
          <Form
            form={form}
            name="staff_form"
            labelCol={{
              span: 6,
            }}
          >
            <Form.Item
              name="name"
              label="Tên nhân viên"
              style={{ marginTop: "2rem" }}
              rules={[
                {
                  required: true,
                  message: "Trường này không được để trống!",
                },
              ]}
            >
              <Input maxLength={100} />
            </Form.Item>
            <Form.Item
              name="ssn"
              label="Mã CCCD"
              style={{ marginTop: "2rem" }}
              rules={[
                {
                  required: true,
                  message: "Trường này không được để trống!",
                },
              ]}
            >
              <Input maxLength={12} />
            </Form.Item>
            <Form.Item
              name="phone"
              label="Số điện thoại"
              rules={[
                {
                  required: true,
                  message: "Trường này không được để trống!",
                },
              ]}
            >
              <Input maxLength={10} />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                  message: "Trường này không được để trống!",
                },
              ]}
            >
              <Input placeholder="abc@vr.com.vn" maxLength={100} />
            </Form.Item>
            <Form.Item
              name="dateOfBirth"
              label="Ngày sinh"
              rules={[
                {
                  required: true,
                  validator(_, value) {
                    if (value) {
                      let isValid = true;
                      let [date, month, year] = value.split("/");
                      const birth = new Date([year, month, date].join("-"));
                      const now = new Date();
                      if (birth > now) isValid = false;
                      else {
                        if (date) date = date.padStart(2, "0");
                        if (month) month = month.padStart(2, "0");
                        if (year) year = year.padStart(4, "0");
                        if (!validateDate([date, month, year].join("/"))) {
                          isValid = false;
                        }
                      }
                      if (isValid) return Promise.resolve();
                      return Promise.reject(
                        new Error("Ngày sinh không hợp lệ")
                      );
                    } else {
                      if (value.trim().length !== 0) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error("Trường này không được để trống!")
                      );
                    }
                  },
                },
              ]}
            >
              <Input placeholder="dd/mm/yyyy" maxLength={10} />
            </Form.Item>
          </Form>
        </Modal>
        <Table
          columns={columns}
          dataSource={data}
          scroll={{ x: 780 }}
          pagination={false}
          footer={() => (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                justifyContent: "center",
              }}
            >
              <Button
                type="dashed"
                shape="round"
                size="large"
                onClick={() => setOpen(true)}
              >
                <Flex.Row alignItems="center" gap="5px">
                  <IoAddCircleOutline />
                  <Typography.Div content="Thêm nhân viên" />
                </Flex.Row>
              </Button>
            </div>
          )}
        />
      </Skeleton>
    </div>
  );
};
export default StaffInformation;
