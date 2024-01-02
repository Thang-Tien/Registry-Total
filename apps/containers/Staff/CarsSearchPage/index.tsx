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

export default function CarsSearchPage({ className, style }: Props) {
    useEffect(() => {
        document.title = "Tra cứu phương tiện";
    }, []);
    return (
        <div className={cx(className, styles.container)} style={style}>
            <Flex.Row style={{ width: "100%", minHeight: "100vh" }}>
                <NavBar active="cars/search" />
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
                                title: "Tra cứu phương tiện",
                            },
                        ]}
                        style={{ marginLeft: 30, marginTop: 30 }}
                    />
                    <div
                        style={{
                            width: "60%",
                            marginTop: 30,
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
