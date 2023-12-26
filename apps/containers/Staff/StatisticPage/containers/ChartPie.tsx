"use client";

import { Card } from "antd";
import { Column, Line, Pie } from "@ant-design/plots";
import React from "react";

const ChartPie: React.FC = () => {
    const data = [
        {
            type: "Đã hết hạn",
            value: 6226,
        },
        {
            type: "Sắp hết hạn",
            value: 230,
        },
        {
            type: "Mới (dự đoán)",
            value: 237,
        },
    ];
    return (
        <div style={{ width: "calc((100vw - 256px - 64px - 60px) /3 )" }}>
            <Card
                title="Trong tháng này"
                style={{ width: "calc((100vw - 256px - 64px - 60px)/3)" }}
            >
                <Pie
                    appendPadding={10}
                    data={data}
                    angleField="value"
                    colorField="type"
                    radius={0.75}
                    label={{
                        type: "inner",
                        content: "{value}",
                    }}
                    interactions={[
                        {
                            type: "element-selected",
                        },
                        {
                            type: "element-active",
                        },
                    ]}
                    height={250}
                />
            </Card>
        </div>
    );
};

export default ChartPie;
