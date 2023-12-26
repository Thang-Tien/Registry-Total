import React from "react";
import { Card, Statistic } from "antd";
import imge from "../../../../public/image/check-2.svg";
import Image from "next/image";

const MyRegistrations: React.FC = () => (
    <Card style={{ width: "calc((100vw - 256px - 64px - 60px) / 4)" }}>
        <Statistic title={"Số lượng đăng kiểm của tôi"} value={88} />
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

export default MyRegistrations;
