import { Pie } from "@ant-design/plots";
import { Card } from "antd";
import { useEffect, useState } from "react";

const CenterPredict = (props) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([] as any);
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  useEffect(() => {
    setLoading(true);

    const getData = async () => {
      await delay(1500);

      let year = new Date().getFullYear();
      year = 2023;
      let month = new Date().getMonth();
      month = 12;
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_HOSTNAME}/api/v1/inspections/stat/${props.centerId}/count/every_month?year=${year}`,
          {  
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("accessToken"),
            },
          }
        );
        if (!response.ok) throw new Error("Fail to get data");
        let tmp = await response.json();
        let expired = 0,
          newly = Math.round(Math.random() * 50),
          abExpired = 0;

        tmp.data.forEach((e) => {
          if (e.month <= month) {
            console.log(e.count);
            if (month - e.month >= 8) expired += e.total;
            else if (month - e.month == 0) newly += e.total;
            else if (month - e.month <= 2) abExpired += e.total;
          }
        });
        const tmpData: any[] = [];
        tmpData.push({
          type: "Đã hết hạn",
          value: expired,
        });
        tmpData.push({
          type: "Sắp hết hạn",
          value: abExpired,
        });
        tmpData.push({
          type: "Mới (dự đoán)",
          value: newly,
        });
        setData(tmpData);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <Card title="Trong tháng này" loading={loading}>
      <Pie
        appendPadding={10}
        data={data}
        angleField="value"
        colorField="type"
        radius={0.75}
        legend={{
          position: "right",
        }}
        label={{
          type: "inner",
          content: "{value}",
        }}
        interactions={[
          {
            type: "element-selected",
          },
          {
            type: "element-active",
          },
        ]}
        height={props.height}
      />
    </Card>
  );
};

export default CenterPredict;
