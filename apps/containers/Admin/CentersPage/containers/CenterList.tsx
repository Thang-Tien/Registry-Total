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
  const [loading, setLoading] = useState(false);
  const [centres, setCentres] = useState([]);
  const [side, setSide] = useState("all");
  const [area, setArea] = useState("all");
  const [address, setAddress] = useState("all");
  const [areaOptions, setAreaOptions] = useState([]);
  const [addressOptions, setAddressOptions] = useState([] as any);
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  useEffect(() => {
    setLoading(true);
    props.setLoading(true);
    const getData = async () => {
      await delay(2000);
      try {
        const response = await fetch(
          "http://fall2324w3g10.int3306.freeddns.org/api/v1/centres"
        );
        if(!response.ok) throw new Error("Fail to get data");

        const tmp = await response.json();
        let tmpData: any[] = [];
        tmp.data.forEach(e => {
          tmpData.push(e.address);
        });
        tmpData = Array.from(new Set(tmpData));

        setCentres(tmp.data);
        props.setAddress(tmpData);
        setLoading(false);
        props.setLoading(false);
      } catch (error) {
        props.setLoading(false);
        setLoading(false);
        console.log(error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    setLoading(true);
    props.setLoading(true);
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
        tmp.data.forEach(e => {
          tmpData.push(e.address);
        });
        tmpData = Array.from(new Set(tmpData));

        setAddressOptions(tmpData);
        setCentres(tmp.data);
        setLoading(false);
        props.setLoading(false);
      } catch (error) {
        props.setLoading(false);
        setLoading(false);
        console.log(error);
      }
    };
    changeData();
    console.log(url);
  }, [side, area, address]);

  return (
    <div>
      <Flex.Row gap="20px" style={{ marginBottom: "20px" }}>
        <Flex.Cell>
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
        </Flex.Cell>
        <Flex.Cell>
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
        </Flex.Cell>
        <Flex.Cell>
          <Select
            showSearch
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            value={address}
            disabled={side === "all" || area === "all" || loading}
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
        </Flex.Cell>
      </Flex.Row>
      <List
        pagination={{ align: "center" }}
        dataSource={centres}
        loading={loading}
        style={{
          backgroundColor: "white",
          borderRadius: "6px",
          padding: "16px 32px",
        }}
        renderItem={(item: any) => (
          <List.Item
            actions={[
              <Link href={`/centers/${item.centre_id}`}>Xem chi tiết</Link>,
            ]}
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
