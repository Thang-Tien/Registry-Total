import { ConfigProvider, Table, Input, Space, Button, DatePicker } from "antd";
import classes from "./InspectionTable.module.scss";
import { DoubleRightOutlined, SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import { useRef, useState } from "react";
import Link from "next/link";

const { RangePicker } = DatePicker;

const processDate = (date) => {
  if (!date) return;
  const [month, day, year] = new Date(date).toLocaleDateString().split("/");
  return [day.padStart(2, "0"), month.padStart(2, "0"), year].join("/");
};

const InspectionTable = (props) => {
  const [data, setData] = useState([]);
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

  const handleTimeRangeSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleTimeRangeReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnDateFilterProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => {
      return (
        <div
          style={{
            padding: 8,
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            width: "30rem",
          }}
        >
          <RangePicker
            allowClear={false}
            placeholder={["Từ ngày", "Đến ngày"]}
            format="DD-MM-YYYY"
            value={selectedKeys[0]}
            onChange={(e) => {
              if(e!==null) setSelectedKeys(e.length ? [e] : []);
            }}
          />
          <Space size="middle" style={{ margin: "auto" }}>
            <Button
              role="reset"
              onClick={() => handleTimeRangeReset(clearFilters)}
            >
              Đặt lại
            </Button>
            <Button
              type="primary"
              role="search"
              onClick={() =>
                handleTimeRangeSearch(selectedKeys, confirm, dataIndex)
              }
              icon={<SearchOutlined />}
            >
              Tìm kiếm
            </Button>
          </Space>
        </div>
      );
    },
    onFilter: (value, record) =>
      new Date(record[dataIndex]) >= new Date(value[0]) &&
      new Date(record[dataIndex]) <= new Date(value[1]),
  });

  const getColumnSearchProps = (dataIndex) => ({
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
          placeholder={`Tìm kiếm ${dataIndex === "inspectionNumber" ? "số đăng kiểm" : "biển số xe "
            }`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space size="middle">
          <Button
            role="reset"
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="middle"
            style={{
              width: 90,
            }}
          >
            Đặt lại
          </Button>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="middle"
          >
            Tìm kiếm
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1890ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
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

  const testData = [];
  for (let index = 0; index < 100; index++) {
    data.push({
      key: index,
      inspectionNumber: index,
      numberPlate: index,
      inspectionDate: new Date(),
      expiredDate: new Date(),
    })
  }
  setData(testData);

  const columns = [
    {
      title: "Số đăng kiểm",
      dataIndex: "inspectionNumber",
      key: "inspectionNumber",
      align: "center",
      sorter: (a, b) => a.inspectionNumber.localeCompare(b.inspectionNumber),
      sortDirections: ["ascend"],
      showSorterTooltip: false,
      ...getColumnSearchProps("inspectionNumber"),
    },
    {
      title: "Biển số xe",
      dataIndex: "numberPlate",
      key: "numberPlate",
      align: "center",
      ...getColumnSearchProps("numberPlate"),
    },
    {
      title: "Ngày đăng kiểm",
      dataIndex: "inspectionDate",
      key: "inspectionDate",
      align: "center",
      render: (text) => processDate(text),
      sorter: (a, b) => new Date(a.inspectionDate).valueOf() - new Date(b.inspectionDate).valueOf(),
      sortDirections: ["ascend"],
      showSorterTooltip: false,
      ...getColumnDateFilterProps("inspectionDate"),
    },
    {
      title: "Ngày hết hạn",
      dataIndex: "expiredDate",
      key: "expiredDate",
      align: "center",
      render: (text) => processDate(text),
      sorter: (a, b) => new Date(a.expiredDate).valueOf() - new Date(b.expiredDate).valueOf(),
      sortDirections: ["descend", "ascend"],
      showSorterTooltip: false,
      ...getColumnDateFilterProps("expiredDate"),
    },
    {
      title: "",
      dataIndex: "action",
      key: "action",
      align: "center",
      render: (_, { key }) => {
        return (
          <Link className={classes.more} href={`/inspections/${key}`}>
            <DoubleRightOutlined />
          </Link>
        );
      },
    },
  ];

  const tableData = data.map((d) => {
    return {
      key: d.id,
      ...d,
      numberPlate: d.car.numberPlate,
    };
  });

  return (
    <ConfigProvider
      theme={{
        token: {
          fontWeightStrong: 500,
          colorFillAlter: "f5f5f5",
        },
      }}
    >
      <Table
        title={() => `Tổng số xe đã đăng kiểm: ${data.length}`}
        columns={columns}
        className={classes.table}
        dataSource={tableData}
        pagination={{
          position: ["bottomCenter"],
        }}
        scroll={{ x: 650 }}
      />
    </ConfigProvider>
  );
};

export default InspectionTable;