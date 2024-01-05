"use client";
import Settings from "./module/Settings";
import cx from "classnames";
import styles from "./styles/index.module.scss";
import Flex from "@/modules/ui/components/Flex";
import NavBar from "../NavBar";

import { Breadcrumb } from "antd";

export type Props = {
    mode: string;
    className?: string;
    style?: React.CSSProperties;
};

export default function SettingsPage({ className, style, mode }: Props) {
    return (
        <div className={cx(className, styles.container)} style={style}>
            <Flex.Row style={{ width: "100%", minHeight: "100vh" }}>
                <NavBar active="settings/profile" openMenu="settings" />
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
                                title: "Cài đặt",
                            },
                        ]}
                        style={{ marginLeft: 30, marginTop: 30 }}
                    />
                    <div
                        style={{
                            width: "90%",
                            marginTop: 30,
                            alignSelf: "center",
                        }}
                    >
                        <Settings mode={mode} />
                    </div>
                </div>
            </Flex.Row>
        </div>
    );
}
