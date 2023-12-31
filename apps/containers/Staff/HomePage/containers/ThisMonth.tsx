"use client";

import React, { useState, useEffect } from "react";
import { Card, Statistic, Skeleton } from "antd";
import imge from "../../../../public/image/check-1.svg";
import Image from "next/image";

const ThisMonth: React.FC = () => {
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
        let isMounted = true; // Set the flag to true when the component mounts

        const fetchData = async () => {
            await delay(1000);
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_HOSTNAME}/api/v1/inspections/stat/each_centre/count/month/${user.centre_id}`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization:
                                "Bearer " + localStorage.getItem("accessToken"),
                        },
                    }
                );
                const data = await response.json();

                if (isMounted) {
                    // Check if the component is still mounted before updating state
                    if (response.ok) {
                        // Assuming the API response contains the count in the 'total' field
                        setInspectionCount(data.data[0].total);
                        setLoading(false);
                    } else {
                        console.error(
                            "Failed to fetch data from API:",
                            data.error
                        );
                    }
                }
            } catch (error) {
                if (isMounted) {
                    // Check if the component is still mounted before updating state
                    console.error("Error fetching data:", error);
                    setLoading(false);
                }
            }
        };

        const fetchDataAndUpdateUser = async () => {
            // Fetch user data from localStorage or set default value
            const userData =
                localStorage.getItem("data") === null
                    ? JSON.stringify(df)
                    : localStorage.getItem("data");

            if (userData != null && isMounted) {
                // Check if the component is still mounted before updating state
                setUser(JSON.parse(userData));
            }

            // Fetch inspection data
            fetchData();
        };

        fetchDataAndUpdateUser();

        // Cleanup function to set the flag to false when the component unmounts
        return () => {
            isMounted = false;
        };
    }, [user.centre_id]);

    // user.centreID là biến phụ thuộc, thay đổi biến này thì chạy lại useEffect để fetch API
    return (
        <Card style={{ width: "calc((100vw - 256px - 64px - 60px) / 4)" }}>
            <Skeleton loading={loading} active round paragraph={{ rows: 4 }} />
            {!loading && (
                <div>
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
                </div>
            )}
        </Card>
    );
};

export default ThisMonth;
