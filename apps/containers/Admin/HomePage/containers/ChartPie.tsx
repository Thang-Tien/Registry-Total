"use client";

import { Card } from "antd";
import { Pie } from "@ant-design/plots";
import React, { useEffect, useState } from "react";

export default function ChartPie(props) {
  const [data, setData] = useState([] as any);
  const [loading, setLoading] = useState(false);
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  useEffect(() => {
    setLoading(true);

    const getData = async () => {
      await delay(2700);

      try {
        const date = new Date();
        const year = date.getFullYear();
        const month = 12;
        let response = await fetch(
          `${process.env.NEXT_PUBLIC_HOSTNAME}/api/v1/inspections/stat/all_centre/count/by_year?year=${2023}`,
          {  
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("accessToken"),
            },
          }
        );
        if (!response.ok) throw new Error("Fail to get data");

        let tmp = await response.json();
        let expired = 0,
          newly = 0,
          abExpired = 0;

        tmp.data.forEach((e) => {
          if (e.month <= month) {
            console.log(e.count);
            if (month - e.month >= 8) expired += e.total;
            else if (month - e.month == 0) newly += e.total;
            else if (month - e.month <= 2) abExpired += e.total;
          }
        });
        console.log(newly);

        response = await fetch(
          `${process.env.NEXT_PUBLIC_HOSTNAME}/api/v1/inspections/stat/all_centre/prediction/about_to_inspect`,
          {  
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("accessToken"),
            },
          }
        );
        if (!response.ok) throw new Error("Fail to get data");
        tmp = await response.json();

        newly += Math.round(tmp.data.total / 100);
        const tmpData: any[] = [];

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
        console.log(tmpData);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div style={{ width: "29vw" }}>
      <Card
        title="Trong tháng này"
        style={{
          width: "calc((100vw - 256px - 64px -100px)/3)",
          height: props.height ? `${props.height}` : "100%",
        }}
        loading={loading}
      >
        <Pie
          appendPadding={10}
          data={data}
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
