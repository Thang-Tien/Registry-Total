import { Descriptions } from "antd";

const { Item } = Descriptions;

const Specification = (props) => {
  const specification = props.specification;

  function formatString(s: string) {
    let tmp = s.split("tires");
    return `${tmp[0]}lốp${tmp[1]}`;
  }

  return (
    <Descriptions
      column={props.columnProps ? props.columnProps : 1}
      style={{ padding: "1.2rem" }}
      layout="vertical"
    >
      <Item label="Công thức bánh xe">{specification.wheel_formula}</Item>
      <Item label="Vết bánh xe">{specification.wheel_tread}</Item>
      <Item label="Kích thước bao">{specification.overall_dimension}</Item>
      <Item label="Kích thước lòng thùng hàng">
        {specification.container_dimension}
      </Item>
      <Item label="Chiều dài cơ sở">{specification.length_base}</Item>
      <Item label="Khối lượng bản thân">{specification.kerb_mass}</Item>
      <Item label="Khối lượng hàng CC theo TK/CP TGGT">
        {specification.designed_and_authorized_payload}
      </Item>
      <Item label="Khối lượng toàn bộ theo TK/CP TGGT">
        {specification.designed_and_authorized_total_mass}
      </Item>
      <Item label="Khối lượng kéo theo TK/CP TGGT">
        {specification.designed_and_authorized_towed_mass}
      </Item>
      <Item label="Số người cho phép chở">
        {specification.permissible_carry}
      </Item>
      <Item label="Loại nhiên liệu">{specification.fuel}</Item>
      <Item label="Thể tích làm việc của động cơ">
        {specification.engine_displacement}
      </Item>
      <Item label="Công suất lớn nhất trên tốc độ quay">
        {specification.maximum_output_to_rpm_ratio}
      </Item>
      <Item label="Số lượng lốp, cỡ lốp">
        {formatString(specification.number_of_tires_and_tire_size)}
      </Item>
    </Descriptions>
  );
};

export default Specification;
