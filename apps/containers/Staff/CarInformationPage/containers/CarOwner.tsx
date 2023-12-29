import { Descriptions } from "antd";
import React from "react";
import {
    UserOutlined,
    HomeOutlined,
    PhoneOutlined,
    MailOutlined,
    AuditOutlined,
} from "@ant-design/icons";
const { Item } = Descriptions;
const CarOwner: React.FC = () => {
    return (
        <Descriptions column={2} layout="vertical" style={{ padding: "12px" }}>
            <Item
                label={
                    <span>
                        <UserOutlined /> Họ và tên
                    </span>
                }
            >
                Triệu Thị Thạch
            </Item>
            <Item
                label={
                    <span>
                        <HomeOutlined /> Địa chỉ
                    </span>
                }
            >
                Phường Bình San, Thành phố Hà Tiên, Tỉnh Kiên Giang
            </Item>
            <Item
                label={
                    <span>
                        <PhoneOutlined /> Số điện thoại
                    </span>
                }
            >
                0844227087
            </Item>
            <Item
                label={
                    <span>
                        <MailOutlined /> Email
                    </span>
                }
            >
                individual5348@gmail.com
            </Item>
            <Item
                label={
                    <span>
                        <AuditOutlined /> Chủ sở hữu
                    </span>
                }
            >
                Chủ sở hữu cá nhân
            </Item>
        </Descriptions>
    );
};

export default CarOwner;
