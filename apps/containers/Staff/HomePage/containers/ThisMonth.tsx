import React from 'react';
import { Card, Statistic } from 'antd';
import imge from "../../../../public/image/check-1.svg"
import Image from 'next/image';

const ThisMonth: React.FC = () => (
  <Card style={{width: "calc((100vw - 256px - 64px - 60px) / 4)"}}>
    <Statistic title = {"Đăng kiểm trong tháng này"} value={0} />
    <div style={{display:"flex", justifyContent:"center", paddingTop: "25px"}}>
      <Image
        src={imge}
        height={80}
        alt=''
      />
    </div>
  </Card>
);

export default ThisMonth;