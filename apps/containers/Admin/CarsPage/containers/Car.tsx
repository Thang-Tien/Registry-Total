import { Descriptions } from "antd";
import { useEffect, useState } from "react";
import { IoCheckmark, IoClose } from "react-icons/io5";

const { Item } = Descriptions;

const Car = (props) => {
  const cars = props.data;

  function formatDate(s: string) {
    let value = s.split("-");
    let day = value[2].split("T")[0];
    return `${day}/${value[1]}/${value[0]}`;
  }

  return (
    <Descriptions column={2} style={{ padding: "1.2rem" }}>
      <Item label="Biển đăng kí">{cars.number_plate}</Item>
      <Item label="Số đăng kí">{cars.registration_number}</Item>
      <Item label="Ngày đăng kí">{formatDate(cars.registration_date)}</Item>
      <Item label="Loại phương tiện">{cars.type}</Item>
      <Item label="Nhãn hiệu">{cars.brand}</Item>
      <Item label="Số loại">{cars.model_code}</Item>
      <Item label="Số máy">{cars.engine_number}</Item>
      <Item label="Số khung">{cars.chassis_number}</Item>
      <Item label="Năm sản xuất">{cars.manufactured_year}</Item>
      <Item label="Nước sản xuất">{cars.manufactured_country}</Item>
      <Item label="Kinh doanh vận tải">
        {cars.purpose === "business" ? (
          <IoCheckmark style={{ color: "#379237" }} />
        ) : (
          <IoClose style={{ color: "#ED2B2A" }} />
        )}
      </Item>
      <Item label="Cải tạo" style={{ padding: 0 }}>
        {cars.recovered ? (
          <IoCheckmark style={{ color: "#379237" }} />
        ) : (
          <IoClose style={{ color: "#ED2B2A" }} />
        )}
      </Item>
    </Descriptions>
  );
};

export default Car;
