import cx from "classnames";
import styles from "./index.module.scss";
import Flex from "@/modules/ui/components/Flex";
import NavBar from "../NavBar";
import { Breadcrumb } from "antd";
import InformationCard from "./containers/InformationCard";
export type Props = {
    className?: string;
    style?: React.CSSProperties;
    carId?: string; // Add carID prop
};

export default function CarInformationPage({ className, style, carId }: Props) {
    return (
        <div className={cx(className, styles.container)} style={style}>
            <Flex.Row style={{ width: "100%", minHeight: "100vh" }}>
                <NavBar active="" />
                <div
                    style={{
                        flex: "1",
                        display: "flex",
                        flexDirection: "column",
                        background: "#e4e4e7",
                    }}
                >
                    <InformationCard carId={carId} />
                </div>
            </Flex.Row>
        </div>
    );
}
