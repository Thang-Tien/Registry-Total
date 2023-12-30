import { Pie } from "@ant-design/plots";
import { Card } from "antd";
import { useState } from "react";

const Predict = (props) => {
  const [expired, setExpired] = useState(0);
  const [aboutToExpire, setAboutToExpire] = useState(0);
  const [newIns, setNewIns] = useState(0);

  setExpired(10);
  setAboutToExpire(20);
  setNewIns(15);

  const data = [
    {
      type: "Đã hết hạn",
      value: expired,
    },
    {
      type: "Sắp hết hạn",
      value: aboutToExpire,
    },
    {
      type: "Mới (dự đoán)",
      value: newIns,
    },
  ];

  return (
    <Card title="Trong tháng này">
      <Pie
        appendPadding={10}
        data={data}
        angleField="value"
        colorField="type"
        radius={0.75}
        legend={{
          position: "right" ,
        }}
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
        height={props.height}
      />
    </Card>
  );
};

export default Predict;