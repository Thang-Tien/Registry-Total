"use client";

import React, { useState, useEffect } from "react";
import { Card, Statistic, Skeleton } from "antd";
import imge from "../../../../public/image/grow-1.svg";
import Image from "next/image";

const All: React.FC = () => {
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
    const [inspectionCount, setInspectionCount] = useState<number | null>(null);
    const [loading, setLoading] = useState(true);
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));

    useEffect(() => {
        const data =
            localStorage.getItem("data") === null
                ? JSON.stringify(df)
                : localStorage.getItem("data");
        if (data != null) setUser(JSON.parse(data));
        const fetchData = async () => {
            await delay(1000);
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_HOSTNAME}/api/v1/inspections/stat/each_centre/count/${user.centre_id}`,
                    {  
                        headers: {
                          "Content-Type": "application/json",
                          Authorization: "Bearer " + localStorage.getItem("accessToken"),
                        },
                      }
                );
                const data = await response.json();

                if (response.ok) {
                    // Assuming the API response contains the count in the 'total' field
                    setInspectionCount(data.data[0].total);
                    setLoading(false);
                } else {
                    console.error("Failed to fetch data from API:", data.error);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, [user.centre_id]); // user.centreID là biến phụ thuộc, thay đổi biến này thì chạy lại useEffect để fetch API

    return (
        <Card style={{ width: "calc((100vw - 256px - 64px - 60px) / 4)" }}>
            <Skeleton loading={loading} active round paragraph={{ rows: 4 }} />
            {!loading && (
                <div>
                    <Statistic
                        title={"Tổng số lượng đăng kiểm"}
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
                </div>
            )}
        </Card>
    );
};

export default All;
