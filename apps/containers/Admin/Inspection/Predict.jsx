import { Pie } from "@ant-design/plots";
import { Card } from "antd";
import { useEffect, useState } from "react";
import { useAuthHeader, useAuthUser } from "react-auth-kit";
import { useMediaQuery } from "react-responsive";

const Predict = (props) => {
  const authHeader = useAuthHeader();
  const [loading, setLoading] = useState(false);
  const [expired, setExpired] = useState(0);
  const [aboutToExpire, setAboutToExpire] = useState(0);
  const [newIns, setNewIns] = useState(0);
  const breakPoint = useMediaQuery({ query: "(min-width: 576px)" });
  const auth = useAuthUser();
  const admin = auth().data.role === "admin";

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
    <Card title="Trong tháng này" loading={loading}>
      <Pie
        appendPadding={10}
        data={data}
        angleField="value"
        colorField="type"
        radius={0.75}
        legend={{
          position: breakPoint ? "right" : "bottom",
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