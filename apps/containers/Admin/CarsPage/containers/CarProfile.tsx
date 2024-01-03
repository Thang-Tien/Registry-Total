import {
  IoArrowBackOutline,
  IoBuildOutline,
  IoCarOutline,
  IoRocketOutline,
} from "react-icons/io5";
import Owner from "./Owner";
import Car from "./Car";
import Specification from "./Specification";
import Flex from "@/modules/ui/components/Flex";
import Typography from "@/modules/ui/components/Text";
import { useEffect, useState } from "react";
import DataNotFound from "@/modules/ui/components/UI/DataNotFound";
import { Button, Card, Tabs } from "antd";
import { useRouter } from "next/navigation";
import NavBar from "../../NavBar";

const CarProfile = (props) => {
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
  const [loading, setLoading] = useState(false);
  const [ownerId, setOwnerId] = useState(-1);
  const [inspected, setInspected] = useState(0);
  const router = useRouter();
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  useEffect(() => {
    document.title = "Thông tin phương tiện";
    setLoading(true);

    const getData = async () => {
      await delay(1500);
      try {
        const response = await fetch(
          `http://fall2324w3g10.int3306.freeddns.org/api/v1/cars?car_id=${props.carId}`
        );
        if (!response.ok) throw new Error("Fail to get data");

        const tmp = await response.json();
        setData(tmp.data[0]);
        setInspected(tmp.data[0].inspected);
        setOwnerId(tmp.data[0].owner_id);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    getData();
  }, []);

  const items = [
    {
      key: "owner",
      label: (
        <Flex.Row alignItems="center" gap="6px">
          <IoRocketOutline />
          <Typography.Div content="Thông tin chủ xe" />
        </Flex.Row>
      ),
      children: <Owner ownerId={ownerId} columnProps={2} />,
    },
    {
      key: "car",
      label: (
        <Flex.Row alignItems="center" gap="6px">
          <IoCarOutline />
          <Typography.Div content="Phương tiện" />
        </Flex.Row>
      ),
      children: <Car data={data} />,
    },
    {
      key: "specification",
      label: (
        <Flex.Row alignItems="center" gap="6px">
          <IoBuildOutline />
          <Typography.Div content="Thông số kỹ thuật" />
        </Flex.Row>
      ),
      children: inspected ? (
        <Specification specification={data} columnProps={2} />
      ) : (
        <DataNotFound text="Phương tiện chưa được đăng kiểm :(" />
      ),
    },
  ];

  return (
    <div>
      <Flex.Row style={{ height: "100vh", width: "100vw" }} padding={"0"}>
        <NavBar active="cars" openMenu="carOpen" />"
        <div
          style={{
            background: "#e4e4e7",
            width: "calc(100vw - 256px - 8px)",
            overflow: "auto",
            display: "flex",
            justifyContent: "center",
            padding: "100px 0",
          }}
        >
          <Flex.Cell style={{ marginBottom: "100px" }}>
            <Card
              loading={loading}
              title={
                <Button
                  type="text"
                  icon={
                    <IoArrowBackOutline
                      style={{ fontSize: "2rem", verticalAlign: "middle" }}
                    />
                  }
                  onClick={() => {
                    router.back();
                  }}
                />
              }
              style={{
                backgroundColor: "white",
                borderRadius: "6px",
                width: "800px",
              }}
            >
              <Tabs defaultActiveKey="car" items={items} centered={true} />
            </Card>
          </Flex.Cell>
        </div>
      </Flex.Row>
    </div>
  );
};

export default CarProfile;
