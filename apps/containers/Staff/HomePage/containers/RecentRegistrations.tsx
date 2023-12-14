"use client";

import React from "react";
import { Card, Statistic, Table } from "antd";
import imge from "../../../../public/image/check-2.svg";
import Image from "next/image";
import { DoubleRightOutlined, ForwardFilled } from "@ant-design/icons";
import Link from "next/link";

const dataSource = [
    {
        key: "1",
        inspectionNumber: "2023-003523",
        plateNumber: "31H6-282.35",
        inspectionDate: "13/12/2023",
        expiredDate: "13/06/2024",
        action: "",
    },
    {
        key: "2",
        inspectionNumber: "2023-003523",
        plateNumber: "31H6-282.35",
        inspectionDate: "13/12/2023",
        expiredDate: "13/06/2024",
        action: "",
    },
    {
        key: "3",
        inspectionNumber: "2023-003523",
        plateNumber: "31H6-282.35",
        inspectionDate: "13/12/2023",
        expiredDate: "13/06/2024",
        action: "",
    },
    {
        key: "4",
        inspectionNumber: "2023-003523",
        plateNumber: "31H6-282.35",
        inspectionDate: "13/12/2023",
        expiredDate: "13/06/2024",
        action: "",
    },
    {
        key: "5",
        inspectionNumber: "2023-003523",
        plateNumber: "31H6-282.35",
        inspectionDate: "13/12/2023",
        expiredDate: "13/06/2024",
        action: "",
    },
];

const columns = [
    {
        title: "Số đăng kiểm",
        dataIndex: "inspectionNumber",
        key: "inspectionNumber",
        align: "center",
    },
    {
        title: "Biển số xe",
        dataIndex: "plateNumber",
        key: "plateNumber",
        align: "center",
    },
    {
        title: "Ngày đăng kiểm",
        dataIndex: "inspectionDate",
        key: "inspectionDate",
        align: "center",
    },
    {
        title: "Ngày hết hạn",
        dataIndex: "expiredDate",
        key: "expiredDate",
        align: "center",
    },
    {
        title: "",
        dataIndex: "action",
        key: "action",
        align: "center",
        render: () => <DoubleRightOutlined />,
    },
];

const RecentRegistrations: React.FC = () => (
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
                <a href="/centers" style={{ alignItems: "center" }}>
                    Xem thêm
                    <ForwardFilled style={{ paddingLeft: 5 }} />
                </a>
            </div>
        )}
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        scroll={{ x: "calc(100vw - 256px - 72px)" }} // Adjust the value as needed
    />
);

export default RecentRegistrations;
