import React from "react";
import { Timeline } from "antd";
import { CheckOutlined, CloseCircleOutlined } from "@ant-design/icons";

const InformationHistory: React.FC = () => {
    const data = [
        {
            dot: <CheckOutlined />,
            color: "green",
            label: "25-12-2023",
            children: "Đăng kiểm lần thứ 1",
        },
        {
            dot: <CloseCircleOutlined />,
            color: "red",
            label: "25-12-2024",
            children: "Hết hạn đăng kiểm lần thứ 1",
        },
    ]; // Replace this with your actual data

    return (
        <>
            {data.length > 0 ? (
                <Timeline items={data} mode="left" style={{ marginTop: 20 }}>
                    {/* Render your timeline items here based on the data */}
                </Timeline>
            ) : (
                <text style={{ fontWeight: "bold" }}>
                    Phương tiện chưa được đăng kiểm
                </text>
            )}
        </>
    );
};

export default InformationHistory;
