"use client";

import React, { useState } from "react";
import {
    PlusCircleOutlined,
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
    active:
        | ""
        | "dashboards"
        | "inspections/all"
        | "inspections/me"
        | "inspections/search"
        | "inspections/create"
        | "cars/search"
        | "statistics"
        | "settings/profile";
    openMenu: "" | "inspections" | "settings" | string;
};

export default function NavBar({ active, openMenu }: Props) {
    const items: MenuItem[] = [
        // <AppstoreOutlined />, <InboxOutlined />, <CarOutlined />, <SearchOutlined />, <LineChartOutlined />, <UserOutlined /> are icons
        getItem("Bảng điều khiển", "dashboards", <AppstoreOutlined />),
        getItem("Quản lý đăng kiểm", "inspections", <CarOutlined />, [
            getItem("Tất cả đăng kiểm", "inspections/all"),
            getItem("Đăng kiểm của tôi", "inspections/me"),
            getItem("Tra cứu đăng kiểm", "inspections/search"),
        ]),
        getItem("Tạo đăng kiểm", "inspections/create", <PlusCircleOutlined />),
        getItem("Tra cứu phương tiện", "cars/search", <SearchOutlined />),
        getItem("Thống kê", "statistics", <LineChartOutlined />),
        getItem("Tài khoản", "settings", <UserOutlined />, [
            getItem("Cài đặt", "settings/profile"),
            getItem("Đăng xuất", "auth"),
        ]),
    ];

    const clearLocalStorage = () => {
        localStorage.clear();
    };
    // Array contain key of root submenu
    const rootSubmenuKeys = ["inspections", "settings"];

    const [open, setOpen] = useState(false);
    const [openKeys, setOpenKeys] = useState([openMenu]);

    const onOpenChange: MenuProps["onOpenChange"] = (keys) => {
        // Boolean indicate if closing a submenu
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
        const selectedKey = e.keyPath[0];

        // Prefetch and navigate to the selected key
        router.prefetch(`/${selectedKey}`);
        router.push(`/${selectedKey}`);

        // Check if the selected key is "auth" and call clearLocalStorage
        if (selectedKey === "auth") {
            clearLocalStorage();
        }
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
