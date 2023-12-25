import cx from "classnames";
import styles from "./index.module.scss";
import Flex from "@/modules/ui/components/Flex";
import NavBar from "../NavBar";
import InspectionTable from "./containers/InspectionTable";

export type Props = {
    className?: string;
    style?: React.CSSProperties;
};

export default function MyInspectionPage({ className, style }: Props) {
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
                    <InspectionTable />
                </div>
            </Flex.Row>
        </div>
    );
}
