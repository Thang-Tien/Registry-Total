"use client";

import React, { useState, useEffect, use } from "react";
import { Card, Statistic } from "antd";
import imge from "../../../../public/image/check-2.svg";
import Image from "next/image";

const MyRegistrations: React.FC = () => {
    const user = { centreID: 1, userID: 19 };
    const [inspectionCount, setInspectionCount] = useState<number | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_HOSTNAME}/api/v1/inspections/stat/each_centre/count/mine/${user.userID}`
                );
                const data = await response.json();

                if (response.ok) {
                    // Assuming the API response contains the count in the 'total' field
                    setInspectionCount(data.data[0].total);
                } else {
                    console.error("Failed to fetch data from API:", data.error);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [user.centreID]); // user.centreID là biến phụ thuộc, thay đổi biến này thì chạy lại useEffect để fetch API
    return (
        <Card style={{ width: "calc((100vw - 256px - 64px - 60px) / 4)" }}>
            <Statistic
                title={"Số lượng đăng kiểm của tôi"}
                value={inspectionCount || 0}
            />
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: "25px",
                }}
            >
                <Image src={imge} height={80} alt="" />
            </div>
        </Card>
    );
};

export default MyRegistrations;
