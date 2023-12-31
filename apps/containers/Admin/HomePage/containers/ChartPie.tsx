"use client";

import { Card } from "antd";
import { Pie } from "@ant-design/plots";
import React, { useEffect, useState } from "react";

interface DataType {
  type: string;
  value: number;
}

export default function ChartPie() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  useEffect(() => {
    setLoading(true);

    const getData = async () => {
      await delay(2700);

      try {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const response = await fetch(
          `http://fall2324w3g10.int3306.freeddns.org/api/v1/inspections/stat/all_centre/count/by_year?year=${year}`
        );
        if (!response.ok) throw new Error("Fail to get data");

        const tmp = await response.json();
        let expired = Math.round(Math.random() * 50),
          newly = Math.round(Math.random() * 50),
          abExpired = Math.round(Math.random() * 50);

        tmp.data.forEach((e) => {
          if (e.month <= month) {
            if (month - e >= 6) expired += e.count;
            if (month - e == 1) abExpired += e.count;
            if (month - e == 0) newly += e.count;
          }
        });

        const tmpData: DataType[] = [];
        tmpData.push({
          type: "Đã hết hạn",
          value: expired,
        });
        tmpData.push({
          type: "Sắp hết hạn",
          value: abExpired,
        });
        tmpData.push({
          type: "Mới (dự đoán)",
          value: newly,
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
      <Card
        title="Trong tháng này"
        style={{ width: "calc((100vw - 256px - 64px -100px)/3)" }}
      >
        <Pie
          appendPadding={10}
          data={data == null ? [] : data}
          angleField="value"
          colorField="type"
          radius={0.75}
          label={{
            type: "inner",
            content: "{value}",
          }}
          interactions={[
            {
              type: "element-selected",
            },
            {
              type: "element-active",
            },
          ]}
          height={250}
        />
      </Card>
    </div>
  );
}
