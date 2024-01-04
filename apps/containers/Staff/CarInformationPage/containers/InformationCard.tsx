"use client";

import { Card, Tabs, Button, Descriptions } from "antd";
import React, { useState, useEffect } from "react";
import {
    ArrowLeftOutlined,
    UserOutlined,
    CarOutlined,
    SettingOutlined,
    HistoryOutlined,
    HomeOutlined,
    PhoneOutlined,
    MailOutlined,
    AuditOutlined,
    CheckOutlined,
    CloseOutlined,
} from "@ant-design/icons";
import type { TabsProps } from "antd";
import InformationHistory from "./InspectionHistory";
const { Item } = Descriptions;

type InformationCardProps = {
    carId?: string;
};

const InformationCard: React.FC<InformationCardProps> = ({ carId }) => {
    const [carData, setCarData] = useState<any>(null);

    const addHoursAndFormatDate = (dateString, hours) => {
        const originalDate = new Date(dateString);
        originalDate.setHours(originalDate.getHours() + hours);

        // Format the date to dd/mm/yyyy
        const formattedDate =
            originalDate.getDate().toString().padStart(2, "0") +
            "/" +
            (originalDate.getMonth() + 1).toString().padStart(2, "0") +
            "/" +
            originalDate.getFullYear();

        return formattedDate;
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_HOSTNAME}/api/v1/cars/${carId}`,
                    {  
                        headers: {
                          "Content-Type": "application/json",
                          Authorization: "Bearer " + localStorage.getItem("accessToken"),
                        },
                      }
                );
                const data = await response.json();
                setCarData(data.data[0]);
            } catch (error) {
                console.error("Error fetching inspection data:", error);
            }
        };

        fetchData();
    }, [carId]);

    if (!carData) {
        return <div>Loading...</div>;
    }

    const onChange = (key: string) => {
        console.log(key);
    };
    const items: TabsProps["items"] = [
        {
            key: "1",
            label: (
                <>
                    <UserOutlined /> Thông tin chủ xe
                </>
            ),
            children: (
                <Descriptions
                    column={2}
                    layout="vertical"
                    style={{ padding: "12px" }}
                >
                    <Item
                        label={
                            <span>
                                <UserOutlined /> Họ và tên
                            </span>
                        }
                    >
                        {carData.owner_name || 0}
                    </Item>
                    <Item
                        label={
                            <span>
                                <HomeOutlined /> Địa chỉ
                            </span>
                        }
                    >
                        {carData.address || 0}
                    </Item>
                    <Item
                        label={
                            <span>
                                <PhoneOutlined /> Số điện thoại
                            </span>
                        }
                    >
                        {carData.phone || 0}
                    </Item>
                    <Item
                        label={
                            <span>
                                <MailOutlined /> Email
                            </span>
                        }
                    >
                        {carData.email || 0}
                    </Item>
                    <Item
                        label={
                            <span>
                                <AuditOutlined /> Chủ sở hữu
                            </span>
                        }
                    >
                        {carData.role === "individual"
                            ? "Chủ sở hữu cá nhân"
                            : "Chủ sở hữu doanh nghiệp"}
                    </Item>
                </Descriptions>
            ),
        },
        {
            key: "2",
            label: (
                <>
                    <CarOutlined /> Phương tiện
                </>
            ),
            children: (
                <Descriptions
                    column={2}
                    layout="vertical"
                    style={{ padding: "12px" }}
                >
                    <Item label={"Biển đăng kí"}>
                        {carData.number_plate || 0}
                    </Item>
                    <Item label={"Số đăng kí"}>
                        {carData.registration_number || 0}
                    </Item>
                    <Item label={"Ngày đăng kí"}>
                        {addHoursAndFormatDate(carData.registration_date, 7) ||
                            0}
                    </Item>
                    <Item label={"Loại phương tiện"}>{carData.type || 0}</Item>
                    <Item label={"Nhãn hiệu"}>{carData.brand || 0}</Item>
                    <Item label={"Số loại"}>{carData.model_code || 0}</Item>
                    <Item label={"Số máy"}>{carData.engine_number || 0}</Item>
                    <Item label={"Số khung"}>
                        {carData.chassis_number || 0}
                    </Item>
                    <Item label={"Năm sản xuất"}>
                        {carData.manufactured_year || 0}
                    </Item>
                    <Item label={"Nước sản xuất"}>
                        {carData.manufactured_country || 0}
                    </Item>
                    <Item label={"Kinh doanh vận tải"}>
                        {carData.purpose === "business" ? (
                            <CheckOutlined
                                style={{ color: "green", fontWeight: "bold" }}
                            />
                        ) : (
                            <CloseOutlined
                                style={{ color: "red", fontWeight: "bold" }}
                            />
                        )}
                    </Item>
                    <Item label={"Cải tạo"}>
                        {carData.recovered === "1" ? (
                            <CheckOutlined
                                style={{ color: "green", fontWeight: "bold" }}
                            />
                        ) : (
                            <CloseOutlined
                                style={{ color: "red", fontWeight: "bold" }}
                            />
                        )}
                    </Item>
                </Descriptions>
            ),
        },
        {
            key: "3",
            label: (
                <>
                    <SettingOutlined /> Thông số kỹ thuật
                </>
            ),
            children: (
                <Descriptions
                    column={2}
                    layout="vertical"
                    style={{ padding: "12px" }}
                >
                    <Item label={"Công thức bánh xe"}>
                        {carData.wheel_formula || 0}
                    </Item>
                    <Item label={"Vết bánh xe"}>
                        {carData.wheel_tread || 0}
                    </Item>
                    <Item label={"Kích thước bao"}>
                        {carData.overall_dimension || 0}
                    </Item>
                    <Item label={"Kích thước lòng thùng hàng"}>
                        {carData.container_dimension || 0}
                    </Item>
                    <Item label={"Chiều dài cơ sở"}>
                        {carData.length_base || 0}
                    </Item>
                    <Item label={"Khối lượng bản thân"}>
                        {carData.kerb_mass || 0}
                    </Item>
                    <Item label={"Khối lượng hàng CC theo TK/CP TGGT"}>
                        {carData.designed_and_authorized_payload || 0}
                    </Item>
                    <Item label={"Khối lượng toàn bộ theo TK/CP TGGT"}>
                        {carData.designed_and_authorized_total_mass || 0}
                    </Item>
                    <Item label={"Khối lượng kéo theo TK/CP TGGT"}>
                        {carData.designed_and_authorized_towing_mass || 0}
                    </Item>
                    <Item label={"Số người cho phép chở"}>
                        {carData.permissible_carry || 0}
                    </Item>
                    <Item label={"Loại nhiên liệu"}>{carData.fuel || 0}</Item>
                    <Item label={"Thể tích làm việc của động cơ"}>
                        {carData.engine_displacement || 0}
                    </Item>
                    <Item label={"Công suất lớn nhất trên tốc độ quay"}>
                        {carData.maximum_output_to_rpm_ratio || 0}
                    </Item>
                    <Item label={"Số lượng lốp, cỡ lốp"}>
                        {carData.number_of_tires_and_tire_size || 0}
                    </Item>
                </Descriptions>
            ),
        },
    ];
    return (
        <Card
            style={{
                width: "60%",
                borderRadius: 6,
                margin: "auto",
                marginTop: 50,
                marginBottom: 50,
            }}
            title={
                <Button
                    type="text"
                    icon={<ArrowLeftOutlined />}
                    onClick={() => history.back()}
                />
            }
        >
            <Tabs
                defaultActiveKey="1"
                items={items}
                onChange={onChange}
                centered
            />
        </Card>
    );
};

export default InformationCard;
