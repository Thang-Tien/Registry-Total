import { Column } from "@ant-design/plots";
import { Card, Select, Space } from "antd";
import { useState } from "react";

const now = new Date();

const yearOptions: number[] = [];

for (let i = now.getFullYear(); i >= 2014; i--) {
  yearOptions.push(i);
}

interface DataType{
  key: number,
  count: number,
  year: string,
}

const StaffColumnChart = (props) => {
  const [year, setYear] = useState(now.getFullYear().toString());
  const [filterByOption, setFilterByOption] = useState("month");

  const testData: DataType[] = [];
  for (let index = 0; index < 100; index++) {
    testData.push({
      key: index,
      count: index,
      year: new Date().getFullYear().toString(),
    })    
  }

  return (
    <Card
      title="Số liệu thống kê"
      style={{ height: "100%" }}
      extra={
        <Space size="middle">
          <Select
            defaultValue={year}
            onChange={(value) => {
              setYear(value);
            }}
            style={{
              width: 100,
            }}
            listHeight={200}
            options={[
              {
                value: "all",
                label: "Tất cả",
              },
              ...yearOptions.map((year) => {
                return { value: year, label: year };
              }),
            ]}
          />
          <Select
            defaultValue={filterByOption}
            onChange={(value) => {
              setFilterByOption(value);
            }}
            style={{
              width: 120,
            }}
            disabled={year === "all"}
            listHeight={200}
            options={[
              {
                value: "month",
                label: "Theo tháng",
              },
              {
                value: "season",
                label: "Theo quý",
              },
            ]}
          />
        </Space>
      }
    >
      <Column
        data={testData}
        xField={year === "all" ? "year" : "option"}
        yField="count"
        height={350}
        label={{
          position: "middle",
          style: {
            fill: "#FFFFFF",
            opacity: 0.6,
          },
        }}
        xAxis={{
          label: {
            autoHide: true,
            autoRotate: false,
          },
        }}
        meta={{
          count: {
            alias: "Số lượng",
          },
          month: {
            alias: "Tháng",
          },
        }}
      />
    </Card>
  );
};

export default StaffColumnChart;