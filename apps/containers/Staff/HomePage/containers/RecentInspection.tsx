"use client";

import React, { useState, useEffect } from "react";
import { Card, Statistic, Table } from "antd";
import { DoubleRightOutlined, ForwardFilled } from "@ant-design/icons";
import Link from "next/link";

const RecentInspection: React.FC = () => {
    const user = { centreID: 1, userID: 19 };
    const columns = [
        {
            title: "Số đăng kiểm",
            dataIndex: "inspection_number",
            key: "inspection_number",
            align: "center",
        },
        {
            title: "Biển số xe",
            dataIndex: "number_plate",
            key: "number_plate",
            align: "center",
        },
        {
            title: "Ngày đăng kiểm",
            dataIndex: "inspection_date",
            key: "inspection_date",
            align: "center",
        },
        {
            title: "Ngày hết hạn",
            dataIndex: "expired_date",
            key: "expired_date",
            align: "center",
        },
        {
            title: "",
            dataIndex: "action",
            key: "action",
            align: "center",
        },
        {
            title: "",
            dataIndex: "action",
            key: "action",
            align: "center",
            render: (text, record) => (
                <Link href={`/inspection/${record.inspection_id}`}>
                    <DoubleRightOutlined style={{ color: "black" }} />
                </Link>
            ),
        },
    ];
    const [dataSource, setDataSource] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_HOSTNAME}/api/v1/inspections/recently/${user.centreID}`
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
                        // action: <DoubleRightOutlined />,
                    }))
                );

                console.log("Updated dataSource:", dataSource);
            } catch (error) {
                console.error("Error fetching data:", error.message);
            }
        };

        fetchData();
    }, [user.centreID]); // centreID: dependency array to run the effect only once on mount

    return (
        <Table
            title={() => (
                <div
                    style={{
                        fontSize: "16px",
                        fontWeight: "bold",
                        padding: "0 10px",
                    }}
                >
                    Đăng kiểm gần đây
                </div>
            )}
            dataSource={dataSource}
            columns={columns}
            pagination={false}
            scroll={{ x: "calc(100vw - 256px - 72px)" }}
        />
    );
};

export default RecentInspection;
