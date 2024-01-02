import { Card, Tabs, Button } from "antd";
import CenterInformation from "./CenterInformation";
import StaffInformation from "./StaffInformation";
import CenterInspections from "./CenterInspections";
import CenterStatistics from "./CenterStatistics";
import CenterPredict from "./CenterPredict";
import { IoArrowBackOutline } from "react-icons/io5";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Flex from "@/modules/ui/components/Flex";
import NavBar from "../../NavBar";

const CenterProfile = (props) => {
  const centerId = props.centerId;
  const router = useRouter();

  useEffect(() => {
    document.title = "Xem trung tâm";
  }, []);

  const items = [
    {
      key: "center-info",
      label: `Thông tin trung tâm`,
      children: (
        <CenterInformation centerId={centerId} setError={props.setError} />
      ),
    },
    {
      key: "staff-info",
      label: `Thông tin nhân viên`,
      children: <StaffInformation centerId={centerId} />,
    },
    {
      key: "inspections",
      label: `Tất cả đăng kiểm`,
      children: <CenterInspections centerId={centerId} />,
    },
    {
      key: "statistics",
      label: `Thống kê`,
      children: <CenterStatistics centerId={centerId} />,
    },
    {
      key: "this-month",
      label: `Trong tháng này`,
      children: <CenterPredict centerId={centerId} />,
    },
  ];

  return (
    <div>
      <Flex.Row style={{ height: "100vh", width: "100vw" }} padding={"0"}>
        <NavBar active="centers" openMenu="" />"
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
          <Flex.Cell style={{marginBottom: "100px"}}>
            <Card
              style={{  width: "1200px"}}
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
            >
              <Tabs defaultActiveKey="center-info" items={items} centered />
            </Card>
          </Flex.Cell>
        </div>
      </Flex.Row>
    </div>
  );
};

export default CenterProfile;
