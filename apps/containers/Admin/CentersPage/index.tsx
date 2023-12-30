"use client";

import cx from "classnames";
import styles from "./index.module.scss";
import { useEffect } from "react";
import Flex from "@/modules/ui/components/Flex";
import NavBar from "../NavBar";
import CenterCreate from "./containers/CenterCreate";
import CenterList from "./containers/CenterList";

export type Props = {
  className?: string;
  style?: React.CSSProperties;
};

export default function CenterPage({ className, style }: Props) {
  useEffect(() => {
    document.title = "Tất cả trung tâm";
  }, []);

  return (
    <div className={cx(className, styles.container)} style={style}>
      <Flex.Row style={{ height: "100vh", width: "100vw" }} padding={"0"}>
        <NavBar active="centers" />"
        <div
          style={{
            background: "#e4e4e7",
            width: "calc(100vw - 256px - 8px)",
            overflow: "auto",
            display: "flex",
            justifyContent: "center",
            padding: "100px 0"
          }}
        >
          <Flex.Col style={{width:"640px"}}>
            <CenterCreate />
            <CenterList />
          </Flex.Col>
        </div>
      </Flex.Row>
    </div>
  );
}
