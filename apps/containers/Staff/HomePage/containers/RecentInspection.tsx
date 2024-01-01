"use client";

import React, { useState, useEffect } from "react";
import { Card, Statistic, Table } from "antd";
import { DoubleRightOutlined, ForwardFilled } from "@ant-design/icons";
import Link from "next/link";
import { AlignType } from "rc-table/lib/interface";

const RecentInspection: React.FC = () => {
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
    const columns = [
        {
            title: "Số đăng kiểm",
            dataIndex: "inspection_number",
            key: "inspection_number",
            align: "center" as AlignType,
        },
        {
            title: "Biển số xe",
            dataIndex: "number_plate",
            key: "number_plate",
            align: "center" as AlignType,
        },
        {
            title: "Ngày đăng kiểm",
            dataIndex: "inspection_date",
            key: "inspection_date",
            align: "center" as AlignType,
        },
        {
            title: "Ngày hết hạn",
            dataIndex: "expired_date",
            key: "expired_date",
            align: "center" as AlignType,
        },
        {
            title: "",
            dataIndex: "action",
            key: "action",
            align: "center" as AlignType,
            render: (text, record) => (
                <Link href={`/inspection/${record.inspection_id}`}>
                    <DoubleRightOutlined style={{ color: "black" }} />
                </Link>
            ),
        },
    ];
    const [dataSource, setDataSource] = useState([]);

    useEffect(() => {
        console.log(user);
    }, [user]);
    useEffect(() => {
        const data =
            localStorage.getItem("data") === null
                ? JSON.stringify(df)
                : localStorage.getItem("data");
        if (data != null) setUser(JSON.parse(data));
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_HOSTNAME}/api/v1/inspections/recently/${user.centre_id}`
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
    }, [user.user_id]); // centreID: dependency array to run the effect only once on mount

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
            footer={() => (
                <div
                    style={{
                        fontSize: "16px",
                        textAlign: "center",
                        fontWeight: "500",
                        color: "blue",
                        // padding: "0 10px",
                    }}
                >
                    <Link href="/inspection/all">
                        <div style={{ alignItems: "center" }}>
                            Xem thêm
                            <ForwardFilled style={{ paddingLeft: 5 }} />
                        </div>
                    </Link>
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
