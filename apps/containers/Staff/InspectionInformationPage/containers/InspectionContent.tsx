import { Descriptions, Button, Collapse } from "antd";
import React, { useState, useEffect } from "react";
import {
    CheckSquareOutlined,
    CalendarOutlined,
    ToolOutlined,
    PhoneOutlined,
    MailOutlined,
    UserOutlined,
    AuditOutlined,
    HomeOutlined,
    DownloadOutlined,
    CheckOutlined,
    CloseOutlined,
} from "@ant-design/icons";
import InspectionPDF from "./InspectionPDF";

const { Item } = Descriptions;

export type Props = {
    inspectionId: any;
};

const InspectionContent: React.FC<Props> = ({ inspectionId }) => {
    const [inspectionData, setInspectionData] = useState<any>(null);

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
                    `${process.env.NEXT_PUBLIC_HOSTNAME}/api/v1/inspections/get_inspection_owner/${inspectionId}`,
                    {  
                        headers: {
                          "Content-Type": "application/json",
                          Authorization: "Bearer " + localStorage.getItem("accessToken"),
                        },
                      }
                );
                const data = await response.json();
                setInspectionData(data.data[0]);
            } catch (error) {
                console.error("Error fetching inspection data:", error);
            }
        };

        fetchData();
    }, [inspectionId]);

    if (!inspectionData) {
        return <div>Loading...</div>;
    }

    const data = [
        {
            key: "owner",
            label: "Thông tin chủ sở hữu",
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
                        {inspectionData.owner_name || 0}
                    </Item>
                    <Item
                        label={
                            <span>
                                <HomeOutlined /> Địa chỉ
                            </span>
                        }
                    >
                        {inspectionData.address || 0}
                    </Item>
                    <Item
                        label={
                            <span>
                                <PhoneOutlined /> Số điện thoại
                            </span>
                        }
                    >
                        {inspectionData.owner_phone || 0}
                    </Item>
                    <Item
                        label={
                            <span>
                                <MailOutlined /> Email
                            </span>
                        }
                    >
                        {inspectionData.owner_email || 0}
                    </Item>
                    <Item
                        label={
                            <span>
                                <AuditOutlined /> Chủ sở hữu
                            </span>
                        }
                    >
                        {inspectionData.role === "individual"
                            ? "Chủ sở hữu cá nhân"
                            : "Chủ sở hữu doanh nghiệp"}
                    </Item>
                </Descriptions>
            ),
        },
        {
            key: "car",
            label: "Phương tiện",
            children: (
                <Descriptions
                    column={2}
                    layout="vertical"
                    style={{ padding: "12px" }}
                >
                    <Item label={"Biển đăng kí"}>
                        {inspectionData.number_plate || 0}
                    </Item>
                    <Item label={"Số đăng kí"}>
                        {inspectionData.registration_number || 0}
                    </Item>
                    <Item label={"Ngày đăng kí"}>
                        {addHoursAndFormatDate(
                            inspectionData.registration_date,
                            7
                        ) || 0}
                    </Item>
                    <Item label={"Loại phương tiện"}>
                        {inspectionData.type || 0}
                    </Item>
                    <Item label={"Nhãn hiệu"}>{inspectionData.brand || 0}</Item>
                    <Item label={"Số loại"}>
                        {inspectionData.model_code || 0}
                    </Item>
                    <Item label={"Số máy"}>
                        {inspectionData.engine_number || 0}
                    </Item>
                    <Item label={"Số khung"}>
                        {inspectionData.chassis_number || 0}
                    </Item>
                    <Item label={"Năm sản xuất"}>
                        {inspectionData.manufactured_year || 0}
                    </Item>
                    <Item label={"Nước sản xuất"}>
                        {inspectionData.manufactured_country || 0}
                    </Item>
                    <Item label={"Kinh doanh vận tải"}>
                        {inspectionData.purpose === "business" ? (
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
                        {inspectionData.recovered === "1" ? (
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
            key: "parameter",
            label: "Thông số kỹ thuật",
            children: (
                <Descriptions
                    column={2}
                    layout="vertical"
                    style={{ padding: "12px" }}
                >
                    <Item label={"Công thức bánh xe"}>
                        {inspectionData.wheel_formula || 0}
                    </Item>
                    <Item label={"Vết bánh xe"}>
                        {inspectionData.wheel_tread || 0}
                    </Item>
                    <Item label={"Kích thước bao"}>
                        {inspectionData.overall_dimension || 0}
                    </Item>
                    <Item label={"Kích thước lòng thùng hàng"}>
                        {inspectionData.container_dimension || 0}
                    </Item>
                    <Item label={"Chiều dài cơ sở"}>
                        {inspectionData.length_base || 0}
                    </Item>
                    <Item label={"Khối lượng bản thân"}>
                        {inspectionData.kerb_mass || 0}
                    </Item>
                    <Item label={"Khối lượng hàng CC theo TK/CP TGGT"}>
                        {inspectionData.designed_and_authorized_payload || 0}
                    </Item>
                    <Item label={"Khối lượng toàn bộ theo TK/CP TGGT"}>
                        {inspectionData.designed_and_authorized_total_mass || 0}
                    </Item>
                    <Item label={"Khối lượng kéo theo TK/CP TGGT"}>
                        {inspectionData.designed_and_authorized_towed_mass || 0}
                    </Item>
                    <Item label={"Số người cho phép chở"}>
                        {inspectionData.permissible_carry || 0}
                    </Item>
                    <Item label={"Loại nhiên liệu"}>
                        {inspectionData.fuel || 0}
                    </Item>
                    <Item label={"Thể tích làm việc của động cơ"}>
                        {inspectionData.engine_displacement || 0}
                    </Item>
                    <Item label={"Công suất lớn nhất trên tốc độ quay"}>
                        {inspectionData.maximum_output_to_rpm_ratio || 0}
                    </Item>
                    <Item label={"Số lượng lốp, cỡ lốp"}>
                        {inspectionData.number_of_tires_and_tire_size || 0}
                    </Item>
                </Descriptions>
            ),
        },
        {
            key: "inspection",
            label: "Thông tin đăng kiểm",
            children: (
                <Descriptions
                    column={1}
                    layout="vertical"
                    style={{ padding: "12px" }}
                >
                    <Item
                        label={
                            <span>
                                <CheckSquareOutlined /> Số đăng kiểm
                            </span>
                        }
                    >
                        {inspectionData.inspection_number || 0}
                    </Item>
                    <Item
                        label={
                            <span>
                                <CalendarOutlined /> Ngày đăng kiểm
                            </span>
                        }
                    >
                        {addHoursAndFormatDate(
                            inspectionData.inspection_date,
                            7
                        ) || 0}
                    </Item>
                    <Item
                        label={
                            <span>
                                <CalendarOutlined /> Có hiệu lực đến ngày
                            </span>
                        }
                    >
                        {addHoursAndFormatDate(
                            inspectionData.expired_date,
                            7
                        ) || 0}
                    </Item>
                    <Item
                        label={
                            <span>
                                <ToolOutlined /> Đơn vị kiểm định
                            </span>
                        }
                    >
                        {inspectionData.registration_name || 0}
                    </Item>
                    <Item
                        label={
                            <span>
                                <PhoneOutlined /> Số điện thoại
                            </span>
                        }
                    >
                        {inspectionData.user_phone || 0}
                    </Item>
                    <Item
                        label={
                            <span>
                                <MailOutlined /> Email
                            </span>
                        }
                    >
                        {inspectionData.user_email || 0}
                    </Item>
                    <Item
                        label={
                            <span>
                                <UserOutlined /> Nhân viên đăng kiểm
                            </span>
                        }
                    >
                        {inspectionData.user_name || 0}
                    </Item>
                </Descriptions>
            ),
        },
    ];

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Collapse items={data} defaultActiveKey={"inspection"} accordion />
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                }}
            >
                <InspectionPDF inspectionData={inspectionData} />
            </div>
        </div>
    );
};

export default InspectionContent;
