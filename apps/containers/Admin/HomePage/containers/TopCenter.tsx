import React, { useEffect, useState } from "react";
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

export default function TopCenter() {
  const [data, setData] = useState([] as any);
  const [loading, setLoading] = useState(false);
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  useEffect(() => {
    setLoading(true);

    const getData = async () => {
      await delay(2400);

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_HOSTNAME}/api/v1/centres/most_inspects`,
          {  
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("accessToken"),
            },
          }
        );
        if (!response.ok) throw new Error("Fail to get data");

        const tmp = await response.json();
        const tmpData: DataType[] = [];
        tmp.data.forEach((e) => {
          tmpData.push({
            key: `${e.centre_id}`,
            center: e.name,
            count: e.total_inspection,
          });
        });
        setData(tmpData);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    getData();
  }, []);

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
            href={`/center/${key}`}
          >
            <DoubleRightOutlined />
          </Link>
        );
      },
    },
  ];

  return (
    <Table
      title={() => "Những trung tâm đăng kiểm nhiều nhất"}
      bordered
      loading={loading}
      footer={() => (
        <Link
          href="/center"
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
      dataSource={data}
      pagination={false}
      scroll={{ x: 550 }}
    />
  );
}
