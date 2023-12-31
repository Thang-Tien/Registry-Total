"use client";

import { Card } from "antd";
import { Column } from "@ant-design/plots";
import React, { useEffect, useState } from "react";

interface DataType{
  count: number,
  monthYear: string
}

export default function ChartLine() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const delay = ms => new Promise(res => setTimeout(res, ms));

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      await delay(3000)
      try {

        const date = new Date();
        const year = date.getFullYear();

        const response = await fetch(
          `http://fall2324w3g10.int3306.freeddns.org/api/v1/inspections/stat/all_centre/count/by_year?year=${year}`
        );
        if(!response.ok) throw new Error("Fail to get data");

        const tmp = await response.json();
        const tmpData: DataType[]  = [];

        tmp.data.forEach(e => {
          tmpData.push({
            count: e.total,
            monthYear: `${e.month}/${year}`
          })
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

  return (
    <div style={{ width: "calc((100vw - 256px - 64px - 100px) /3 * 2)" }}>
      <Card title="Thống kê" style={{ width: "inherit" }} loading = {loading}>
        <Column
          data={data == null ? [] : data}
          xField="monthYear"
          yField="count"
          height={250}
          label={{
            position: "middle",
            style: {
              fill: "#FFFFFF",
              opacity: 0.6,
            },
          }}
          xAxis={{
            label: {
              autoHide: true,
              autoRotate: false,
            },
          }}
          meta={{
            count: {
              alias: "Số lượng",
            },
            month: {
              alias: "Tháng",
            },
          }}
        />
      </Card>
    </div>
  );
}
