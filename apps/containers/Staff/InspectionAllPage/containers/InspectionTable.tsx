"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Card, Statistic, Table, Input, Space, Button } from "antd";
import { DoubleRightOutlined, SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import { AlignType } from "rc-table/lib/interface";
import { SortOrder, FilterDropdownProps } from "antd/lib/table/interface";

const InspectionTable: React.FC = () => {
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
    const [dataSource, setDataSource] = useState([]);
    const [inspectionCount, setInspectionCount] = useState<number | null>(null);
    const [searchText, setSearchText] = useState("");
    const [searchedColumn, setSearchedColumn] = useState("");
    const searchInput = useRef(null);

    useEffect(() => {
        const data =
            localStorage.getItem("data") === null
                ? JSON.stringify(df)
                : localStorage.getItem("data");
        if (data != null) setUser(JSON.parse(data));
        const fetchCountAll = async () => {
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_HOSTNAME}/api/v1/inspections/stat/each_centre/count/${user.centre_id}`
                );
                const data = await response.json();

                if (response.ok) {
                    // Assuming the API response contains the count in the 'total' field
                    setInspectionCount(data.data[0].total);
                } else {
                    console.error("Failed to fetch data from API:", data.error);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        const fetchDataSource = async () => {
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_HOSTNAME}/api/v1/inspections/${user.centre_id}`
                );

                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }

                const data = await response.json();

                setDataSource(
                    data.data.map((item, index) => ({
                        key: String(index + 1),
                        inspection_id: item.inspection_id,
                        inspection_number: item.inspection_number,
                        number_plate: item.number_plate,
                        inspection_date: new Date(
                            item.inspection_date
                        ).toLocaleDateString("en-GB"), // Use 'en-GB' locale for dd/mm/yyyy format
                        expired_date: new Date(
                            item.expired_date
                        ).toLocaleDateString("en-GB"), // Use 'en-GB' locale for dd/mm/yyyy format
                    }))
                );

                console.log("Updated data source:", dataSource);
            } catch (error) {
                console.error(
                    "There has been a problem with your fetch operation:",
                    error
                );
            }
        };
        fetchCountAll();
        fetchDataSource();
    }, [user.user_id]);

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText("");
    };

    /*
        Return an object containing properties for configuring table column filtering
    */
    const getColumnSearchProps = (dataIndex) => ({
        /*
            Returns the content of the filter dropdown
            Render an input component, with button for reset and search
        */
        filterDropdown: ({
            setSelectedKeys,
            selectedKeys,
            confirm,
            clearFilters,
        }: FilterDropdownProps) => (
            <div
                style={{
                    padding: 8,
                }}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Tìm kiếm ${
                        dataIndex === "inspection_number"
                            ? "số đăng kiểm"
                            : "biển số xe "
                    }`}
                    value={selectedKeys[0]}
                    onChange={(e) =>
                        setSelectedKeys(e.target.value ? [e.target.value] : [])
                    }
                    onPressEnter={() =>
                        handleSearch(selectedKeys, confirm, dataIndex)
                    }
                    style={{
                        marginBottom: 8,
                        display: "block",
                    }}
                />
                <Space size="middle">
                    <Button
                        role="reset"
                        onClick={() =>
                            clearFilters && handleReset(clearFilters)
                        }
                        size="middle"
                        style={{
                            width: 90,
                        }}
                    >
                        Đặt lại
                    </Button>
                    <Button
                        type="primary"
                        onClick={() =>
                            handleSearch(selectedKeys, confirm, dataIndex)
                        }
                        icon={<SearchOutlined />}
                        size="middle"
                    >
                        Tìm kiếm
                    </Button>
                </Space>
            </div>
        ),
        /*
            Define the icon for the filter in the column header
        */
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? "#1890ff" : undefined,
                }}
            />
        ),
        /*
            Determine whether a record should be displayed based on the filter value
        */
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes(value.toLowerCase()),
        /*
            Called when the filter dropdown is open or close
        */
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => (searchInput as any).current?.select(), 100);
            }
        },
        /*
            Define how the column's content should be rendered
        */
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: "#ffc069",
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ""}
                />
            ) : (
                text
            ),
    });

    // SAMPLE DATA
    const columns = [
        {
            title: "Số đăng kiểm",
            dataIndex: "inspection_number",
            key: "inspection_number",
            align: "center" as AlignType,
            sorter: (a, b) =>
                a.inspection_number.localeCompare(b.inspection_number),
            sortDirections: ["ascend", "descend"] as SortOrder[],
            showSorterTooltip: false,
            ...getColumnSearchProps("inspection_number"),
        },
        {
            title: "Biển số xe",
            dataIndex: "number_plate",
            key: "number_plate",
            align: "center" as AlignType,
            sorter: (a, b) =>
                a.inspection_number.localeCompare(b.inspection_number),
            sortDirections: ["ascend", "descend"] as SortOrder[],
            showSorterTooltip: false,
            ...getColumnSearchProps("number_plate"),
        },
        {
            title: "Ngày đăng kiểm",
            dataIndex: "inspection_date",
            key: "inspection_date",
            align: "center" as AlignType,
        },
        {
            title: "Ngày hết hạn",
            dataIndex: "expired_date",
            key: "expired_date",
            align: "center" as AlignType,
        },
        {
            title: "",
            dataIndex: "action",
            key: "action",
            align: "center" as AlignType,
            render: (text, record) => (
                <Link href={`/inspection/${record.inspection_id}`}>
                    <DoubleRightOutlined style={{ color: "black" }} />
                </Link>
            ),
        },
    ];

    // Return the search props for each column
    return (
        <Table
            title={() => (
                <div
                    style={{
                        fontSize: "16px",
                        fontWeight: "bold",
                        padding: "0 10px",
                    }}
                >
                    Tổng số xe đã đăng kiểm: {inspectionCount || 0}
                </div>
            )}
            dataSource={dataSource}
            columns={columns}
            pagination={{ position: ["bottomCenter"] }}
            scroll={{ x: "calc(100vw - 256px - 128px)" }} // Adjust the value as needed
            style={{ margin: 50 }}
        />
    );
};

export default InspectionTable;
