"use client";

import { Card } from "antd";
import { Column, Line } from "@ant-design/plots";
import React from "react";

const ChartLine: React.FC = () => {
    const data = [
        {
            month: "1/2023",
            value: 25,
        },
        {
            month: "2/2023",
            value: 12,
        },
        {
            month: "3/2023",
            value: 9,
        },
        {
            month: "4/2023",
            value: 15,
        },
        {
            month: "5/2023",
            value: 8,
        },
        {
            month: "6/2023",
            value: 21,
        },
        {
            month: "7/2023",
            value: 7,
        },
        {
            month: "8/2023",
            value: 17,
        },
        {
            month: "9/2023",
            value: 13,
        },
    ];

    return (
        <div style={{ width: "calc((100vw - 256px - 64px - 20px) /3 *2)" }}>
            <Card
                title="Biểu đồ đăng kiểm"
                style={{
                    width: "calc((100vw - 256px - 64px - 20px) /3 *2)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                }}
                bodyStyle={{ flex: "1" }}
            >
                <Line
                    data={data}
                    xField="month"
                    yField="value"
                    height={250}
                    xAxis={{ tickCount: 5 }}
                    smooth={true}
                    meta={{
                        value: {
                            alias: "Số lượng",
                        },
                        month: {
                            alias: "Tháng",
                        },
                    }}
                    slider={{ start: 0.2, end: 1 }}
                />
            </Card>
        </div>
    );
};

export default ChartLine;
