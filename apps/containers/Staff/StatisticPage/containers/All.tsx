import React from "react";
import { Card, Statistic } from "antd";
import imge from "../../../../public/image/grow-1.svg";
import Image from "next/image";

const All: React.FC = () => (
    <Card style={{ width: "calc((100vw - 256px - 64px - 60px) / 3)" }}>
        <Statistic title={"Tổng số lượng đăng kiểm"} value={376} />
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

export default All;
