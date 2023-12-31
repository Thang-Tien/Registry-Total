import { PDFDownloadLink, Document, Page, Text } from "@react-pdf/renderer";

// import times from "../../../../public/fonts/times.ttf";
// import roboto from "./../../../../public/fonts/roboto.ttf";
// import robotoBold from "./../../../../public/fonts/roboto-bold.ttf";
// import timesBold from "./../../../../public/fonts/times-bold.ttf";
// import timesItalic from "./../../../../public/fonts/times-italic.ttf";
import signature from "./../../../../public/image/signature.png";

import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

// Font.register({
//     family: "Times New Roman",
//     src: times,
// });

// Font.register({
//     family: "Roboto",
//     src: roboto,
// });

// Font.register({
//     family: "Roboto Bold",
//     src: robotoBold,
// });

// Font.register({
//     family: "Times New Roman Bold",
//     src: timesBold,
// });

// Font.register({
//     family: "Times New Roman Italic",
//     src: timesItalic,
// });

const processDate = (date) => {
    if (!date) return;
    const newDate = new Date(date);
    const [month, day, year] = newDate.toLocaleDateString().split("/");
    return [day.padStart(2, "0"), month.padStart(2, "0"), year].join("/");
};

const InspectionPDF = ({ inspectionData }) => {
    const Inspecion = () => (
        <Document>
            <Page>
                <Text>Booj giao thoong vana taij</Text>
                <Text>{inspectionData.number_plate}</Text>
            </Page>
        </Document>
    );
    return (
        <PDFDownloadLink
            document={<Inspecion />}
            fileName={`${inspectionData.inspection_number}.pdf`}
            style={{ alignSelf: "center" }}
        >
            <Button
                type="primary"
                size="large"
                style={{
                    marginTop: "2rem",
                }}
                onClick={() => console.log("CLicked")}
                icon={
                    <DownloadOutlined
                        style={{
                            fontSize: "18px",
                            verticalAlign: "middle",
                            marginBottom: "6px",
                        }}
                    />
                }
            >
                Tải xuống đăng kiểm
            </Button>
        </PDFDownloadLink>
    );
};

export default InspectionPDF;
