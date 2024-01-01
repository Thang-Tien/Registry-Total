"use client";

import {
    Steps,
    Input,
    Modal,
    Space,
    Button,
    Popconfirm,
    Card,
    Form,
    Col,
    Row,
    InputNumber,
    Checkbox,
    Result,
} from "antd";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import img from "./../../../../public/image/search-2.svg";
import Image from "next/image";
import {
    FileSearchOutlined,
    ToolOutlined,
    CheckCircleOutlined,
    CloseOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const CreateForm: React.FC = () => {
    const df = { name: "Thiện pờ rồ", age: 18 };
    const [user, setUser] = useState({
        user_id: "",
        centre_id: "",
        name: "",
        address: "",
        phone: 0,
        email: "",
        date_of_birth: "",
    });
    const [current, setCurrent] = useState(0); // current step
    const [error, setError] = useState(false);
    const [found, setFound] = useState(false); // data found or not
    const [isOpen, setIsOpen] = useState(false); // modal open or not
    const [options, setOptions] = useState([]);
    const [postData, setPostData] = useState({});
    const [totalInspection, setTotalInspection] = useState(null);

    useEffect(() => {
        const data =
            localStorage.getItem("data") === null
                ? JSON.stringify(df)
                : localStorage.getItem("data");
        if (data != null) setUser(JSON.parse(data));
        const fetchNumberPlateData = async () => {
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_HOSTNAME}/api/v1/cars/number_plate`
                );
                const data = await response.json();

                // Extracting relevant information and updating the options state
                const updatedOptions = data.data.map((item) => ({
                    value: item.number_plate,
                }));

                setOptions(updatedOptions);

                console.log(updatedOptions);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        const fetchData = async () => {
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_HOSTNAME}/api/v1/inspections/stat/total`
                );
                const data = await response.json();

                if (response.ok) {
                    // Increment the value by 1
                    const totalInspectionValue = data.data[0].value + 1;
                    setTotalInspection(totalInspectionValue);
                } else {
                    console.error("Error fetching data:", data);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
        fetchNumberPlateData();
    }, []);

    const inputItems = [
        {
            label: "Công thức bánh xe",
            name: "wheel_formula",
            placeholder: "VD: 6x6",
        },
        {
            type: "number",
            label: "Vết bánh xe",
            name: "wheel_tread",
            addonAfter: "mm",
        },
        {
            label: "Kích thước bao",
            name: "overall_dimension",
            addonAfter: "mm",
            placeholder: "VD: 4288 x 1535 x 1485",
        },
        {
            label: "Kích thước lòng thùng xe",
            name: "container_dimension",
            addonAfter: "mm",
            placeholder: "VD: 2495 x 1423 x 1110",
        },
        {
            type: "number",
            label: "Chiều dài cơ sở",
            name: "length_base",
            addonAfter: "mm",
        },
        {
            type: "number",
            label: "Khối lượng bản thân",
            name: "kerb_mass",
            addonAfter: "kg",
        },
        {
            label: "Khối lượng hàng CC theo TK/CP TGGT",
            name: "designed_and_authorized_payload",
            addonAfter: "kg",
            placeholder: "VD: 531/700",
        },
        {
            label: "Khối lượng toàn bộ theo TK/CP TGGT",
            name: "designed_and_authorized_total_mass",
            addonAfter: "kg",
            placeholder: "VD: 2964/2914",
        },
        {
            label: "Khối lượng kéo theo TK/CP TGGT",
            name: "designed_and_authorized_towed_mass",
            addonAfter: "kg",
            placeholder: "VD: 1899/1679",
        },
        {
            type: "number",
            label: "Số lượng người cho phép chở",
            name: "permissible_carry",
        },
        {
            type: "number",
            label: "Thể tích làm việc của động cơ",
            name: "engine_displacement",
            addonAfter: (
                <span>
                    cm<sup>3</sup>
                </span>
            ),
        },
        {
            label: "Công suất lớn nhất/tốc độ quay",
            name: "maximum_output_to_rpm_ratio",
            placeholder: "VD: 130kW/6333vph",
        },
        { label: "Loại nhiên liệu", name: "fuel" },
        {
            type: "number",
            label: "Số lượng lốp",
            name: "number_of_tires",
            addonAfter: "lốp",
        },
        {
            label: "Cỡ lốp/trục",
            name: "tire_size",
            placeholder: "VD: 225/65 R17",
        },
        {
            type: "checkbox",
            label: "Kinh doanh vận tải",
            name: "purpose",
        },
        {
            type: "checkbox",
            label: "Cải tạo",
            name: "recovered",
        },
    ];
    const stepsData = [
        {
            key: 0,
            title: "Tìm kiếm phương tiện",
            icon: <FileSearchOutlined />,
        },
        {
            key: 1,
            title: "Đăng kiểm phương tiện",
            icon: <ToolOutlined />,
        },
        { key: 2, title: "Hoàn tất đăng kiểm", icon: <CheckCircleOutlined /> },
    ];

    const nextStep = () => {
        setCurrent(current + 1);
    };

    const prevStep = () => {
        setCurrent(current - 1);
    };

    const InputBox = ({ type, label, name, addonAfter, placeholder }) => {
        return (
            // Flex based on screen width, 3 columns (xl), 2 columns (md), 1 column (xs)
            <Col xl={8} md={12} xs={24}>
                <Form.Item
                    label={type !== "checkbox" && label}
                    name={name}
                    rules={
                        type !== "checkbox" && [
                            {
                                required: true,
                                message: "Trường này không được để trống!",
                            },
                        ]
                    }
                    valuePropName={type === "checkbox" ? "checked" : "value"}
                >
                    {type === "number" && (
                        <InputNumber
                            addonAfter={addonAfter}
                            style={{ width: "100%" }}
                        />
                    )}
                    {type === "checkbox" && (
                        <Checkbox>{type === "checkbox" && label}</Checkbox>
                    )}
                    {!type && (
                        <Input
                            addonAfter={addonAfter}
                            placeholder={placeholder}
                        />
                    )}
                </Form.Item>
            </Col>
        );
    };

    const onFinish = async (values) => {
        // Set checkbox values to 0 if they are undefined
        const updatedValues = {
            ...values,
            purpose: values.purpose ? "business" : "personal",
            recovered: values.recovered ? "1" : "0",
        };

        // Add attributes from the user object to the postData
        const updatedPostData = {
            ...postData,
            ...updatedValues,
            centre_id: user.centre_id,
            user_id: user.user_id,
        };

        // Update the state of postData
        setPostData(updatedPostData);

        // Handle the form submission here
        console.log("Received values:", updatedValues);
        console.log("Posting data:", updatedPostData);

        try {
            // Make the API call
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_HOSTNAME}/api/v1/inspections/createInspection`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(updatedPostData),
                }
            );

            if (response.ok) {
                console.log("Data posted successfully");
                // You can do something after successful posting
                setPostData({});
                nextStep();
            } else {
                console.error("Failed to post data");
                // Handle the error as needed
            }
        } catch (error) {
            console.error("Error during API call:", error);
            // Handle the error as needed
        }
    };

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <Steps
                current={current}
                items={stepsData}
                labelPlacement="vertical"
                size="small"
                status={error ? "error" : "process"}
                style={{
                    width: "60%",
                    alignSelf: "center",
                    marginTop: "30px",
                    marginBottom: "30px",
                }}
            />

            {current === 0 && (
                <>
                    <Input.Search
                        allowClear
                        enterButton
                        placeholder="Nhập biển số xe"
                        size="large"
                        style={{
                            width: "60%",
                            alignSelf: "center",
                        }}
                        onChange={() => {
                            setFound(false);
                            setError(false);
                        }}
                        onSearch={(value) => {
                            setError(false);

                            // Trim the entered value to remove leading and trailing spaces
                            const trimmedValue = value.trim();

                            // Check for an exact case-sensitive match in the options array
                            const exactMatch = options.some(
                                (option) => option.value === trimmedValue
                            );

                            setFound(exactMatch);
                            if (exactMatch) {
                                setPostData({
                                    ...postData,
                                    number_plate: trimmedValue,
                                });
                                console.log(postData);
                            }

                            if (!exactMatch) {
                                setError(true);
                            }
                        }}
                        status={error && "error"}
                    />

                    {/* Code phần modal, sau khi bấm xem thông tin*/}
                    {/* <Modal
                        open={isOpen}
                        footer={null}
                        title="Thông tin phương tiện"
                        onCancel={() => setIsOpen(false)}
                        width={670}
                        closeIcon={
                            <CloseOutlined style={{ fontSize: "24px" }} />
                        }
                    >
                        Content gì đó của modal
                    </Modal> */}

                    {/* Khi tìm thấy phương tiện thì hiển thị from (found == true) */}
                    {found && (
                        <Space
                            style={{
                                marginBottom: "2rem",
                                marginTop: "1rem",
                                alignSelf: "center",
                            }}
                            size="middle"
                        >
                            {/* <Button onClick={() => setIsOpen(true)}>
                                Xem thông tin
                            </Button> */}
                            <Popconfirm
                                title="Đăng kiểm phương tiện"
                                description="Bạn có chắc chắn muốn đăng kiểm phương tiện này?"
                                cancelText="Hủy"
                                okText="Tiếp tục"
                                cancelButtonProps={{ size: "middle" }}
                                okButtonProps={{ size: "middle" }}
                                onConfirm={() => {
                                    nextStep();
                                    setFound(false);
                                }}
                            >
                                <Button type="primary">Tiếp tục</Button>
                            </Popconfirm>
                        </Space>
                    )}
                    {/* Anh minh hoa */}
                    <Image
                        alt=""
                        src={img}
                        width={250}
                        style={{ alignSelf: "center", marginTop: "30px" }}
                    />
                </>
            )}

            {current === 1 && (
                <Card
                    title="Đăng kiểm phương tiện"
                    extra={<Button onClick={() => prevStep()}>Trở lại</Button>}
                    style={{ width: "70%", alignSelf: "center" }}
                >
                    <Form
                        name="createForm"
                        layout="vertical"
                        autoComplete="off"
                        onFinish={onFinish}
                    >
                        {/* Gap 30px horizontal, 16px vertical */}
                        <Row gutter={[30, 16]} align="bottom">
                            {/* Mapping input items in array */}
                            {inputItems.map((item) => {
                                return (
                                    <InputBox
                                        type={item.type}
                                        key={item.name}
                                        label={item.label}
                                        name={item.name}
                                        addonAfter={item.addonAfter}
                                        placeholder={item.placeholder}
                                    />
                                );
                            })}

                            <Col span={24}>
                                <Space
                                    style={{
                                        width: "100%",
                                        justifyContent: "center",
                                    }}
                                    size="large"
                                >
                                    <Button htmlType="reset">Đặt lại</Button>
                                    <Button type="primary" htmlType="submit">
                                        Hoàn tất
                                    </Button>
                                </Space>
                            </Col>
                        </Row>
                    </Form>
                </Card>
            )}

            {current === 2 && (
                <Result
                    status="success"
                    title="Đăng kiểm cho phương tiện thành công"
                    extra={
                        <Space size="large">
                            <Button
                                size="large"
                                onClick={() => {
                                    setCurrent(0);
                                    console.log(postData);
                                }}
                            >
                                Quay về
                            </Button>
                            <Link href={`/inspection/${totalInspection}`}>
                                <Button type="primary" size="large">
                                    Xem đăng kiểm
                                </Button>
                            </Link>
                        </Space>
                    }
                />
            )}
        </div>
    );
};

export default CreateForm;
