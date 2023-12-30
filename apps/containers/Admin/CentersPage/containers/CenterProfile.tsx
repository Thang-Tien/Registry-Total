import { Card, Tabs, Button } from "antd";
import CenterInformation from "./CenterInformation";
import StaffInformation from "./StaffInformation";
import CenterInspections from "./CenterInspections";
import CenterStatistics from "./CenterStatistics";
import CenterPredict from "./CenterPredict";
import { IoArrowBackOutline } from "react-icons/io5";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const CenterProfile = (props) => {
  const centerId  = props.centerId;
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
    <Card
      style={{ maxWidth: "90rem", margin: "2.4rem auto" }}
      title={
        <Button
          type="text"
          icon={
            <IoArrowBackOutline
              style={{ fontSize: "2rem", verticalAlign: "middle" }}
            />
          }
          onClick={() => {
            router.back()
          }}
        />
      }
    >
      <Tabs defaultActiveKey="center-info" items={items} centered />
    </Card>
  );
};

export default CenterProfile;