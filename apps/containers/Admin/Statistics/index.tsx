"use client";

import cx from "classnames";
import styles from "./index.module.scss";

import Count from "./Count";
import LineChart from "./LineChart";
import { useEffect } from "react";
import Flex from "@/modules/ui/components/Flex";
import NavBar from "../NavBar";
import ChartPie from "../HomePage/containers/ChartPie";
import ColumnChart from "./ColumnChart";

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
        <NavBar active="statistic" openMenu="" />"
        <div
          style={{
            background: "#e4e4e7",
            width: "calc(100vw - 256px - 8px)",
            overflow: "auto",
          }}
        >
          <Flex.Col
            gap="20px"
            justifyContent="center"
            style={{ margin: "50px 50px" }}
          >
            <Flex.Row
              gap="24px"
              justifyContent="center"
              style={{}}
            >
              <Flex.Cell style={{width: "25%"}}>
                <Count />
              </Flex.Cell>
              <Flex.Cell style={{width: "80%"}}>
                <ColumnChart />
              </Flex.Cell>
            </Flex.Row>
            <Flex.Row gap="24px" justifyContent="center">
              <Flex.Cell style={{ width: "66%" }}>
                <LineChart />
              </Flex.Cell>
              <Flex.Cell style={{ width: "38%" }}>
                <ChartPie height={"405px"} />
              </Flex.Cell>
            </Flex.Row>
          </Flex.Col>
        </div>
      </Flex.Row>
    </div>
  );
};

export default StatisticsPage;
