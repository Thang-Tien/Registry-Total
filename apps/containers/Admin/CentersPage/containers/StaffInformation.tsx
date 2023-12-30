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
} from "antd";
import { ColumnType } from "antd/es/table";
import { useState, useEffect } from "react";
import { IoAddCircleOutline, IoTrashOutline } from "react-icons/io5";
import { isDate } from "util";

interface DataType {
  key: number;
  name: string;
  birth: Date;
  phone: number;
  email: string;
}

const StaffInformation = (props) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [deleting, setDeleting] = useState(false);
  const [form] = Form.useForm();
  const [adding, setAdding] = useState(false);
  const [open, setOpen] = useState(false);

  const openMessage = (type, content) => {
    messageApi.open({
      type: type,
      content: content,
    });
  };

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
            openMessage("success", `Xóa thành công nhân viên ${record.name}`);
            setDeleting(false);
          }}
        >
          <Button danger type="text">
            <IoTrashOutline style={{ verticalAlign: "middle" }} />
          </Button>
        </Popconfirm>
      ),
    },
  ];
  const data: DataType[] = [];
  useEffect(() => {
    for (let index = 0; index < 20; index++) {
      data.push({
        key: index,
        name: `nhan vien ${index}`,
        birth: new Date(),
        phone: 12312312312,
        email: "abc@gmail.com",
      });
    }
  }, []);

  return (
    <div style={{ padding: "2rem 3.2rem 0" }}>
      {contextHolder}
      <Modal
        title="Thêm một nhân viên mới"
        onCancel={() => {
          form.resetFields();
          setOpen(false);
        }}
        onOk={() => {
          setAdding(true);
          form.validateFields();
          setOpen(false);
          setAdding(false);
          form.resetFields();
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
                      if (!isDate([date, month, year].join("/"))) {
                        isValid = false;
                      }
                    }
                    if (isValid) return Promise.resolve();
                    return Promise.reject(new Error("Ngày sinh không hợp lệ"));
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
              <Flex.Row>
                <IoAddCircleOutline />
                <Typography.Div content="Thêm nhân viên" />
              </Flex.Row>
            </Button>
          </div>
        )}
      />
    </div>
  );
};
export default StaffInformation;
