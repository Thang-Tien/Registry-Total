"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { Card, Statistic, Table, Input, Space, Button } from "antd";
import { DoubleRightOutlined, SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";

const dataSource = [
    {
        key: "1",
        inspectionNumber: "2023-003523",
        plateNumber: "31H6-282.35",
        inspectionDate: "13/12/2023",
        expiredDate: "13/06/2024",
        action: "",
    },
    {
        key: "2",
        inspectionNumber: "2023-003523",
        plateNumber: "31H6-282.35",
        inspectionDate: "13/12/2023",
        expiredDate: "13/06/2024",
        action: "",
    },
    {
        key: "3",
        inspectionNumber: "2023-003523",
        plateNumber: "31H6-282.35",
        inspectionDate: "13/12/2023",
        expiredDate: "13/06/2024",
        action: "",
    },
    {
        key: "4",
        inspectionNumber: "2023-003523",
        plateNumber: "31H6-282.35",
        inspectionDate: "13/12/2023",
        expiredDate: "13/06/2024",
        action: "",
    },
    {
        key: "5",
        inspectionNumber: "2023-003523",
        plateNumber: "31H6-282.35",
        inspectionDate: "13/12/2023",
        expiredDate: "13/06/2024",
        action: "",
    },
    {
        key: "6",
        inspectionNumber: "2023-003523",
        plateNumber: "31H6-282.35",
        inspectionDate: "13/12/2023",
        expiredDate: "13/06/2024",
        action: "",
    },
    {
        key: "7",
        inspectionNumber: "2023-003523",
        plateNumber: "31H6-282.35",
        inspectionDate: "13/12/2023",
        expiredDate: "13/06/2024",
        action: "",
    },
    {
        key: "8",
        inspectionNumber: "2023-003523",
        plateNumber: "31H6-282.35",
        inspectionDate: "13/12/2023",
        expiredDate: "13/06/2024",
        action: "",
    },
    {
        key: "9",
        inspectionNumber: "2023-003523",
        plateNumber: "31H6-282.35",
        inspectionDate: "13/12/2023",
        expiredDate: "13/06/2024",
        action: "",
    },
    {
        key: "10",
        inspectionNumber: "2023-003524",
        plateNumber: "31H6-282.35",
        inspectionDate: "13/12/2023",
        expiredDate: "13/06/2024",
        action: "",
    },
    {
        key: "11",
        inspectionNumber: "2023-003522",
        plateNumber: "31H6-282.35",
        inspectionDate: "13/12/2023",
        expiredDate: "13/06/2024",
        action: "",
    },
];

const InspectionTable: React.FC = () => {
    // const [tableParams, setTableParams] = useState<TableParams>({
    //     pagination: {
    //         current: 1,
    //         pageSize: 10,
    //     },
    // });

    const [searchText, setSearchText] = useState("");
    const [searchedColumn, setSearchedColumn] = useState("");
    const searchInput = useRef(null);

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
        }) => (
            <div
                style={{
                    padding: 8,
                }}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Tìm kiếm ${
                        dataIndex === "inspectionNumber"
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
                setTimeout(() => searchInput.current?.select(), 100);
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
            dataIndex: "inspectionNumber",
            key: "inspectionNumber",
            align: "center",
            sorter: (a, b) =>
                a.inspectionNumber.localeCompare(b.inspectionNumber),
            sortDirections: ["ascend", "descend"],
            showSorterTooltip: false,
            ...getColumnSearchProps("inspectionNumber"),
        },
        {
            title: "Biển số xe",
            dataIndex: "plateNumber",
            key: "plateNumber",
            align: "center",
            sorter: (a, b) =>
                a.inspectionNumber.localeCompare(b.inspectionNumber),
            sortDirections: ["ascend", "descend"],
            showSorterTooltip: false,
            ...getColumnSearchProps("plateNumber"),
        },
        {
            title: "Ngày đăng kiểm",
            dataIndex: "inspectionDate",
            key: "inspectionDate",
            align: "center",
        },
        {
            title: "Ngày hết hạn",
            dataIndex: "expiredDate",
            key: "expiredDate",
            align: "center",
        },
        {
            title: "",
            dataIndex: "action",
            key: "action",
            align: "center",
            render: () => {
                return (
                    <Link href="/inspection/id">
                        <DoubleRightOutlined style={{ color: "black" }} />
                    </Link>
                );
            },
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
                    Tổng số xe đã đăng kiểm: 1000
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
