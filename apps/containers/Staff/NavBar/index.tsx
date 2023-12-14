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
        | "inspection"
        | "inspection/create"
        | "cars/search"
        | "statistics"
        | "account";
};

export default function NavBar({ active }: Props) {
    const items: MenuItem[] = [
        // <AppstoreOutlined />, <InboxOutlined />, <CarOutlined />, <SearchOutlined />, <LineChartOutlined />, <UserOutlined /> are icons
        getItem("Bảng điều khiển", "", <AppstoreOutlined />),
        getItem("Quản lý đăng kiểm", "inspection", <CarOutlined />, [
            getItem("Tất cả đăng kiểm", "inspection/all"),
            getItem("Đăng kiểm của tôi", "inspection/me"),
            getItem("Tra cứu đăng kiểm", "inspection/search"),
        ]),
        getItem("Tạo đăng kiểm", "inspection/create", <PlusCircleOutlined />),
        getItem("Tra cứu phương tiện", "cars/search", <SearchOutlined />),
        getItem("Thống kê", "statistics", <LineChartOutlined />),
        getItem("Tài khoản", "account", <UserOutlined />, [
            getItem("Cài đặt", "settings"),
            getItem("Đăng xuất", "logout"),
        ]),
    ];

    // Array contain key of root submenu
    const rootSubmenuKeys = ["cars", "account"];

    const [openKeys, setOpenKeys] = useState([""]);

    const onOpenChange: MenuProps["onOpenChange"] = (keys) => {
        // Boolean indicate if closing a submenu
        const isSubMenuOpen = keys.length > openKeys.length;

        setOpenKeys(keys);

        // If closing a submenu, and there are still open submenus, prevent closing others
        if (!isSubMenuOpen && keys.length > 0) {
            setOpenKeys((prevOpenKeys) => [...prevOpenKeys, ...keys]);
        }

        console.log(keys);
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
