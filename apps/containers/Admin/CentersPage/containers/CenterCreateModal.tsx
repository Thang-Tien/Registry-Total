import { Form, Modal, Input, Select } from "antd";
import { useState } from "react";

const CenterCreateModal = (props) => {
  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);

  return (
    <>
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
        onOk={() => {
          setSubmitting(true);
          form.validateFields();
          setSubmitting(false);
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
            <Select showSearch allowClear placeholder="Chọn tỉnh/thành phố" />
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
          <Form.Item name="description" label="Mô tả">
            <Input.TextArea rows={4} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default CenterCreateModal;
