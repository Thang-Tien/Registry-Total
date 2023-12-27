import cx from "classnames";
import styles from "./index.module.scss";
import Flex from "@/modules/ui/components/Flex";
import NavBar from "../NavBar";
import SearchForm from "./containers/SearchForm";

export type Props = {
    className?: string;
    style?: React.CSSProperties;
};

export default function InspectionSearchPage({ className, style }: Props) {
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
                        alignItems: "center",
                    }}
                >
                    <div style={{ width: "80%", margin: 50 }}>
                        <SearchForm />
                    </div>
                </div>
            </Flex.Row>
        </div>
    );
}
