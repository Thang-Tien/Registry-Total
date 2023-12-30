import cx from "classnames";
import styles from "./index.module.scss";
import { useState, useEffect } from "react";
import ResultList from "../../../modules/ui/components/Search/ResultList";
import SearchInput from "../../../modules/ui/components/Search/SearchInput";
import Flex from "@/modules/ui/components/Flex";
import NavBar from "../NavBar";

export type Props = {
  className?: string;
  style?: React.CSSProperties;
};

const InspectionPage = ({ className, style }: Props) => {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([
    { id: "", numberPlate: "", registrationNumber: "" },
  ]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = "Tra cứu đăng kiểm";
  }, []);

  return (
    <div className={cx(className, styles.container)} style={style}>
      <Flex.Row style={{ height: "100vh", width: "100vw" }} padding={"0"}>
        <NavBar active="inspection" />"
        <div
          style={{
            background: "#e4e4e7",
            width: "calc(100vw - 256px - 8px)",
            overflow: "auto",
          }}
        >
          <div
            style={{
              maxWidth: "60rem",
              margin: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <SearchInput
              setData={setData}
              setSearchText={setSearchText}
              setLoading={setLoading}
            />
            <ResultList
              listData={data}
              searchText={searchText}
              loading={loading}
            />
          </div>
        </div>
      </Flex.Row>
    </div>
  );
};

export default InspectionPage;
