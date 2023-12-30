import cx from "classnames";
import styles from "./index.module.scss";

import Count from "./Count";
import LineChart from "./LineChart";
import Predict from "./Predict";
import { useEffect } from "react";
import Flex from "@/modules/ui/components/Flex";
import NavBar from "../NavBar";
import ChartLine from "../HomePage/containers/ChartLine";

export type Props = {
  className?: string;
  style?: React.CSSProperties;
};

const StatisticsPage = ({ className, style }: Props) => {
  useEffect(() => {
    document.title = "Thống kê";
  }, []);

  return (
    <div className={cx(className, styles.container)} style={style}>
      <Flex.Row style={{ height: "100vh", width: "100vw" }} padding={"0"}>
        <NavBar active="statistics" />"
        <div
          style={{
            background: "#e4e4e7",
            width: "calc(100vw - 256px - 8px)",
            overflow: "auto",
          }}
        >
          <Flex.Col
            justifyContent="center"
            gap="20px"
            style={{ height: "100vh", margin: "0 50px"}}
          >
            <Flex.Row gap="50px" justifyContent="center" style={{height: "50%"}}>
              <Count />
              <ChartLine />
            </Flex.Row>

            <LineChart />
          {/* <Predict height={300} /> */}
          </Flex.Col>
        </div>
      </Flex.Row>
    </div>
  );
};

export default StatisticsPage;
