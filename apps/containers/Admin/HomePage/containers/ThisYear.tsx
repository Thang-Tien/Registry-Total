import React from 'react';
import { Card, Statistic } from 'antd';
import imge from "../../../../public/image/grow-2.svg"
import Image from 'next/image';

const ThisYear: React.FC = () => (
  <Card style={{width: "calc((100vw - 256px - 64px - 60px) / 4)"}}>
    <Statistic title = {"Đăng kiểm trong năm nay"} value={3523} />
    <div style={{display:"flex", justifyContent:"center", paddingTop: "25px"}}>
      <Image
        src={imge}
        height={80}
        alt=''
      />
    </div>
  </Card>
);

export default ThisYear;