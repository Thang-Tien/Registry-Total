import React from "react";
import Link from "next/link";
import { DoubleRightOutlined } from "@ant-design/icons";
import { IoPlayForwardOutline } from "react-icons/io5";
import { Table } from "antd";
import type { ColumnType } from "antd/es/table";

interface DataType {
  key: string;
  center: string;
  count: number;
}

const TopCenter = () => {
  const columns: ColumnType<DataType>[] = [
    {
      title: "Tên trung tâm",
      dataIndex: "center",
      key: "center",
      align: "center",
    },
    {
      title: "Số lượng xe đã đăng kiểm",
      dataIndex: "count",
      key: "count",
      align: "center",
    },
    {
      title: "",
      dataIndex: "action",
      key: "action",
      align: "center",
      render: (_, { key }) => {
        return (
          <Link
            style={{ color: "var(--color-black)", fontSize: "1.2rem" }}
            href={`/centers/${key}`}
          >
            <DoubleRightOutlined />
          </Link>
        );
      },
    },
  ];

  const tableData: DataType[] = [];
  for (let i = 0; i < 5; i++) {
    tableData.push({
      key: `${i}`,
      center: `Trung tâm đăng kiểm ${i}`,
      count: i,
    });
  }

  return (
    <Table
      title={() => "Những trung tâm đăng kiểm nhiều nhất"}
      bordered
      footer={() => (
        <Link
          href="/centers"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            justifyContent: "center",
          }}
        >
          <span>Xem tất cả trung tâm</span>
          <IoPlayForwardOutline />
        </Link>
      )}
      columns={columns}
      dataSource={tableData}
      pagination={false}
      scroll={{ x: 550 }}
    />
  );
};

export default TopCenter;
