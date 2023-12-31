"use client";

import React, { useState, useEffect } from "react";
import { AutoComplete, Input, List, Typography, Skeleton, Avatar } from "antd";
import Image from "next/image";
import searchImage from "./../../../../public/image/search-1.svg";
import notFoundImage from "./../../../../public/image/void.svg";
import inspectionImage from "./../../../../public/image/checked.png";
import Link from "next/link";

const { Text } = Typography;

const SearchForm: React.FC = () => {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_HOSTNAME}/api/v1/cars/number_plate`
                );
                const data = await response.json();

                // Extracting relevant information and updating the options state
                const updatedOptions = data.data.map((item) => ({
                    car_id: item.car_id,
                    value: item.number_plate,
                    registration_number: item.registration_number,
                }));

                setOptions(updatedOptions);

                console.log(updatedOptions);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    const [selectedValues, setSelectedValues] = useState<string[]>([]);
    const [searchStatus, setSearchStatus] = useState<string>("Start");

    const handleSearch = (value) => {
        // Check if the search value is empty
        if (value.trim() === "") {
            // If it's empty, set the status to "Start"
            setSearchStatus("Start");
            return;
        }

        // Filter options based on the search value
        const matchingOptions = options.filter((option) =>
            option.value.toUpperCase().includes(value.trim().toUpperCase())
        );

        // Set the status based on whether options were found
        setSearchStatus(matchingOptions.length > 0 ? "List" : "Not Found");

        // Do something with the selected values, for example, store them in state
        setSelectedValues(matchingOptions);

        // // Log the selected values
        // console.log("Selected Values:", matchingOptions);
    };

    return (
        <div>
            <AutoComplete
                style={{ width: "100%" }}
                // options={options}
                // filterOption={(inputValue, option) =>
                //     option?.value
                //         .toUpperCase()
                //         .indexOf(inputValue.trim().toUpperCase()) !== -1
                // }
            >
                <Input.Search
                    size="large"
                    placeholder="Nhập biển số xe"
                    enterButton
                    allowClear
                    style={{ width: "100%" }}
                    onSearch={handleSearch}
                />
            </AutoComplete>

            {searchStatus === "Start" && (
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <br />
                    <Image
                        alt=""
                        src={searchImage}
                        width={250}
                        style={{ margin: "4rem 0" }}
                    />
                    <br />
                    <Text style={{ textAlign: "center" }}>
                        Bắt đầu tìm kiếm phương tiện nào!
                    </Text>
                </div>
            )}
            {searchStatus === "List" && (
                <List
                    itemLayout="horizontal"
                    style={{ backgroundColor: "#fff", marginTop: 50 }}
                    bordered
                    pagination={{
                        position: "bottom",
                        align: "center",
                        pageSize: 8,
                    }}
                    dataSource={selectedValues}
                    renderItem={(item) => (
                        <List.Item
                            actions={[
                                <Link href={`/cars/${item.car_id}`}>
                                    Xem chi tiết
                                </Link>,
                            ]}
                        >
                            <List.Item.Meta
                                avatar={
                                    <Image
                                        alt=""
                                        src={inspectionImage}
                                        width={30}
                                    />
                                }
                                title={item.value}
                                description={"#" + item.registration_number}
                            />
                        </List.Item>
                    )}
                />
            )}
            {searchStatus === "Not Found" && (
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Skeleton
                        active
                        title={false}
                        paragraph={{ rows: 10, width: "100%" }}
                        loading={false}
                        style={{
                            margin: "4rem 0",
                        }}
                    >
                        <Image
                            alt=""
                            src={notFoundImage}
                            width={250}
                            style={{ margin: "4rem 0" }}
                        />
                        <br />
                        <Text>Không tìm thấy phương tiện nào!</Text>
                    </Skeleton>
                </div>
            )}
        </div>
    );
};

export default SearchForm;
