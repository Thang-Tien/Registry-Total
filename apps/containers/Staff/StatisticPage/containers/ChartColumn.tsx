"use client";

import { Card } from "antd";
import { Column, Line } from "@ant-design/plots";
import React, { useEffect, useState } from "react";

const ChartColumn: React.FC = () => {
    const user = { centreID: 1, userID: 19 };
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch data from the API
        fetch(
            `${process.env.NEXT_PUBLIC_HOSTNAME}/api/v1/inspections/stat/each_centre/count/last_twelve_months/${user.centreID}`
        )
            .then((response) => response.json())
            .then((result) => {
                if (result.status === "Success") {
                    const reversedData = result.data.reverse();
                    setData(reversedData);
                } else {
                    console.error("Failed to fetch data from the API");
                }
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, [user.centreID]); // user.centreID là biến phụ thuộc, thay đổi biến này thì chạy lại useEffect để fetch API
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
