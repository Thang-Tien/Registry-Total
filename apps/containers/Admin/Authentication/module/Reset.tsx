import { Steps, ConfigProvider, notification } from "antd";
import { useState } from "react";
import FindEmail from "./FindEmail";
import classes from "./../styles/Reset.module.css";
import Verify from "./Verify";
import NewPassword from "./NewPassword";

interface ResetFormProps {
  turnOffForgotMode: () => void;
}

interface StepItem {
  key: string;
  title: string;
}

const steps: StepItem[] = [
  {
    title: "Tìm kiếm",
    key: "find",
  },
  {
    title: "Xác thực",
    key: "authenticate",
  },
  {
    title: "Đặt lại mật khẩu",
    key: "reset",
  },
];

const ResetForm = (props: ResetFormProps) => {
  const [findingEmail, setFindingEmail] = useState(true);
  const [verifying, setVerifying] = useState(false);
  const [resetting, setResetting] = useState(false);
  const [tokenReset, setTokenReset] = useState("");

  const [current, setCurrent] = useState(0);
  const [status, setStatus] = useState("process");

  const [api, contextHolder] = notification.useNotification();

  const openNotification = (message: string, description: string) => {
    api.error({
      message: message,
      description: description,
    });
  };

  const next = () => {
    setCurrent((current) => current + 1);
  };

  const turnOffForgotMode = () => {
    props.turnOffForgotMode();
  };

  const items = steps.map((item) => ({
    key: item.key,
    title: item.title,
  }));

  return (
    <div className={classes.reset}>
      {contextHolder}
      <Steps
        status= "process"
        progressDot
        size="small"
        current={current}
        items={items}
      />
      <h1 className={classes.title}>
        {findingEmail && "Hãy bắt đầu bằng cách tìm kiếm email của bạn"}
        {verifying && "Hãy kiểm tra hòm thư của bạn nhé"}
        {resetting && "Thiết lập lại mật khẩu"}
      </h1>
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
        <div style={{ width: "70%" }}>
          {findingEmail && (
            <FindEmail
              turnOffForgotMode={turnOffForgotMode}
              setFindingEmail={setFindingEmail}
              setVerifying={setVerifying}
              next={next}
              openNotification={openNotification}
              setStatus={setStatus}
            />
          )}

          {verifying && (
            <Verify
              turnOffForgotMode={turnOffForgotMode}
              setVerifying={setVerifying}
              setResetting={setResetting}
              next={next}
              openNotification={openNotification}
              setTokenReset={setTokenReset}
              setStatus={setStatus}
            />
          )}

          {resetting && (
            <NewPassword
              turnOffForgotMode={turnOffForgotMode}
              tokenReset={tokenReset}
            />
          )}
        </div>
      </ConfigProvider>
    </div>
  );
};

export default ResetForm;