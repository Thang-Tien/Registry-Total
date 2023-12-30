import {
  Avatar,
  Button,
  Card,
  ConfigProvider,
  Descriptions,
  Space,
  Form,
  Modal,
  Input,
  notification,
  message,
  Skeleton,
} from "antd";
import {
  IoCallOutline,
  IoCalendarOutline,
  IoPersonOutline,
  IoCardOutline,
  IoMailOutline,
  IoMapOutline,
  IoLocationOutline,
  IoConstructOutline,
} from "react-icons/io5";
import { EditOutlined } from "@ant-design/icons";
import avatar from "./../../../../public/image/avatar.svg";
import classes from "./../styles/Profile.module.css";
import { useEffect, useState } from "react";
import validateDate from "validate-date";
import TextWithIcon from "./TextWithIcon";

const processBirthDate = (birthDate) => {
  if (!birthDate) return;
  const [month, day, year] = new Date(birthDate)
    .toLocaleDateString()
    .split("/");
  return [day.padStart(2, "0"), month.padStart(2, "0"), year].join("/");
};

const marginSmall = {
  padding: "2px",
};

const setRule = (name) => {
  return [
    {
      required: true,
      validator(_, value) {
        if (value) {
          if (name === "birthDate") {
            let isValid = true;
            let [date, month, year] = value.split("/");
            const birth = new Date([year, month, date].join("-"));
            const now = new Date();
            if (birth > now) isValid = false;
            else {
              if (date) date = date.padStart(2, "0");
              if (month) month = month.padStart(2, "0");
              if (year) year = year.padStart(4, "0");
              if (
                !validateDate(
                  [date, month, year].join("/"),
                  "boolean",
                  "dd/mm/yyyy"
                )
              ) {
                isValid = false;
              }
            }
            if (isValid) return Promise.resolve();
            return Promise.reject(new Error("Ngày sinh không hợp lệ"));
          } else {
            if (value.trim().length !== 0) {
              return Promise.resolve();
            }
            return Promise.reject(new Error("Trường này không được để trống!"));
          }
        } else {
          return Promise.reject(new Error("Trường này không được để trống!"));
        }
      },
    },
  ];
};

