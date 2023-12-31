import { Avatar, List, Select } from "antd";
import { useEffect, useState } from "react";
import image from "../../../../public/image/centre.png";
import Link from "next/link";
import Flex from "@/modules/ui/components/Flex";

const area1 = ["Đông Bắc Bộ", "Tây Bắc Bộ", "Đồng bằng Sông Hồng"];
const area2 = ["Bắc Trung Bộ", "Duyên hải Nam Trung Bộ", "Tây Nguyên"];
const area3 = ["Đông Nam Bộ", "Đồng bằng Sông Cửu Long"];
const map = new Map();
map.set("all", [...area1, ...area2, ...area3]);
map.set("Miền Bắc", area1);
map.set("Miền Trung", area2);
map.set("Miền Nam", area3);

interface DataType {
  id: number;
  name: string;
  address: string;
}

const CenterList = (props) => {
  const [centres, setCentres] = useState([]);
  const [side, setSide] = useState("all");
  const [area, setArea] = useState("all");
  const [province, setProvince] = useState("all");
  const [areaOptions, setAreaOptions] = useState([]);
  const [provinceOptions, setProvinceOptions] = useState([]);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("http://fall2324w3g10.int3306.freeddns.org/api/v1/centres");
        const data = await response.json();
        setCentres(data.data);

      } catch (error) {
        console.log(error);
      }
    }
    getData();
  },[centres]);

  return (
    <div>
      <Flex.Row gap="20px" style={{ marginBottom: "20px" }}>
        <Flex.Cell>
          <Select
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
        </Flex.Cell>
        <Flex.Cell>
          <Select
            showSearch
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            value={area}
            disabled={side === "all"}
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
        </Flex.Cell>
        <Flex.Cell>
          <Select
            showSearch
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            value={province}
            disabled={side === "all"}
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
        </Flex.Cell>
      </Flex.Row>
      <List
        pagination={{ align: "center" }}
        dataSource={centres}
        style={{
          backgroundColor: "white",
          borderRadius: "6px",
          padding: "16px 32px",
        }}
        renderItem={(item) => (
          <List.Item
            actions={[<Link href={`/centers/${item.centre_id}`}>Xem chi tiết</Link>]}
          >
            <List.Item.Meta
              avatar={<Avatar src={image.src} />}
              title={item.name}
              description={`#${item.address}`}
            />
          </List.Item>
        )}
      />
    </div>
  );
};
export default CenterList;
