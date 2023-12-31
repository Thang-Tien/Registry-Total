import cx from "classnames";
import styles from "./index.module.scss";
import React, { useEffect, useState } from "react";
import { Card, Statistic } from "antd";
import imge from "../../../../public/image/grow-1.svg";
import Image from "next/image";

export type Props = {
  className?: string;
  style?: React.CSSProperties;
};

export default function Total({ className, style }: Props) {
  const [data, setData] = useState(0 as any);
  const [loading, setLoading] = useState(false);
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  useEffect(() => {
    setLoading(true);

    const getData = async () => {
      await delay(2000);

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_HOSTNAME}/api/v1/inspections/stat/all_centre/count/`,
          {  
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("accessToken"),
            },
          }
        );
        if (!response.ok) throw new Error("Fail to get data");

        const data = await response.json();
        setData(data.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <div className={cx(className, styles.container)} style={style}>
      <Card
        style={{ width: "calc((100vw - 256px - 64px - 60px) / 4)" , height: "100%"}}
        loading={loading}
      >
        <Statistic title={"Tổng số lượng đăng kiểm"} value={data.total} />
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
    </div>
  );
}
