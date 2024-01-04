"use client";

import { Card } from "antd";
import { Column } from "@ant-design/plots";
import React, { useEffect, useState } from "react";

const ChartLine: React.FC = () => {
    const df = { name: "Thiện pờ rồ", age: 18 };
    const [user, setUser] = useState({
        user_id: "",
        centre_id: "",
        name: "",
        address: "",
        phone: 0,
        email: "",
        date_of_birth: "",
    });
    const [data, setData] = useState([]);
    const delay = (ms) =>
        new Promise((res) => {
            setTimeout(res, ms);
            console.log("delayed");
        });

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            delay(2000); // Assuming delay is a function that returns a promise
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_HOSTNAME}/api/v1/inspections/stat/each_centre/count/last_twelve_months/${user.centre_id}`
                );

                const data = await response.json();

                if (isMounted && response.ok) {
                    // Assuming the API response contains the count in the 'total' field
                    const reversedData = data.data.reverse();
                    setData(reversedData);
                    console.log("data: ", data.data);
                } else if (!isMounted) {
                    console.log(
                        "Component is unmounted, so skipping state update."
                    );
                } else {
                    console.error("Failed to fetch data from API:", data.error);
                }
            } catch (error) {
                if (isMounted) {
                    console.error("Error fetching data:", error);
                } else {
                    console.log(
                        "Component is unmounted, so skipping error handling."
                    );
                }
            }
        };

        const dataFromLocalStorage =
            localStorage.getItem("data") === null
                ? JSON.stringify(df)
                : localStorage.getItem("data");

        if (dataFromLocalStorage !== null) {
            setUser(JSON.parse(dataFromLocalStorage));
        }

        console.log("Centre_id: ", user.centre_id);
        console.log("User_id: ", user.user_id);

        fetchData();

        return () => {
            isMounted = false;
        };
    }, [user.centre_id]); // user.centreID là biến phụ thuộc, thay đổi biến này thì chạy lại useEffect để fetch API

    return (
        <div style={{ width: "calc((100vw - 256px - 64px - 20px) /3 *2)" }}>
            <Card
                title="Thống kê"
                style={{ width: "calc((100vw - 256px - 64px - 20px) /3 *2)" }}
            >
                <Column
                    data={data}
                    xField="monthYear"
                    yField="count"
                    height={250}
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
                        month: {
                            alias: "Tháng",
                        },
                    }}
                />
            </Card>
        </div>
    );
};

export default ChartLine;
