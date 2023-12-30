"use client";

import { Card } from "antd";
import { Column, Line } from "@ant-design/plots";
import React, { useState, useEffect } from "react";

const ChartLine: React.FC = () => {
    const user = { centreID: 1, userID: 19 };
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch data from the API
        fetch(
            `${process.env.NEXT_PUBLIC_HOSTNAME}/api/v1/inspections/stat/each_centre/count/every_month/${user.centreID}`
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
                    xField="monthYear"
                    yField="count"
                    height={250}
                    xAxis={{ tickCount: 5 }}
                    smooth={true}
                    meta={{
                        count: {
                            alias: "Số lượng",
                        },
                        monthYear: {
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
