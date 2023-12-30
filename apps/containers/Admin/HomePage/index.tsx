import cx from "classnames";
import styles from "./index.module.scss";
import Flex from "@/modules/ui/components/Flex";
import NavBar from "../NavBar";
import All from "./containers/All";
import ThisYear from "./containers/ThisYear";
import ThisMonth from "./containers/ThisMonth";
import Centers from "./containers/Centers";
import ChartLine from "./containers/ChartLine";
import ChartPie from "./containers/ChartPie";
import TopCenter from "./containers/TopCenter";
import { useEffect } from "react";

export type Props = {
  className?: string;
  style?: React.CSSProperties;
};

export default function HomePage({ className, style }: Props) {
  useEffect(() => {
    document.title = "Đăng kiểm Việt Nam";
  },[]);
  
  return (
    <div className={cx(className, styles.container)} style={style}>
      <Flex.Row style={{ height: "100vh", width: "100vw" }} padding={"0"}>
        <NavBar active="" />"
        <div
          style={{ background: "#e4e4e7", width: "calc(100vw - 256px - 8px)", overflow: "auto" }}
        >
          <Flex.Col gap={"20px"} style={{ padding: "24px 32px" }}>
            <Flex.Row gap={"20px"}>
              <All />
              <ThisYear />
              <ThisMonth />
              <Centers />
            </Flex.Row>
            <Flex.Row gap={"20px"}>
              <ChartLine />
              <ChartPie />
            </Flex.Row>
            <TopCenter />
          </Flex.Col>
        </div>
      </Flex.Row>
    </div>
  );
}
