import { Column } from "@ant-design/plots";
import { Card, Col, Row, Select, Skeleton, Space } from "antd";
import { useEffect, useState } from "react";
import { useAuthHeader } from "react-auth-kit";

const now = new Date();
const yearOptions = [];
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
  const authHeader = useAuthHeader();
  const [items, setItems] = useState([]);
  const [year, setYear] = useState(now.getFullYear());
  const [loading, setLoading] = useState(false);
  const [filterByOption, setFilterByOption] = useState("month");
  const [side, setSide] = useState("all");
  const [area, setArea] = useState("all");
  const [province, setProvince] = useState("all");
  const [areaOptions, setAreaOptions] = useState([]);
  const [provinceOptions, setProvinceOptions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const dataItems = [];
        const queries = [];

        if (side !== "all") queries.push(`centreSide=${side}`);
        if (area !== "all") queries.push(`centreArea=${area}`);
        if (province !== "all") queries.push(`centreAddress=${province}`);
        queries.push(`sort=${filterByOption}`);

        if (year !== "all") {
          const getYearData = await fetch(
            `${
              import.meta.env.VITE_BASE_URL
            }/api/v1/inspections/allCentresStatistics/${filterByOption}/${year}?${queries.join(
              "&"
            )}`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: authHeader(),
              },
            }
          );

          if (!getYearData.ok) {
            throw new Error("Can not get.");
          }

          const yearData = await getYearData.json();

          yearData.data.data.forEach((d) => {
            dataItems.push({
              count: d.count,
              option: d[`${filterByOption}`].toString(),
            });
          });
        } else {
          const getYearsData = await fetch(
            `${
              import.meta.env.VITE_BASE_URL
            }/api/v1/inspections/allCentresStatistics/year?${queries.join(
              "&"
            )}`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: authHeader(),
              },
            }
          );

          if (!getYearsData.ok) {
            throw new Error("Can not get.");
          }

          const yearsData = await getYearsData.json();

          yearsData.data.data.forEach((d) => {
            dataItems.push({
              count: d.count,
              year: d.year.toString(),
            });
          });
        }

        setItems(dataItems);

        setLoading(false);
      } catch (err) {
        setLoading(false);
        if (import.meta.env.VITE_ENV === "development") console.error(err);
      }
    };

    fetchData();
  }, [year, filterByOption, side, area, province]);

  useEffect(() => {
    setAreaOptions(map.get(side));

    let url = `/api/v1/utils/provinces?side=${side}`;

    if (area != "all") {
      url += `&area=${area}`;
    }

    if (province !== "all") {
      url += `&side=${side}`;
    }

    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}${url}`);

        if (!response.ok) {
          throw new Error("Can not fetch.");
        }

        const res = await response.json();

        setProvinceOptions(res.data.data.map((d) => d.province));
      } catch (err) {
        if (import.meta.env.VITE_ENV === "development") console.error(err);
      }
    };

    fetchData();
  }, [side, area, province]);

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
            disabled={year === "all" || loading}
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
              setProvince("all");
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
              setProvince("all");
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
            value={province}
            disabled={side === "all" || loading}
            onChange={(value) => {
              setProvince(value);
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
              ...provinceOptions.map((province) => {
                return { value: province, label: province };
              }),
            ]}
          />
        </Col>
      </Row>
      <Skeleton loading={loading} active paragraph={{ rows: 5 }}>
        <Column
          data={items}
          xField={year === "all" ? "year" : "option"}
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