import { Form, Input, Button, ConfigProvider } from "antd";
import { useState } from "react";

import classes from "./../styles/Reset.module.css";

const Verify = (props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onFinish = async (values) => {
    setIsSubmitting(true);
    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/users/checkResetToken`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      if (!response.ok) {
        props.openNotification("Lỗi", "Mã xác thực không chính xác.");
        props.setStatus("error");
        setIsSubmitting(false);
        throw new Error("Could not authenticate.");
      }

      props.setStatus("finish");
      props.setTokenReset(values.token);
      props.setVerifying(false);
      props.setResetting(true);
      props.next();
    } catch (err) {
      // if (import.meta.env.VITE_ENV === "development") 
      console.error(err);
    }
  };
  
  return (
    <Form name="verify-token" onFinish={onFinish}>
      <Form.Item
        name="token"
        rules={[
          {
            required: true,
            message: "Hãy nhập mã xác thực",
          },
        ]}
      >
        <Input.Password
          placeholder="Mã xác thực"
          type="password"
          autoComplete="off"
          size="large"
          className={classes.input}
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className={classes.button}
          size="large"
          loading={isSubmitting}
          disabled={isSubmitting}
          style={{ fontSize: "1.6rem" }}
        >
          Tiếp tục
        </Button>
        <ConfigProvider
          theme={{
            token: {
              colorBgContainerDisabled: "rgba(0, 0, 0, 0.04)",
              colorTextDisabled: "rgba(0, 0, 0, 0.25)",
            },
          }}
        >
          <Button
            htmlType="button"
            className={classes.button}
            style={{ height: "4.2rem" }}
            disabled={isSubmitting}
            onClick={() => {
              props.turnOffForgotMode();
            }}
          >
            Trở về đăng nhập
          </Button>
        </ConfigProvider>
      </Form.Item>
    </Form>
  );
};

export default Verify;