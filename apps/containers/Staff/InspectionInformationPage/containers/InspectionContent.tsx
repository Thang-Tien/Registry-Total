import { Button, Collapse, Descriptions } from "antd";
import React from "react";
import CarOwner from "../../CarInformationPage/containers/CarOwner";
import CarInformation from "../../CarInformationPage/containers/CarInformation";
import CarParameter from "../../CarInformationPage/containers/CarParameter";
import {
    CheckSquareOutlined,
    CalendarOutlined,
    ToolOutlined,
    PhoneOutlined,
    MailOutlined,
    UserOutlined,
    DownloadOutlined,
} from "@ant-design/icons";
const { Item } = Descriptions;
const InspectionContent: React.FC = () => {
    const data = [
        {
            key: "owner",
            label: "Thông tin chủ sở hữu",
            children: <CarOwner />,
        },
        {
            key: "car",
            label: "Phương tiện",
            children: <CarInformation />,
        },
        {
            key: "parameter",
            label: "Thông số kỹ thuật",
            children: <CarParameter />,
        },
        {
            key: "inspection",
            label: "Thông tin đăng kiểm",
            children: (
                <Descriptions column={1} layout="vertical">
                    <Item
                        label={
                            <span>
                                <CheckSquareOutlined /> Số đăng kiểm
                            </span>
                        }
                    >
                        2023-003524
                    </Item>
                    <Item
                        label={
                            <span>
                                <CalendarOutlined /> Ngày đăng kiểm
                            </span>
                        }
                    >
                        14/12/2023
                    </Item>
                    <Item
                        label={
                            <span>
                                <CalendarOutlined /> Có hiệu lực đến ngày
                            </span>
                        }
                    >
                        14/06/2024
                    </Item>
                    <Item
                        label={
                            <span>
                                <ToolOutlined /> Đơn vị kiểm định
                            </span>
                        }
                    >
                        Trung tâm đăng kiểm Thành phố Hà Nội số 1
                    </Item>
                    <Item
                        label={
                            <span>
                                <PhoneOutlined /> Số điện thoại
                            </span>
                        }
                    >
                        0300090865
                    </Item>
                    <Item
                        label={
                            <span>
                                <MailOutlined /> Email
                            </span>
                        }
                    >
                        registryhanoi1@vr.com.vn
                    </Item>
                    <Item
                        label={
                            <span>
                                <UserOutlined /> Nhân viên đăng kiểm
                            </span>
                        }
                    >
                        Lê Vân Doanh
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
            <Button
                type="primary"
                style={{ marginTop: "12px", alignSelf: "center" }}
                size="large"
            >
                <DownloadOutlined /> Tải xuống đăng kiểm
            </Button>
        </div>
    );
};

export default InspectionContent;
