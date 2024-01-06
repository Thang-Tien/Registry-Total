import cx from "classnames";
import styles from "./index.module.scss";
import { useState, useEffect } from "react";
import ResultList from "../../../modules/ui/components/Search/ResultList";
import Flex from "@/modules/ui/components/Flex";
import NavBar from "../NavBar";
import SearchInput from "@/modules/ui/components/Search/SearchInput";

export type Props = {
    className?: string;
    style?: React.CSSProperties;
};

const CarsPage = ({ className, style }: Props) => {
    const [searchText, setSearchText] = useState("");
    const [data, setData] = useState([
        { id: "", numberPlate: "", registrationNumber: "" },
    ]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        document.title = "Tra cứu phương tiện";
    }, []);

    return (
        <div className={cx(className, styles.container)} style={style}>
            <Flex.Row style={{ height: "100vh", width: "100vw" }} padding={"0"}>
                <NavBar active="car" openMenu="carOpen" />
                <div
                    style={{
                        background: "#e4e4e7",
                        width: "calc(100vw - 256px - 8px)",
                        overflow: "auto",
                    }}
                >
                    <div
                        style={{
                            width: "800px",
                            margin: "auto",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <SearchInput
                            setData={setData}
                            setSearchText={setSearchText}
                            setLoading={setLoading}
                            search="car"
                        />
                        <ResultList
                            data={data}
                            searchText={searchText}
                            loading={loading}
                            search="car"
                        />
                    </div>
                </div>
            </Flex.Row>
        </div>
    );
};

export default CarsPage;
