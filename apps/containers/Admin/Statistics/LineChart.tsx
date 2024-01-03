import { Line } from "@ant-design/plots";
import { Card } from "antd";
import { useEffect, useState } from "react";

const LineChart = () => {
  const [data, setData] = useState([] as any);
  const [loading, setLoading] = useState(false);
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  useEffect(() => {
    setLoading(true);

    const getData = async () => {
      await delay(1500);

      try {
        const response = await fetch(
          "http://fall2324w3g10.int3306.freeddns.org/api/v1/inspections/stat/all_centre/count/by_year?year=2023"
        );
        if (!response.ok) throw new Error("Fail to get data");

        const tmp = await response.json();
        const tmpData: any[] = [];

        tmp.data.forEach((e) => {
          tmpData.push({
            count: e.total,
            month: e.month.toString(),
          });
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
    <Card title="Biểu đồ đăng kiểm">
      <Line
        data={data}
        xField="month"
        yField="count"
        height={300}
        xAxis={{
          tickCount: 5,
        }}
        slider={{
          start: 0.5,
          end: 1,
        }}
        meta={{
          count: {
            alias: "Số lượng",
          },
        }}
        smooth={true}
      />
    </Card>
  );
};

export default LineChart;
