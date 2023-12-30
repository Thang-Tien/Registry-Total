"use client";

import { Card, Button } from "antd";
import React from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";
import type { ReactNode } from "react";
import InspectionContent from "./InspectionContent";

type InformationCardProps = {
    inspectionId?: string;
    children?: ReactNode;
};

const InformationCard: React.FC<InformationCardProps> = ({
    inspectionId,
    children,
}) => {
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
                    onClick={() => console.log("back")}
                />
            }
        >
            <Card.Meta
                title={
                    <div style={{ marginBottom: "20px" }}>
                        Thông tin đăng kiểm
                    </div>
                }
                description={<InspectionContent inspectionId={inspectionId} />}
            />
            {children}
        </Card>
    );
};

export default InformationCard;
