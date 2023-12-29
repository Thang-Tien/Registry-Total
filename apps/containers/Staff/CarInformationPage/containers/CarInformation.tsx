import { Descriptions } from "antd";
import React from "react";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
const { Item } = Descriptions;

const CarInformation: React.FC = () => {
    return (
        <Descriptions column={2} layout="vertical" style={{ padding: "12px" }}>
            <Item label={"Biển đăng kí"}>30A1-188.72</Item>
            <Item label={"Số đăng kí"}>2021-0009222</Item>
            <Item label={"Ngày đăng kí"}>25/10/2021</Item>
            <Item label={"Loại phương tiện"}>Van</Item>
            <Item label={"Nhãn hiệu"}>Tesla</Item>
            <Item label={"Số loại"}>oE770aj9MeMH</Item>
            <Item label={"Số máy"}>R2GVZ59X</Item>
            <Item label={"Số khung"}>44AZ1SNG3P9</Item>
            <Item label={"Năm sản xuất"}>2017</Item>
            <Item label={"Nước sản xuất"}>Mỹ</Item>
            <Item label={"Kinh doanh vận tải"}>
                <CheckOutlined style={{ color: "green", fontWeight: "bold" }} />
            </Item>
            <Item label={"Cải tạo"}>
                <CloseOutlined style={{ color: "red", fontWeight: "bold" }} />
            </Item>
        </Descriptions>
    );
};

export default CarInformation;
