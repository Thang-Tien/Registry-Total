"use client";
import cx from "classnames";
import styles from "./index.module.scss";
import Flex from "@/modules/ui/components/Flex";
import NavBar from "../NavBar";
import SearchForm from "./containers/SearchForm";
import { Breadcrumb } from "antd";
import React, { useEffect } from "react";
export type Props = {
    className?: string;
    style?: React.CSSProperties;
};

export default function InspectionSearchPage({ className, style }: Props) {
    useEffect(() => {
        document.title = "Tra cứu đăng kiểm";
    }, []);
    return (
        <div className={cx(className, styles.container)} style={style}>
            <Flex.Row style={{ width: "100%", minHeight: "100vh" }}>
                <NavBar active="inspection" />
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
                                title: "Tra cứu đăng kiểm",
                            },
                        ]}
                        style={{ marginLeft: 30, marginTop: 30 }}
                    />
                    <div
                        style={{
                            width: "60%",
                            margin: 50,
                            alignSelf: "center",
                        }}
                    >
                        <SearchForm />
                    </div>
                </div>
            </Flex.Row>
        </div>
    );
}
