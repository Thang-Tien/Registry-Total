"use client";

import React, { useState } from "react";
import {
  InboxOutlined,
  CarOutlined,
  SearchOutlined,
  LineChartOutlined,
  AppstoreOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import Flex from "@/modules/ui/components/Flex";
import AppIcon from "./icons/AppIcon";
import styles from "./index.module.scss";
import { useRouter } from "next/navigation";
import AuthenticationPage from "../Authentication";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

export type Props = {
  active: "" | "centers" | "cars" | "search" | "statistics" | "account";
};

export default function NavBar({ active }: Props) {
  const items: MenuItem[] = [
    getItem("Bảng điều khiển", "", <AppstoreOutlined />),
    getItem("Quản lý các trung tâm", "centers", <InboxOutlined />),
    getItem("Quản lý phương tiện", "cars", <CarOutlined />, [
      getItem("Tra cứu phương tiện", "cars"),
      getItem("Tải lên dữ liệu", "upload"),
    ]),
    getItem("Tra cứu đăng kiểm", "search", <SearchOutlined />),
    getItem("Thống kê", "statistics", <LineChartOutlined />),
    getItem("Tài khoản", "account", <UserOutlined />, [
      getItem("Cài đặt", "settings"),
      getItem("Đăng xuất", "logout"),
    ]),
  ];

  const rootSubmenuKeys = ["cars", "account"];

  const [openKeys, setOpenKeys] = useState([""]);

  const onOpenChange: MenuProps["onOpenChange"] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
    console.log(latestOpenKey + " " + keys);
  };

  const router = useRouter();

  const onClick: MenuProps["onClick"] = (e) => {
    router.prefetch(`/${e.keyPath[0]}`);
    router.push(`/${e.keyPath[0]}`);
  };
  return (
    <Flex.Col gap="50px" style={{ maxWidth: "256px" }}>
      <button className={styles.button}>
        <AppIcon />
      </button>

      <Menu
        defaultSelectedKeys={[active]}
        onClick={onClick}
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        style={{ width: 256 }}
        items={items}
      />
    </Flex.Col>
  );
}
