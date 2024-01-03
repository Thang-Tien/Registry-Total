import { Form, Modal, Input, Select, notification } from "antd";
import { useState } from "react";

const CenterCreateModal = (props) => {
  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const openNotification = (type, message, description) => {
    api[type]({
      message: message,
      description: description,
    });
  };

  return (
    <>
      {contextHolder}
      <Modal
        title={
          props.mode === "edit"
            ? "Chỉnh sửa trung tâm"
            : "Thêm một trung tâm mới"
        }
        onCancel={() => {
          form.resetFields();
          props.setOpen(false);
        }}
        open={props.open}
        okButtonProps={{ loading: submitting }}
        okText={
          submitting
            ? props.mode === "edit"
              ? "Đang chỉnh sửa"
              : "Đang tạo trung tâm"
            : props.mode === "edit"
            ? "Chỉnh sửa"
            : "Tạo trung tâm"
        }
        cancelText="Hủy"
        cancelButtonProps={{ disabled: submitting }}
        onOk={async () => {
          setSubmitting(true);
          await delay(1500);
          try {
            const res = await form.validateFields();

            let newCenter = {
              name: `${
                props.mode === "edit"
                  ? res.name
                  : `Trung tâm đăng kiểm ${res.name.trim()}`
              }`,
              address: `${res.address}`,
              phone: `${res.phone}`,
              email: `${res.email}`,
            };
            let centerData = JSON.stringify(newCenter);
            const response = await fetch(
              `http://fall2324w3g10.int3306.freeddns.org/api/v1/centres/${
                props.mode === "edit" ? "update" : "add"
              }_centre${props.mode === "edit" ? `/${props.centerId}` : ""}`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: centerData,
              }
            );

            const tmp = await response.json();
            if (!response.ok) {
              const message = res.message
                .replace("name", "Tên trung tâm")
                .replace("slug", "Tên trung tâm")
                .replace("phone", "Số điện thoại");
              openNotification(
                "error",
                "Lỗi",
                message.charAt(0).toUpperCase().concat(message.slice(1))
              );
              throw new Error("Failed");
            }
            if (props.mode === "edit") {
              props.setCenterName(newCenter.name);
              props.setCenterAddress(newCenter.address);
              props.setCenterPhone(newCenter.phone);
              props.setCenterEmail(newCenter.email);
            }
            setSubmitting(false);
            form.resetFields();
            props.setOpen(false);
          } catch (error) {
            setSubmitting(false);
            props.setOpen(false);
            console.log(error);
          }
        }}
      >
        <Form
          form={form}
          name="center_form"
          labelCol={{
            span: 6,
          }}
          layout="vertical"
          initialValues={props.mode === "edit" && props.initialValues}
        >
          <Form.Item
            name="name"
            label="Tên trung tâm"
            style={{ marginTop: "2rem" }}
            rules={[
              {
                required: true,
                message: "Trường này không được để trống!",
              },
            ]}
          >
            <Input
              addonBefore="Trung tâm đăng kiểm"
              maxLength={100}
              allowClear
            />
          </Form.Item>
          <Form.Item
            name="address"
            label="Địa chỉ"
            rules={[
              {
                required: true,
                message: "Trường này không được để trống!",
              },
            ]}
          >
            <Select
              showSearch
              allowClear
              placeholder="Chọn tỉnh/thành phố"
              options={props.addressList.map((address) => {
                return { value: address, title: address };
              })}
            />
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
            <Input maxLength={10} allowClear />
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
            <Input maxLength={100} allowClear />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default CenterCreateModal;
