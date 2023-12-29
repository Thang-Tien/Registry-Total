"use client";

import { Card, Tabs, Button } from "antd";
import React from "react";
import {
    ArrowLeftOutlined,
    UserOutlined,
    CarOutlined,
    SettingOutlined,
    HistoryOutlined,
} from "@ant-design/icons";
import CarOwner from "./CarOwner";
import CarInformation from "./CarInformation";

import type { TabsProps } from "antd";
import CarParameter from "./CarParameter";
import InformationHistory from "./InspectionHistory";

const InformationCard: React.FC = () => {
    const onChange = (key: string) => {
        console.log(key);
    };
    const items: TabsProps["items"] = [
        {
            key: "1",
            label: (
                <>
                    <UserOutlined /> Thông tin chủ xe
                </>
            ),
            children: <CarOwner />,
        },
        {
            key: "2",
            label: (
                <>
                    <CarOutlined /> Phương tiện
                </>
            ),
            children: <CarInformation />,
        },
        {
            key: "3",
            label: (
                <>
                    <SettingOutlined /> Thông số kỹ thuật
                </>
            ),
            children: <CarParameter />,
        },
        {
            key: "4",
            label: (
                <>
                    <HistoryOutlined /> Lịch sử đăng kiểm
                </>
            ),
            children: <InformationHistory />,
        },
    ];
    return (
        <Card
            style={{
                width: "60%",
                borderRadius: 6,
                margin: "auto",
                marginTop: 50,
                marginBottom: 50,
            }}
            title={
                <Button
                    type="text"
                    icon={<ArrowLeftOutlined />}
                    onClick={() => console.log("Back")}
                />
            }
        >
            <Tabs
                defaultActiveKey="1"
                items={items}
                onChange={onChange}
                centered
            />
        </Card>
    );
};

export default InformationCard;
