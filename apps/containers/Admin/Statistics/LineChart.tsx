import { Line } from "@ant-design/plots";
import { Card } from "antd";

const LineChart = () => {
  const data = [
    {
      count: 897,
      monthYear: "8/2022",
    },
    {
      count: 942,
      monthYear: "9/2022",
    },
    {
      count: 1118,
      monthYear: "10/2022",
    },
    {
      count: 1266,
      monthYear: "11/2022",
    },
    {
      count: 1605,
      monthYear: "12/2022",
    },
    {
      count: 743,
      monthYear: "1/2023",
    },
    {
      count: 862,
      monthYear: "2/2023",
    },
    {
      count: 737,
      monthYear: "3/2023",
    },
    {
      count: 796,
      monthYear: "4/2023",
    },
    {
      count: 371,
      monthYear: "5/2023",
    },
    {
      count: 13,
      monthYear: "6/2023",
    },
    {
      count: 1,
      monthYear: "9/2023",
    },
  ];

  return (
    <Card title="Biểu đồ đăng kiểm">
      <Line
        data={data}
        xField="monthYear"
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
