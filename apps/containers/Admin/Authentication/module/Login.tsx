import {
  Button,
  ConfigProvider,
  Form,
  Input,
  Typography,
  notification,
} from "antd";
import classes from "./../styles/Login.module.css";
import { useState } from "react";
import { IoLockClosedOutline, IoMailOutline } from "react-icons/io5";
import { useRouter } from 'next/navigation'


interface LoginFormProps {
  turnOnForgotMode: () => void;
}

const LoginForm = (props: LoginFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [api, contextHolder] = notification.useNotification();

  const router = useRouter();

  const openNotification = () => {
    api.error({
      message: "Lỗi",
      description: "Thông tin đăng nhập không chính xác.",
    });
  };

  const onFinish = async (values: { email: string; password: string }) => {
    setIsSubmitting(true);

    try {
      const response = await fetch(
        `/api/v1/users/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      if (!response.ok) {
        console.log
        openNotification();
        setIsSubmitting(false);
        throw new Error("Can not authenticate.");
      }

      const res = await response.json();
      console.log(res);
      localStorage.setItem("accessToken", res.token);
      
    if ( res.token) {
      router.push("/HomePage"); 
      
    } else {
      setIsSubmitting(false);
      throw new Error("Failed to authenticate.");
    }
    } catch (err) {
      setIsSubmitting(false);
      console.error(err);
    }
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgContainer: "#F1F6F5",
          borderRadius: 10,
          controlHeight: 34,
          colorBgContainerDisabled: "#4096ff",
          colorTextDisabled: "#fff",
          colorErrorOutline: "none",
          controlOutline: "none",
        },
      }}
    >
      <div className={classes.form}>
        {contextHolder}
        <h1 className={classes.title}>Welcome back!</h1>
        <Form name="login" className={classes.login} onFinish={onFinish}>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Hãy nhập email",
              },
            ]}
          >
            <Input
              prefix={<IoMailOutline className={classes.icon} />}
              placeholder="Email"
              type="email"
              autoComplete="off"
              size="large"
              className={classes.input}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Hãy nhập mật khẩu",
              },
            ]}
          >
            <Input.Password
              prefix={<IoLockClosedOutline className={classes.icon} />}
              type="password"
              size="large"
              placeholder="Mật khẩu"
              autoComplete="off"
              className={classes.input}
            />
          </Form.Item>

          <Form.Item>
            <Typography.Link
              onClick={() => props.turnOnForgotMode()}
              className={classes.forgot}
            >
              Quên mật khẩu?
            </Typography.Link>
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
              {isSubmitting ? "Đang đăng nhập..." : "Đăng nhập"}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </ConfigProvider>
  );
};

export default LoginForm;