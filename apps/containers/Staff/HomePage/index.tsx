"use client";
import cx from "classnames";
import styles from "./index.module.scss";
import Flex from "@/modules/ui/components/Flex";
import NavBar from "../NavBar";
import All from "./containers/All";
import ThisYear from "./containers/ThisYear";
import ThisMonth from "./containers/ThisMonth";
import ChartLine from "./containers/ChartLine";
import ChartPie from "./containers/ChartPie";
import MyRegistrations from "./containers/MyRegistrations";
import RecentInspection from "./containers/RecentInspection";
import { Breadcrumb } from "antd";
import React, { useEffect, Component } from "react";
export type Props = {
    className?: string;
    style?: React.CSSProperties;
};

export default function DashboardPage({ className, style }: Props) {
    useEffect(() => {
        document.title = "Bảng điều khiển";
    }, []);
    return (
        <div className={cx(className, styles.container)} style={style}>
            <Flex.Row style={{ width: "100%" }} padding={"0"}>
                <NavBar active="dashboard" />
                <div
                    style={{
                        background: "#e4e4e7",
                        width: "calc(100vw - 256px - 8px)",
                    }}
                >
                    <Breadcrumb
                        separator=">"
                        items={[
                            {
                                title: "Nhà của tôi",
                            },
                            {
                                title: "Bảng điều khiển",
                            },
                        ]}
                        style={{ marginLeft: 30, marginTop: 30 }}
                    />
                    <Flex.Col gap={"20px"} style={{ padding: "24px 32px" }}>
                        {/* top, down: 24px, left, right: 32px */}
                        <Flex.Row gap={"20px"}>
                            <All />
                            <ThisYear />
                            <ThisMonth />
                            <MyRegistrations />
                        </Flex.Row>
                        <Flex.Row gap={"20px"}>
                            <ChartLine />
                            <ChartPie />
                        </Flex.Row>
                        <Flex.Row>
                            <RecentInspection />
                        </Flex.Row>
                    </Flex.Col>
                </div>
            </Flex.Row>
        </div>
    );
}
