import { Column } from "@ant-design/plots";
import { Card, Select, Space } from "antd";
import { useEffect, useState } from "react";

const now = new Date();

const yearOptions: number[] = [];
for (let i = now.getFullYear(); i >= 2014; i--) {
  yearOptions.push(i);
}

const ColumnChartAdmin = (props) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([] as any);
  const [year, setYear] = useState(now.getFullYear().toString());
  const [filterByOption, setFilterByOption] = useState("month");
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  useEffect(() => {
    setLoading(true);

    const getData = async () => {
      await delay(1500);

      try {
        const response = await fetch(
          `http://fall2324w3g10.int3306.freeddns.org/api/v1/inspections/stat/${props.centerId}/count/every_month?year=${year}`
        );
        if (!response.ok) throw new Error("Fail to get data");

        const tmp = await response.json();
        const tmpData: any[] = [];
        let value = [0, 0, 0, 0, 0];
        let ok = 0;
        tmp.data.forEach((e) => {
          if (filterByOption === "month") {
            tmpData.push({
              count: e.total,
              option: e.month.toString(),
            });
          } else (value[Math.ceil(e.month / 4)] += e.total), (ok = 1);
        });
        if (ok)
          for (let index = 1; index < 5; index++)
            tmpData.push({
              count: value[index],
              option: index.toString(),
            });
        console.log(tmpData);
        setData(tmpData);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    getData();
  }, [year, filterByOption]);

  return (
    <Card
      title="Số liệu thống kê"
      loading={loading}
      style={{ height: "100%" }}
      extra={
        <Space size="middle">
          <Select
            disabled={loading}
            defaultValue={year}
            onChange={(value) => {
              setYear(value);
            }}
            style={{
              width: 100,
            }}
            listHeight={200}
            options={[
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
            disabled={loading}
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
        data={data}
        xField="option"
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

export default ColumnChartAdmin;
