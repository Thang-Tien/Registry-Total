import cx from "classnames";
import styles from "./index.module.scss";
import React, { useEffect, useState } from "react";
import { Card, Statistic } from "antd";
import imge from "../../../../public/image/grow-2.svg";
import Image from "next/image";

export type Props = {
  className?: string;
  style?: React.CSSProperties;
};

export default function ThisYear({ className, style }: Props) {
  const [data, setData] = useState(0 as any);
  const [loading, setLoading] = useState(false);
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  useEffect(() => {
    setLoading(true);

    const getData = async () => {
      await delay(1700);
      try {
        const date = new Date();
        const year = date.getFullYear();
        const response = await fetch(
          `http://fall2324w3g10.int3306.freeddns.org/api/v1/inspections/stat/all_centre/count?year=${2023}`
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
    <div className={cx(className, styles.container)} style={style}>
      <Card
        style={{ width: "calc((100vw - 256px - 64px - 60px) / 4)" }}
        loading={loading}
      >
        <Statistic
          title={"Đăng kiểm trong năm nay"}
          value={data.total}
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
    </div>
  );
}
