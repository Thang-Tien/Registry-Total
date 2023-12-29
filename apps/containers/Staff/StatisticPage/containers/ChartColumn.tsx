"use client";

import { Card } from "antd";
import { Column, Line } from "@ant-design/plots";
import React from "react";

const ChartColumn: React.FC = () => {
    const data = [
        {
            count: 897,
            monthYear: "8/2022",
        },
        {
            count: 942,
            monthYear: "9/2022",
        },
        {
            count: 1118,
            monthYear: "10/2022",
        },
        {
            count: 1266,
            monthYear: "11/2022",
        },
        {
            count: 1605,
            monthYear: "12/2022",
        },
        {
            count: 743,
            monthYear: "1/2023",
        },
        {
            count: 862,
            monthYear: "2/2023",
        },
        {
            count: 737,
            monthYear: "3/2023",
        },
        {
            count: 796,
            monthYear: "4/2023",
        },
        {
            count: 371,
            monthYear: "5/2023",
        },
        {
            count: 13,
            monthYear: "6/2023",
        },
        {
            count: 1,
            monthYear: "9/2023",
        },
    ];
    return (
        <div style={{ width: "calc((100vw - 256px - 64px - 20px) /3 *2)" }}>
            <Card
                title="Thống kê"
                style={{
                    width: "calc((100vw - 256px - 64px - 20px) /3 *2)",
                    height: "100%",
                }}
                bodyStyle={{ flex: "1" }}
            >
                <Column
                    data={data}
                    xField="monthYear"
                    yField="count"
                    height={350}
                    label={{
                        position: "middle",
                        style: {
                            fill: "#FFFFFF",
                            opacity: 0.6,
                        },
                    }}
                    xAxis={{
                        label: {
                            autoHide: true,
                            autoRotate: false,
                        },
                    }}
                    meta={{
                        count: {
                            alias: "Số lượng",
                        },
                        monthYear: {
                            alias: "Tháng",
                        },
                    }}
                    style={{ height: "100%" }}
                />
            </Card>
        </div>
    );
};

export default ChartColumn;
