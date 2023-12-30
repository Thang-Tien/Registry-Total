"use client";

import React, { useState, useEffect } from "react";
import { Card, Statistic } from "antd";
import imge from "../../../../public/image/check-1.svg";
import Image from "next/image";

const ThisMonth: React.FC = () => {
    const centreID = 1;
    const [inspectionCount, setInspectionCount] = useState<number | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `http://localhost:8000/api/v1/inspections/stat/each_centre/count/month/${centreID}`
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
    }, []); // Run once on component mount
    return (
        <Card style={{ width: "calc((100vw - 256px - 64px - 60px) / 4)" }}>
            <Statistic
                title={"Đăng kiểm trong tháng này"}
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

export default ThisMonth;
