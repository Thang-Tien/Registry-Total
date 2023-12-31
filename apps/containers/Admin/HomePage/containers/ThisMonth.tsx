import React, { useEffect, useState } from "react";
import { Card, Statistic } from "antd";
import imge from "../../../../public/image/check-1.svg";
import Image from "next/image";

export default function ThisMonth() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const delay = ms => new Promise(res => setTimeout(res, ms));

  useEffect(() => {
    setLoading(true);

    const getData = async () => {
      await delay(1800)
      try {
        const date = new Date();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const response = await fetch(
          `http://fall2324w3g10.int3306.freeddns.org/api/v1/inspections/stat/all_centre/count?month=${month}&year=${year}`
        );
        if (!response.ok) throw new Error("Fail to get data");

        const tmp = await response.json();
        setData(tmp.data);
        setLoading(false);
        
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <Card
      style={{ width: "calc((100vw - 256px - 64px - 60px) / 4)" }}
      loading={loading}
    >
      <Statistic
        title={"Đăng kiểm trong tháng này"}
        value={data == null ? 0 : data.total}
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
    </Card>
  );
}
