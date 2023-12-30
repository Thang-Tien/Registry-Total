"use client";

import { Card } from "antd";
import { Column, Line, Pie } from "@ant-design/plots";
import React, { useEffect, useState } from "react";

const ChartPie: React.FC = () => {
    const user = { centreID: 1, userID: 19 };
    const [countExpired, setCountExpired] = useState<number | null>(null);
    const [countAboutToExpired, setCountAboutToExpired] = useState<
        number | null
    >(null);

    useEffect(() => {
        const fetchExpiredData = async () => {
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_HOSTNAME}/api/v1/inspections/stat/each_centre/count/expired/month/${user.centreID}`
                );
                const data = await response.json();
                if (
                    data.status === "Success" &&
                    data.data &&
                    data.data.length > 0
                ) {
                    setCountExpired(data.data[0].value);
                } else {
                    console.error(
                        "Invalid API response for expired data:",
                        data
                    );
                }
            } catch (error) {
                console.error("Error fetching expired data:", error);
            }
        };

        const fetchAboutToExpiredData = async () => {
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_HOSTNAME}/api/v1/inspections/stat/each_centre/count/about_to_expired/month/${user.centreID}`
                );
                const data = await response.json();
                if (
                    data.status === "Success" &&
                    data.data &&
                    data.data.length > 0
                ) {
                    setCountAboutToExpired(data.data[0].value);
                } else {
                    console.error(
                        "Invalid API response for about to expired data:",
                        data
                    );
                }
            } catch (error) {
                console.error("Error fetching about to expired data:", error);
            }
        };

        fetchExpiredData();
        fetchAboutToExpiredData();
    }, [user.centreID]); // user.centreID là biến phụ thuộc, thay đổi biến này thì chạy lại useEffect để fetch API

    const chartData = [
        {
            type: "Đã hết hạn",
            value: countExpired || 0, // Use the fetched value or default to 0
        },
        {
            type: "Sắp hết hạn",
            value: countAboutToExpired || 0, // Use the fetched value or default to 0
        },
        {
            type: "Mới (dự đoán)",
            value: 5,
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
                    data={chartData}
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
