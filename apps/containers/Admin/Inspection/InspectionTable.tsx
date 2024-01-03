import { ConfigProvider, Table, Input, Space, Button, DatePicker } from "antd";
import classes from "./InspectionTable.module.scss";
import { DoubleRightOutlined, SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const { RangePicker } = DatePicker;

const InspectionTable = (props) => {
  const [data, setData] = useState([] as any);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  const searchInput = useRef(null);

  function formatDate(s: string) {
    let value = s.split("-");
    let day = value[2].split("T")[0];
    return `${day}/${value[1]}/${value[0]}`;
  }

  const compareDates = (a: string, b: string): number => {
    let tmp = a.split("/");
    const dateA = new Date(`${tmp[2]}/${tmp[1]}/${tmp[0]}`);
    tmp = b.split("/");
    const dateB = new Date(`${tmp[2]}/${tmp[1]}/${tmp[0]}`);
    if (dateA < dateB) return -1;
    if (dateA > dateB) return +1;
    return 0;
  };

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters, confirm) => {
    clearFilters();
    setSearchText("");
    confirm();
    setSearchText("");
    setSearchedColumn("");
  };

  const handleTimeRangeSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleTimeRangeReset = (clearFilters, confirm) => {
    clearFilters();
    setSearchText("");
    confirm();
    setSearchText("");
    setSearchedColumn("");
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
              if (e !== null) setSelectedKeys(e.length ? [e] : []);
            }}
          />
          <Space size="middle" style={{ margin: "auto" }}>
            <Button
              role="reset"
              onClick={() => handleTimeRangeReset(clearFilters, confirm)}
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
          placeholder={`Tìm kiếm ${
            dataIndex === "inspectionNumber" ? "số đăng kiểm" : "biển số xe "
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
            onClick={() => clearFilters && handleReset(clearFilters, confirm)}
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
        setTimeout(() => (searchInput.current as any)?.select(), 100);
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

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      await delay(1500);
      try {
        const response = await fetch(
          `http://fall2324w3g10.int3306.freeddns.org/api/v1/inspections?centre_id=${props.centerId}`
        );
        if (!response.ok) throw new Error("Fail to get data");

        const tmp = await response.json();
        const tmpData: any[] = [];
        console.log(tmp.data);

        tmp.data.forEach((e) => {
          tmpData.push({
            key: e.inspection_id,
            inspectionNumber: e.inspection_number,
            numberPlate: `${e.number_plate}`,
            inspectionDate: formatDate(e.inspection_date),
            expiredDate: formatDate(e.expired_date),
          });
        });

        setData(tmpData);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    getData();
  }, []);

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
      render: (text) => text,
      sorter: (a, b) => compareDates(a.inspectionDate, b.inspectionDate),
      sortDirections: ["ascend"],
      showSorterTooltip: false,
      ...getColumnDateFilterProps("inspectionDate"),
    },
    {
      title: "Ngày hết hạn",
      dataIndex: "expiredDate",
      key: "expiredDate",
      align: "center",
      render: (text) => text,
      sorter: (a, b) => compareDates(a.expiredDate, b.expiredDate),
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
          <Link className={classes.more} href={`/inspection/${key}`}>
            <DoubleRightOutlined />
          </Link>
        );
      },
    },
  ];

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
        loading={loading}
        columns={columns as any}
        className={classes.table}
        dataSource={data}
        pagination={{
          position: ["bottomCenter"],
        }}
        scroll={{ x: 650 }}
      />
    </ConfigProvider>
  );
};

export default InspectionTable;
