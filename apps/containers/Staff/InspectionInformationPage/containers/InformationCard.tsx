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

import type { TabsProps } from "antd";
import InspectionContent from "./InspectionContent";

const InformationCard: React.FC = () => {
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
            <Card.Meta
                title={
                    <div style={{ marginBottom: "20px" }}>
                        Thông tin đăng kiểm
                    </div>
                }
                description={<InspectionContent />}
            />
        </Card>
    );
};

export default InformationCard;
