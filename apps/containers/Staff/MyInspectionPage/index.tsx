"use client";
import cx from "classnames";
import styles from "./index.module.scss";
import Flex from "@/modules/ui/components/Flex";
import NavBar from "../NavBar";
import InspectionTable from "./containers/InspectionTable";
import { Breadcrumb } from "antd";
import React, { useEffect } from "react";
export type Props = {
    className?: string;
    style?: React.CSSProperties;
};

export default function MyInspectionPage({ className, style }: Props) {
    useEffect(() => {
        document.title = "Đăng kiểm của tôi";
    }, []);
    return (
        <div className={cx(className, styles.container)} style={style}>
            <Flex.Row style={{ width: "100%", minHeight: "100vh" }}>
                <NavBar active="inspections" />
                <div
                    style={{
                        flex: "1",
                        display: "flex",
                        flexDirection: "column",
                        background: "#e4e4e7",
                    }}
                >
                    <Breadcrumb
                        separator=">"
                        items={[
                            {
                                title: "Nhà của tôi",
                            },
                            {
                                title: "Quản lý đăng kiểm",
                            },
                            {
                                title: "Đăng kiểm của tôi",
                            },
                        ]}
                        style={{ marginLeft: 30, marginTop: 30 }}
                    />
                    <InspectionTable />
                </div>
            </Flex.Row>
        </div>
    );
}
