import { Descriptions } from "antd";
import React from "react";
const { Item } = Descriptions;

const CarParameter: React.FC = () => {
    return (
        <Descriptions column={2} layout="vertical" style={{ padding: "12px" }}>
            <Item label={"Công thức bánh xe"}>6x6</Item>
            <Item label={"Vết bánh xe"}>957 (mm)</Item>
            <Item label={"Kích thước bao"}>4239 x 1592 x 1393 (mm)</Item>
            <Item label={"Kích thước lòng thùng hàng"}>
                1537 x 1187 x 844 (mm)
            </Item>
            <Item label={"Chiều dài cơ sở"}>2633 (mm)</Item>
            <Item label={"Khối lượng bản thân"}>1304 (kg)</Item>
            <Item label={"Khối lượng hàng CC theo TK/CP TGGT"}>
                784/744 (kg)
            </Item>
            <Item label={"Khối lượng toàn bộ theo TK/CP TGGT"}>
                2341/2266 (kg)
            </Item>
            <Item label={"Khối lượng kéo theo TK/CP TGGT"}>1229/1738 (kg)</Item>
            <Item label={"Số người cho phép chở"}>8</Item>
            <Item label={"Loại nhiên liệu"}>Diesel</Item>
            <Item label={"Thể tích làm việc của động cơ"}>1768 (cm3)</Item>
            <Item label={"Công suất lớn nhất trên tốc độ quay"}>
                59kW/6790vph
            </Item>
            <Item label={"Số lượng lốp, cỡ lốp"}>6 lốp, 265/70 R16</Item>
        </Descriptions>
    );
};

export default CarParameter;
