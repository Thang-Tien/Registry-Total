import React from 'react';
import { Card, Statistic } from 'antd';
import imge from "../../../../public/image/check-3.svg"
import Image from 'next/image';

const Centers: React.FC = () => (
  <Card style={{width: "calc((100vw - 256px - 64px - 60px) / 4)"}}>
    <Statistic title = {"Số lượng các trung tâm đăng kiểm"} value={131} />
    <div style={{display:"flex", justifyContent:"center", paddingTop: "25px"}}>
      <Image
        src={imge}
        height={80}
        alt=''
      />
    </div>
  </Card>
);

export default Centers;