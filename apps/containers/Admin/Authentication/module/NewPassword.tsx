import { Form, Input, Button, ConfigProvider, notification } from "antd";
import { useState } from "react";
import { IoLockClosedOutline } from "react-icons/io5";
import { useRouter } from 'next/navigation'

interface NewPasswordProps {
  tokenReset: string;
  turnOffForgotMode: () => void;
  email: string;
}

const NewPassword = (props: NewPasswordProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { error } = notification;
  const router = useRouter();

  const onFinish = async (values: { password: string; passwordConfirm: string }) => {
    setIsSubmitting(true);

    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/users/reset-password`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ otp: props.tokenReset, email: props.email, newPassword: values.password }),
        }
      );

      if (!response.ok) {
        setIsSubmitting(false);
        throw new Error("Could not authenticate.");
      }

      const res = await response.json();

      localStorage.setItem("accessToken", res.token);

      if (res.status == "Success")
        router.push("/Login");
    } catch (err) {
      setIsSubmitting(false);
      console.error(err);
    }
  };

  return (
    <Form name="reset" onFinish={onFinish}>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Hãy nhập mật khẩu mới",
          },
        ]}
      >
        <Input.Password
          prefix={<IoLockClosedOutline />}
          placeholder="Mật khẩu mới"
          type="password"
          autoComplete="off"
          size="large"
        />
      </Form.Item>

      <Form.Item
        name="passwordConfirm"
        dependencies={["password"]}
        rules={[
          {
            required: true,
            message: "Hãy nhập lại mật khẩu",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("Mật khẩu không trùng khớp"));
            },
          }),
        ]}
      >
        <Input.Password
          prefix={<IoLockClosedOutline />}
          placeholder="Nhập lại mật khẩu mới"
          type="password"
          autoComplete="off"
          size="large"
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          size="large"
          loading={isSubmitting}
          disabled={isSubmitting}
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

export default NewPassword;