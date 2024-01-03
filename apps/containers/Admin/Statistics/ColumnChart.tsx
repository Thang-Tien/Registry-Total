import { Column } from "@ant-design/plots";
import { Card, Col, Row, Select, Skeleton, Space } from "antd";
import { useEffect, useState } from "react";

const now = new Date();
const yearOptions: any[] = [];
for (let i = now.getFullYear(); i >= 2014; i--) {
  yearOptions.push(i);
}

const area1 = ["Đông Bắc Bộ", "Tây Bắc Bộ", "Đồng bằng Sông Hồng"];
const area2 = ["Bắc Trung Bộ", "Duyên hải Nam Trung Bộ", "Tây Nguyên"];
const area3 = ["Đông Nam Bộ", "Đồng bằng Sông Cửu Long"];
const map = new Map();
map.set("all", [...area1, ...area2, ...area3]);
map.set("Miền Bắc", area1);
map.set("Miền Trung", area2);
map.set("Miền Nam", area3);

const ColumnChart = () => {
  const [year, setYear] = useState(now.getFullYear());
  const [loading, setLoading] = useState(false);
  const [filterByOption, setFilterByOption] = useState("month");
  const [data, setData] = useState([] as any);
  const [side, setSide] = useState("all");
  const [area, setArea] = useState("all");
  const [address, setAddress] = useState("all");
  const [areaOptions, setAreaOptions] = useState([]);
  const [addressOptions, setAddressOptions] = useState([] as any);
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      await delay(1500);

      try {
        let url = `?year=${year}`;
        if (side != "all") url += `&side=${side}`;
        if (area != "all") url += `&area=${area}`;
        if (address != "all") url += `&address=${address}`;
        const response = await fetch(
          `http://fall2324w3g10.int3306.freeddns.org/api/v1/inspections/stat/all_centre/count/every_month${url}`
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
  }, [year, filterByOption, side, area, address]);

  useEffect(() => {
    setLoading(true);
    setAreaOptions(map.get(side));
    let url = "/api/v1/centres";

    if (side != "all") url += `?side=${side}`;
    if (area != "all") url += `&area=${area}`;
    if (address != "all") url += `&address=${address}`;

    const changeData = async () => {
      await delay(1000);
      try {
        const response = await fetch(
          `http://fall2324w3g10.int3306.freeddns.org${url}`
        );
        if (!response.ok) throw new Error("Fail to get data");

        const tmp = await response.json();

        let tmpData: any[] = [];
        tmp.data.forEach((e) => {
          tmpData.push(e.address);
        });
        tmpData = Array.from(new Set(tmpData));

        setAddressOptions(tmpData);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    changeData();
    console.log(url);
  }, [side, area, address]);

  return (
    <Card
      title="Số liệu thống kê"
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
      <Row gutter={[20, 20]} style={{ marginBottom: "2.4rem" }}>
        <Col>
          <Select
            disabled={loading}
            value={side}
            onChange={(value) => {
              setSide(value);
              setArea("all");
              setAddress("all");
            }}
            style={{
              width: 120,
            }}
            listHeight={200}
            options={[
              {
                value: "all",
                label: "Miền",
              },
              {
                value: "Miền Bắc",
                label: "Miền Bắc",
              },
              {
                value: "Miền Trung",
                label: "Miền Trung",
              },
              {
                value: "Miền Nam",
                label: "Miền Nam",
              },
            ]}
          />
        </Col>
        <Col>
          <Select
            value={area}
            disabled={side === "all" || loading}
            onChange={(value) => {
              setArea(value);
              setAddress("all");
            }}
            style={{
              width: 200,
            }}
            listHeight={200}
            options={[
              {
                value: "all",
                label: "Khu vực",
              },
              ...areaOptions.map((area) => {
                return { value: area, label: area };
              }),
            ]}
          />
        </Col>
        <Col>
          <Select
            value={address}
            disabled={area === "all" || loading}
            onChange={(value) => {
              setAddress(value);
            }}
            style={{
              width: 200,
            }}
            listHeight={200}
            options={[
              {
                value: "all",
                label: "Tỉnh/Thành phố",
              },
              ...addressOptions.map((address) => {
                return { value: address, label: address };
              }),
            ]}
          />
        </Col>
      </Row>
      <Skeleton loading={loading} active paragraph={{ rows: 5 }}>
        <Column
          data={data}
          xField="option"
          yField="count"
          height={300}
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
      </Skeleton>
    </Card>
  );
};

export default ColumnChart;
