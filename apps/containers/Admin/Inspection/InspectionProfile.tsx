import { Collapse, Descriptions } from "antd";
import {
  IoCallOutline,
  IoCalendarOutline,
  IoPersonOutline,
  IoMailOutline,
  IoConstructOutline,
  IoShieldCheckmarkOutline,
  IoSyncOutline,
  IoCheckmark,
} from "react-icons/io5";
import Car from "../CarsPage/containers/Car";
import Owner from "../CarsPage/containers/Owner";
import Specification from "../CarsPage/containers/Specification";
import Flex from "@/modules/ui/components/Flex";
import Typography from "@/modules/ui/components/Text";
import { useEffect, useState } from "react";

const { Item } = Descriptions;

const InspectionProfile = (props) => {
  const [inspection, setInsepction] = useState({
    inspection_number: "",
    inspection_date: "2020-08-05T17:00:00.000Z",
    expired_date: "2020-08-05T17:00:00.000Z",
    first_time: "",
  });
  const [data, setData] = useState({
    number_plate: "",
    registration_number: "",
    registration_date: "2020-08-05T17:00:00.000Z",
    type: "",
    brand: "",
    model_code: "",
    engine_number: "",
    chassis_number: "",
    manufactured_year: "",
    manufactured_country: "",
    purpose: "",
    recovered: "",
  });
  const [ownerId, setOwnerId] = useState(-1);
  const [user, setUser] = useState([] as any);
  const [center, setCenter] = useState([] as any);
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  function formatDate(s: string) {
    let value = s.split("-");
    let day = value[2].split("T")[0];
    return `${day}/${value[1]}/${value[0]}`;
  }

  useEffect(() => {
    document.title = "Thông tin đăng kiểm";
    console.log(inspection);
  }, [inspection]);

  useEffect(() => {
    const getData = async () => {
      try {
        setInsepction(props.data);
        console.log(props.data);

        let response = await fetch(
          `${process.env.NEXT_PUBLIC_HOSTNAME}/api/v1/cars?car_id=${props.data.car_id}`,
          {  
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("accessToken"),
            },
          }
        );
        if (!response.ok) throw new Error("Fail to get data");

        let tmpData = await response.json();
        setData(tmpData.data[0]);
        setOwnerId(tmpData.data[0].owner_id);

        response = await fetch(
          `${process.env.NEXT_PUBLIC_HOSTNAME}/api/v1/users/?user_id=${props.data.user_id}`,
          {  
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("accessToken"),
            },
          }
        );
        if (!response.ok) throw new Error("Fail to get data");

        tmpData = await response.json();
        setUser(tmpData.data[0]);

        response = await fetch(
          `${process.env.NEXT_PUBLIC_HOSTNAME}/api/v1/centres?centre_id=${props.data.centre_id}`,
          {  
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("accessToken"),
            },
          }
        );
        if (!response.ok) throw new Error("Fail to get data");

        tmpData = await response.json();
        setCenter(tmpData.data[0]);
        console.log("???");
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const items = [
    {
      key: "owner",
      label: "Thông tin chủ sở hữu",
      children: <Owner ownerId={ownerId} />,
    },
    {
      key: "car",
      label: "Phương tiện",
      children: <Car data={data} />,
    },
    {
      key: "specification",
      label: "Thông số kĩ thuật",
      children: <Specification specification={data} />,
    },
    {
      key: "inspection",
      label: "Thông tin đăng kiểm",
      children: (
        <Descriptions
          column={1}
          style={{ padding: "1.2rem" }}
          layout={"horizontal"}
        >
          <Item
            label={
              <Flex.Row alignItems="center" gap="10px">
                <IoShieldCheckmarkOutline />
                <Typography.Div content="Số đăng kiểm" />
              </Flex.Row>
            }
          >
            {inspection.inspection_number}
          </Item>
          <Item
            label={
              <Flex.Row alignItems="center" gap="10px">
                <IoCalendarOutline />
                <Typography.Div content="Ngày đăng kiểm" />
              </Flex.Row>
            }
          >
            {formatDate(inspection.inspection_date)}
          </Item>
          <Item
            label={
              <Flex.Row alignItems="center" gap="10px">
                <IoCalendarOutline />
                <Typography.Div content="Hiệu lực đến ngày" />
              </Flex.Row>
            }
          >
            {formatDate(inspection.expired_date)}
          </Item>
          <Item
            label={
              <Flex.Row alignItems="center" gap="10px">
                <IoConstructOutline />
                <Typography.Div content="Đơn vị kiểm định" />
              </Flex.Row>
            }
          >
            {center.name}
          </Item>
          <Item
            label={
              <Flex.Row alignItems="center" gap="10px">
                <IoCallOutline />
                <Typography.Div content="Số điện thoại" />
              </Flex.Row>
            }
          >
            {center.phone}
          </Item>
          <Item
            label={
              <Flex.Row alignItems="center" gap="10px">
                <IoMailOutline />
                <Typography.Div content="Email" />
              </Flex.Row>
            }
          >
            {center.email}
          </Item>
          <Item
            label={
              <Flex.Row alignItems="center" gap="10px">
                <IoPersonOutline />
                <Typography.Div content="Nhân viên đăng kiểm" />
              </Flex.Row>
            }
          >
            {user.name}
          </Item>
          {inspection.first_time && (
            <Item
              label={
                <Flex.Row alignItems="center" gap="10px">
                  <IoSyncOutline />
                  <Typography.Div content="Đăng kiểm lần đầu" />
                </Flex.Row>
              }
            >
              <div>
                <IoCheckmark style={{ color: "#379237" }} />
              </div>
            </Item>
          )}
        </Descriptions>
      ),
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Collapse
        items={items}
        defaultActiveKey="inspection"
        accordion
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default InspectionProfile;
