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
import { Menu, Modal, Result } from "antd";
import Flex from "@/modules/ui/components/Flex";
import AppIcon from "./icons/AppIcon";
import styles from "./index.module.scss";
import { useRouter } from "next/navigation";

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
  active: "" | "centers" | "cars" | "inspection" | "statistics" | "account";
};

export default function NavBar({ active }: Props) {
  const items: MenuItem[] = [
    getItem("Bảng điều khiển", "", <AppstoreOutlined />),
    getItem("Quản lý các trung tâm", "centers", <InboxOutlined />),
    getItem("Quản lý phương tiện", "carsssss", <CarOutlined />, [
      getItem("Tra cứu phương tiện", "cars"),
      getItem("Tải lên dữ liệu", "upload"),
    ]),
    getItem("Tra cứu đăng kiểm", "inspection", <SearchOutlined />),
    getItem("Thống kê", "statistics", <LineChartOutlined />),
    getItem("Tài khoản", "account", <UserOutlined />, [
      getItem("Cài đặt", "settings"),
      getItem("Đăng xuất", "logout"),
    ]),
  ];

  const rootSubmenuKeys = ["carsssss", "account"];

  const [open, setOpen] = useState(false);

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
    if (e.keyPath[0] === "upload") {
      setOpen(true);
      return
    }
    router.prefetch(`/${e.keyPath[0]}`);
    router.push(`/${e.keyPath[0]}`);
  };
  return (
    <div>
      <Modal
        title="Tải lên dữ liệu xe đã đăng kí"
        open={open}
        onOk={() => {
          setOpen(false);
        }}
        onCancel={() => {
          setOpen(false);
        }}
        footer={[]}
      >
        <Result
          status="500"
          title="500"
          subTitle="Chức năng này tạm thời bị khóa. Vui lòng thử lại sau."
          style={{ paddingBottom: 0 }}
        />
      </Modal>
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
    </div>
  );
}
