import React, { useEffect, useState } from "react";
import { Card, Statistic } from "antd";
import imge from "../../../../public/image/check-3.svg";
import Image from "next/image";

export default function Centers() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  useEffect(() => {
    setLoading(true);

    const getData = async () => {
      await delay(2400);
      try {
        const response = await fetch(
          `http://fall2324w3g10.int3306.freeddns.org/api/v1/centres/`,
          {  
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("accessToken"),
            },
          }
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
        title={"Số lượng các trung tâm đăng kiểm"}
        value={data.length}
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
