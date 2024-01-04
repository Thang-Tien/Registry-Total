"use client";

import React, { useState, useEffect, use } from "react";
import { Card, Statistic, Skeleton } from "antd";
import imge from "../../../../public/image/check-2.svg";
import Image from "next/image";

const MyRegistrations: React.FC = () => {
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
    const [loading, setLoading] = useState(true);
    const [dataSource, setDataSource] = useState([]);
    const [inspectionCount, setInspectionCount] = useState<number | null>(null);
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));

    useEffect(() => {
        const data =
            localStorage.getItem("data") === null
                ? JSON.stringify(df)
                : localStorage.getItem("data");
        if (data != null) setUser(JSON.parse(data));

        // const fetchCountAll = async () => {
        //     await delay(1000);

        //     try {
        //         const response = await fetch(
        //             `${process.env.NEXT_PUBLIC_HOSTNAME}/api/v1/inspections/stat/each_centre/count/mine/${user.user_id}`
        //         );
        //         const data = await response.json();

        //         if (response.ok) {
        //             // Assuming the API response contains the count in the 'total' field
        //             setInspectionCount(data.data[0].total);
        //         } else {
        //             console.error("Failed to fetch data from API:", data.error);
        //         }
        //     } catch (error) {
        //         console.error("Error fetching data:", error);
        //     }
        // };
        delay(1000);
        const fetchDataSource = async () => {
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_HOSTNAME}/api/v1/inspections/mine/${user.user_id}`,
                    {  
                        headers: {
                          "Content-Type": "application/json",
                          Authorization: "Bearer " + localStorage.getItem("accessToken"),
                        },
                      }
                );

                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }

                const data = await response.json();

                setDataSource(
                    data.data.map((item, index) => ({
                        key: String(index + 1),
                        inspection_id: item.inspection_id,
                        inspection_number: item.inspection_number,
                        number_plate: item.number_plate,
                        inspection_date: new Date(
                            item.inspection_date
                        ).toLocaleDateString("en-GB"), // Use 'en-GB' locale for dd/mm/yyyy format
                        expired_date: new Date(
                            item.expired_date
                        ).toLocaleDateString("en-GB"), // Use 'en-GB' locale for dd/mm/yyyy format
                    }))
                );

                console.log("Updated data source:", dataSource);
                setInspectionCount(data.data.length);
                setLoading(false);
            } catch (error) {
                console.error(
                    "There has been a problem with your fetch operation:",
                    error
                );
                setLoading(false);
            }
        };

        // console.log("Centre_id: ", user.centre_id);
        // console.log("User_id: ", user.user_id);
        // fetchCountAll();
        fetchDataSource();
    }, [user.user_id]);

    // setInspectionCount(dataSource.length);
    useEffect(() => {
        console.log("Inspection count:", inspectionCount);
    }, [inspectionCount]);
    return (
        <Card style={{ width: "calc((100vw - 256px - 64px - 60px) / 4)" }}>
            <Skeleton loading={loading} active round paragraph={{ rows: 4 }} />
            {!loading && (
                <div>
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
                </div>
            )}
        </Card>
    );
};

export default MyRegistrations;
