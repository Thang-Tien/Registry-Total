import { Image } from "antd";
import image from "../../../../public/image/no-data.svg";

const DataNotFound = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1.6rem 2rem",
      }}
    >
      <Image src={image} preview={false} width={200} />
      <span style={{ marginTop: "2.4rem" }}>{props.text}</span>
    </div>
  );
};

export default DataNotFound;
