import { Descriptions } from "antd";
import {
  IoCallOutline,
  IoPersonOutline,
  IoMailOutline,
  IoLocationOutline,
  IoIdCardOutline,
} from "react-icons/io5";
import { useEffect, useState } from "react";
import Flex from "@/modules/ui/components/Flex";
import Typography from "@/modules/ui/components/Text";

const { Item } = Descriptions;

const Owner = (props) => {
  const [owner, setOwner] = useState([] as any);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_HOSTNAME}/api/v1/cars/owner?owner_id=${props.ownerId}`,
          {  
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("accessToken"),
            },
          }
        );
        if (!response.ok) throw new Error("Fail to get data");

        const tmp = await response.json();
        setOwner(tmp.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <Descriptions
      column={props.columnProps ? props.columnProps : 1}
      style={{ padding: "1.2rem" }}
      layout="vertical"
    >
      <Item
        label={
          <Flex.Row alignItems="center" gap="6px">
            <IoPersonOutline />
            <Typography.Div content="Họ và tên" />
          </Flex.Row>
        }
      >
        {owner.name}
      </Item>
      <Item
        label={
          <Flex.Row alignItems="center" gap="6px">
            <IoLocationOutline />
            <Typography.Div content="Địa chỉ" />
          </Flex.Row>
        }
      >
        {owner.address}
      </Item>
      <Item
        label={
          <Flex.Row alignItems="center" gap="6px">
            <IoCallOutline />
            <Typography.Div content="Số điện thoại" />
          </Flex.Row>
        }
      >
        {owner.phone}
      </Item>
      <Item
        label={
          <Flex.Row alignItems="center" gap="6px">
            <IoMailOutline />
            <Typography.Div content="Email" />
          </Flex.Row>
        }
      >
        {owner.email}
      </Item>
      <Item
        label={
          <Flex.Row alignItems="center" gap="6px">
            <IoIdCardOutline />
            <Typography.Div content="Chủ sở hữu" />
          </Flex.Row>
        }
      >
        Chủ sở hữu {owner.role === "organization" ? "doanh nghiệp" : "cá nhân"}
      </Item>
    </Descriptions>
  );
};

export default Owner;
