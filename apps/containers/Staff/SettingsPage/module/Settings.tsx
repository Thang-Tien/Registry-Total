import { Tabs } from "antd";
import { useRouter } from "next/navigation";
import Profile from "./Profile";
import ChangePassword from "./ChangePassword";
import TextWithIcon from "./TextWithIcon";
import { IoLockClosedOutline, IoRocketOutline } from "react-icons/io5";

const Settings = (props) => {
  const router = useRouter();

  return (
    <Tabs
      tabPosition="left"
      tabBarGutter={16}
      tabBarStyle={{
        marginTop: "2rem",
        width: "20%",
      }}
      centered={true}
      items={[
        {
          label: (
            <TextWithIcon Icon={IoRocketOutline} text="Thông tin cá nhân" />
          ),
          key: "profile",
          children: <Profile />,
        },
        {
          label: (
            <TextWithIcon Icon={IoLockClosedOutline} text="Thay đổi mật khẩu" />
          ),
          key: "password",
          children: <ChangePassword />,
        },
      ]}
      style={{
        width: "80%",
        backgroundColor: "#fff",
        margin: "1rem auto",
        border: "1px solid var(--color-grey-dark-1)",
        borderRadius: "8px",
      }}
      onChange={(key) => {
        router.push(`/settings/${key}`);
      }}
      defaultActiveKey={props.mode}
    />
  );
};

export default Settings;