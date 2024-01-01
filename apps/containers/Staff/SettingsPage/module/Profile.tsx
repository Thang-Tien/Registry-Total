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
import avatar from "./../../../../public/image/avatar.png";
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
  const [user, setUser] = useState({
    name: '', address: '', phone: 0, email: '', date_of_birth: ''
  });
  const [me, setMe] = useState({
    name: '', address: '', phone: 0, email: '', date_of_birth: '', role: '', ssn: '', centre_id: 0,
  });
  const df = { name: "Thiện pờ rồ", age: 18 }
  useEffect(() => { console.log(me.date_of_birth) }, [me])
  
  // 
  useEffect(() => {
    document.title = "Hồ sơ cá nhân";
    const data = localStorage.getItem("data") === null ? JSON.stringify(df) : localStorage.getItem("data");
    if (data != null) setMe(JSON.parse(data));
    
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/v1/centres?centre_id=${me.centre_id}`,
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
        setUser(res.data[0]);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.error(err.message);
      }
    };

    fetchData();
  }, [me.centre_id]);

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
          paddingLG: 3,
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
              <Avatar src={avatar.src} size={100} />
              <Space direction="vertical" size="small">
                <span className={classes.name}>{me.name}</span>
                <span className={classes.role}>
                  {me.role === "staff" ? "Nhân viên" : "Quản trị viên"}
                </span>
                <span className={classes.address}>
                  {user.address}, Việt Nam
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
                {me.name}
              </Descriptions.Item>
              <Descriptions.Item
                label={
                  <TextWithIcon Icon={IoCalendarOutline} text="Ngày sinh" />
                }
                style={marginSmall}
              >
                {processBirthDate(me.date_of_birth)}
              </Descriptions.Item>
              <Descriptions.Item
                label={
                  <TextWithIcon Icon={IoCallOutline} text="Số điện thoại" />
                }
                style={marginSmall}
              >
                +84 {me.phone}
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
                {me.ssn}
              </Descriptions.Item>
              <Descriptions.Item
                label={<TextWithIcon Icon={IoMailOutline} text="Email" />}
                style={marginSmall}
              >
                {me.email}
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
                {user.address}
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
                label={<TextWithIcon Icon={IoMailOutline} text="Email" />}
                style={marginSmall}
              >
                {user.email}
              </Descriptions.Item>
              <Descriptions.Item
                label={
                  <TextWithIcon
                    Icon={IoConstructOutline}
                    text={
                      me.role === "staff"
                        ? "Tên đơn vị đăng kiểm"
                        : "Cục đăng kiểm"
                    }
                  />
                }
                style={marginSmall}
              >
                {user.name}
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
              date_of_birth: values.birthDate.split("/").reverse().join("-"),
            };

            const response = await fetch(
              `http://localhost:8000/api/v1/users/update_info`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: "Bearer " + localStorage.getItem("accessToken"),
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

            const newUser = me;
            newUser.name = datas.name;
            newUser.date_of_birth = datas.date_of_birth;
            newUser.phone = datas.phone;

            setUser(newUser);

            setOpen(false);
            setSubmitting(false);
            openMessage();
            form.resetFields();
          } catch (err) {
            setSubmitting(false);
            console.error(err);
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
            name: me.name,
            birthDate: processBirthDate(me.date_of_birth),
            phone: me.phone,
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