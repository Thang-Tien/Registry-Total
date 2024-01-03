"use client";

import {
  Button,
  ConfigProvider,
  Form,
  Input,
  Space,
  message,
  notification,
} from "antd";
import classes from "./../styles/ChangePassword.module.css";
import { useEffect, useState } from "react";


const ChangePassword = () => {
  const [form] = Form.useForm();
  const [notificationApi, notificationContextHolder] =
    notification.useNotification();
  const [messageApi, messageContextHolder] = message.useMessage();
  const [isChanging, setIsChanging] = useState(false);
 

  useEffect(() => {
    document.title = "Thay đổi mật khẩu";
  }, []);

  const openErrorNotification = () => {
    notificationApi["error"]({
      message: "Lỗi",
      description: "Mật khẩu không chính xác.",
      placement: "bottomLeft",
    });
  };

  const openMessage = () => {
    messageApi.open({
      type: "success",
      content: "Đổi mật khẩu thành công.",
    });
  };

  const onFinish = async (values) => {
    try {
      const data = {
        passwordCurrent: values.password,
        password: values.newpassword,
        passwordConfirm: values.confirm,
      };

      setIsChanging(true);

      const response = await fetch(
        `http://localhost:8000/api/v1/users/updatePassword`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
          body: JSON.stringify(data),
        }
      );

      setIsChanging(false);

      if (!response.ok) {
        openErrorNotification();
        throw new Error("Can not change password");
      }

      const res = await response.json();

      openMessage();
    } catch (err) {
       console.error(err);
    }
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#1677ff",
          colorBgContainerDisabled: "#4096ff",
          colorTextDisabled: "#fff",
        },
      }}
    >
      {notificationContextHolder}
      {messageContextHolder}
      <h1 className={classes.title}>Thay đổi mật khẩu</h1>
      <Form
        name="change-password-form"
        form={form}
        className={classes.form}
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 12,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="password"
          label="Mật khẩu hiện tại"
          rules={[
            {
              required: true,
              message: "Trường này không được để trống!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="newpassword"
          label="Mật khẩu mới"
          rules={[
            {
              required: true,
              message: "Trường này không được để trống!",
            },
            {
              min: 8,
              message: "Mật khẩu phải có độ dài tối thiểu là 8",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="confirm"
          label="Nhập lại mật khẩu"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Trường này không được để trống!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("newpassword") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Mật khẩu không trùng khớp!"));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            md: { offset: 10 },
            sm: { offset: 8, span: 8 },
            xs: { offset: 7 },
          }}
        >
          <Space size="middle">
            <ConfigProvider
              theme={{
                token: {
                  colorBgContainerDisabled: "rgba(0, 0, 0, 0.04)",
                  colorTextDisabled: "rgba(0, 0, 0, 0.25)",
                },
              }}
            >
              <Button type="default" disabled={isChanging} htmlType="reset">
                Hủy
              </Button>
            </ConfigProvider>
            <Button
              type="primary"
              htmlType="submit"
              className={classes.btn}
              disabled={isChanging}
              loading={isChanging}
            >
              {isChanging ? "Đang cập nhật..." : "Xác nhận"}
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </ConfigProvider>
  );
};

export default ChangePassword;