const Profile = () => {
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  const [notificationApi, notificationContextHolder] =
    notification.useNotification();
  const [messageApi, messageContextHolder] = message.useMessage();
  const [submitting, setSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  

  useEffect(() => {
    document.title = "Hồ sơ cá nhân";

    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/v1/users/getMe`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("accessToken"),
            },
          }
        );

        if (!response.ok) {
          throw new Error("Can not get.");
        }

        const res = await response.json();
        setUser(res.user);
        setLoading(false);
      } catch (err) {
        setLoading(false);
          console.error(err.message);
      }
    };

    fetchData();
  }, []);

  const openErrorNotification = (message) => {
    notificationApi["error"]({
      message: "Lỗi",
      description: message,
      placement: "bottomLeft",
    });
  };

  const openMessage = () => {
    messageApi.open({
      type: "success",
      content: "Chỉnh sửa thành công.",
    });
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          paddingLG: 22,
          colorBorderSecondary: "var(--color-grey-dark-1)",
          colorPrimary: "#1677ff",
          colorBgContainerDisabled: "#4096ff",
          colorTextDisabled: "#fff",
        },
      }}
    >
      {notificationContextHolder}
      {messageContextHolder}
      <h1 className={classes.title}>Hồ sơ của tôi</h1>
      <Skeleton
        loading={loading}
        style={{ padding: "3rem" }}
        avatar
        active
        round
        title={false}
        paragraph={{
          rows: 3,
        }}
      />
      <Skeleton
        loading={loading}
        style={{ padding: "3rem" }}
        active
        round
        paragraph={{
          rows: 3,
        }}
      />
      <Skeleton
        loading={loading}
        style={{ padding: "3rem" }}
        active
        round
        title
        paragraph={{
          rows: 3,
        }}
      />
      {!loading && (
        <Space
          direction="vertical"
          size="large"
          style={{
            display: "flex",
            padding: "3rem",
          }}
        >
          <Card>
            <Space
              direction="horizontal"
              size="large"
              align="center"
              style={{ width: "100%" }}
            >
              <Avatar src={avatar} size={100} />
              <Space direction="vertical" size="small">
                <span className={classes.name}>{user.name}</span>
                <span className={classes.role}>
                  {user.role === "staff" ? "Nhân viên" : "Quản trị viên"}
                </span>
                <span className={classes.address}>
                  {user.workFor.address}, Việt Nam
                </span>
              </Space>
            </Space>
          </Card>
          <Card
            title="Thông tin cá nhân"
            extra={
              <Button
                size="middle"
                shape="round"
                icon={<EditOutlined />}
                onClick={() => {
                  setOpen(true);
                }}
              />
            }
          >
            <Descriptions
              layout="vertical"
              labelStyle={{
                color: "var(--color-grey-dark-3)",
              }}
              contentStyle={{ paddingBottom: "16px", fontWeight: "500" }}
              colon={false}
              column={{
                sm: 2,
                xs: 1,
              }}
            >
              <Descriptions.Item
                label={<TextWithIcon Icon={IoPersonOutline} text="Họ và tên" />}
                style={marginSmall}
              >
                {user.name}
              </Descriptions.Item>
              <Descriptions.Item
                label={
                  <TextWithIcon Icon={IoCalendarOutline} text="Ngày sinh" />
                }
                style={marginSmall}
              >
                {processBirthDate(user.dateOfBirth)}
              </Descriptions.Item>
              <Descriptions.Item
                label={
                  <TextWithIcon Icon={IoCallOutline} text="Số điện thoại" />
                }
                style={marginSmall}
              >
                +84 {user.phone}
              </Descriptions.Item>
              <Descriptions.Item
                label={
                  <TextWithIcon
                    Icon={IoCardOutline}
                    text="Số căn cước công dân"
                  />
                }
                style={marginSmall}
              >
                {user.ssn}
              </Descriptions.Item>
              <Descriptions.Item
                label={<TextWithIcon Icon={IoMailOutline} text="Email" />}
                style={marginSmall}
              >
                {user.email}
              </Descriptions.Item>
            </Descriptions>
          </Card>
          <Card title="Địa chỉ làm việc">
            <Descriptions
              layout="vertical"
              labelStyle={{
                color: "var(--color-grey-dark-3)",
              }}
              contentStyle={{ paddingBottom: "16px", fontWeight: "500" }}
              colon={false}
              column={{
                sm: 2,
                xs: 1,
              }}
            >
              <Descriptions.Item
                label={<TextWithIcon Icon={IoMapOutline} text="Quốc gia" />}
                style={marginSmall}
              >
                Việt Nam
              </Descriptions.Item>
              <Descriptions.Item
                label={
                  <TextWithIcon
                    Icon={IoLocationOutline}
                    text="Tỉnh / Thành phố"
                  />
                }
                style={marginSmall}
              >
                {user.workFor.address}
              </Descriptions.Item>
              <Descriptions.Item
                label={
                  <TextWithIcon Icon={IoCallOutline} text="Số điện thoại" />
                }
                style={marginSmall}
              >
                +84 {user.workFor.phone}
              </Descriptions.Item>
              <Descriptions.Item
                label={<TextWithIcon Icon={IoMailOutline} text="Email" />}
                style={marginSmall}
              >
                {user.workFor.email}
              </Descriptions.Item>
              <Descriptions.Item
                label={
                  <TextWithIcon
                    Icon={IoConstructOutline}
                    text={
                      user.role === "staff"
                        ? "Tên đơn vị đăng kiểm"
                        : "Cục đăng kiểm"
                    }
                  />
                }
                style={marginSmall}
              >
                {user.workFor.name}
              </Descriptions.Item>
            </Descriptions>
          </Card>
        </Space>
      )}
      <Modal
        open={open}
        title="Chỉnh sửa thông tin cá nhân"
        cancelText="Hủy"
        onCancel={() => {
          form.resetFields();
          setOpen(false);
        }}
        okButtonProps={{ loading: submitting, disabled: submitting }}
        okText={submitting ? "Đang cập nhật..." : "Chỉnh sửa"}
        onOk={async () => {
          try {
            setSubmitting(true);

            const values = await form.validateFields();

            const datas = {
              name: values.name,
              phone: values.phone,
              dateOfBirth: values.birthDate.split("/").reverse().join("-"),
            };

            const response = await fetch(
              `/api/v1/users/updateMe`,
              {
                method: "PATCH",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: authHeader(),
                },
                body: JSON.stringify(datas),
              }
            );

            const res = await response.json();

            if (!response.ok) {
              openErrorNotification(res.message);
              setSubmitting(false);
              throw new Error("An error occured");
            }

            const newUser = user;
            newUser.name = datas.name;
            newUser.dateOfBirth = datas.dateOfBirth;
            newUser.phone = datas.phone;

            setUser(newUser);

            setOpen(false);
            setSubmitting(false);
            openMessage();
            form.resetFields();
          } catch (err) {
            setSubmitting(false);
            if (import.meta.env.VITE_ENV === "development") console.error(err);
          }
        }}
      >
        <Form
          form={form}
          name="update_form"
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            name: user.name,
            birthDate: processBirthDate(user.dateOfBirth),
            phone: user.phone,
          }}
        >
          <Form.Item
            name="name"
            label="Họ và tên"
            style={{ marginTop: "2rem" }}
            rules={setRule("name")}
          >
            <Input maxLength={100} allowClear />
          </Form.Item>
          <Form.Item
            name="birthDate"
            label="Ngày sinh"
            rules={setRule("birthDate")}
          >
            <Input placeholder="dd/mm/yyyy" maxLength={10} allowClear />
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
        </Form>
      </Modal>
    </ConfigProvider>
  );
};

export default Profile;