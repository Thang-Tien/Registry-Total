import cx from "classnames";
import styles from "./index.module.scss";
import Flex from "@/modules/ui/components/Flex";
import NavBar from "../NavBar";
import All from "./containers/All";
import ThisYear from "./containers/ThisYear";
import ChartPie from "./containers/ChartPie";
import ChartColumn from "./containers/ChartColumn";
import ChartLine from "./containers/ChartLine";
import { Breadcrumb } from "antd";

export type Props = {
    className?: string;
    style?: React.CSSProperties;
};

export default function StatisticPage({ className, style }: Props) {
    return (
        <div className={cx(className, styles.container)} style={style}>
            <Flex.Row style={{ width: "100%", minHeight: "100vh" }}>
                <NavBar active="statistics" />
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
                                title: "Thống kê",
                            },
                        ]}
                        style={{ marginLeft: 30, marginTop: 30 }}
                    />
                    <Flex.Col gap={"20px"} style={{ padding: "24px 32px" }}>
                        <Flex.Row gap={"20px"}>
                            <Flex.Col gap={"20px"}>
                                <All />
                                <ThisYear />
                            </Flex.Col>

                            <ChartColumn />
                        </Flex.Row>
                        <Flex.Row gap={"20px"}>
                            <ChartLine />
                            <ChartPie />
                        </Flex.Row>
                    </Flex.Col>
                </div>
            </Flex.Row>
        </div>
    );
}
