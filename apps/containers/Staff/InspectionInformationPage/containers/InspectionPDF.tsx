import {
    PDFDownloadLink,
    Document,
    Page,
    Text,
    StyleSheet,
    View,
    Image,
} from "@react-pdf/renderer";

// import times from "../../../../public/fonts/times.ttf";
// import roboto from "./../../../../public/fonts/roboto.ttf";
// import robotoBold from "./../../../../public/fonts/roboto-bold.ttf";
// import timesBold from "./../../../../public/fonts/times-bold.ttf";
// import timesItalic from "./../../../../public/fonts/times-italic.ttf";
import signature from "./../../../../public/image/signature.png";

import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { Roboto } from "next/font/google";

const styles = StyleSheet.create({
    page: {
        // fontFamily: "Roboto",
        fontSize: 14,
        paddingTop: 30,
        paddingLeft: 60,
        paddingRight: 60,
        lineHeight: 1.5,
        flexDirection: "column",
        textAlign: "center",
    },
    data: {
        paddingTop: 12,
        fontSize: 14,
    },
    title: {
        margin: 30,
        fontSize: 16,
        textAlign: "center",
        // fontFamily: "Roboto",
        fontWeight: "bold",
    },
});

const processDate = (date) => {
    if (!date) return;
    const newDate = new Date(date);
    const [month, day, year] = newDate.toLocaleDateString().split("/");
    return [day.padStart(2, "0"), month.padStart(2, "0"), year].join("/");
};

const InspectionPDF = ({ inspectionData }) => {
    const Inspecion = () => (
        <Document>
            <Page size="A5">
                <View style={styles.title}>
                    <Text>MINISTRY OF TRANSPORT</Text>
                    <Text>Vietnam Register - VR</Text>
                    <Text>--------------------------</Text>

                    <Text style={{ marginTop: 120 }}>
                        REGISTRATION CERTIFICATE
                    </Text>

                    <Text style={{ marginTop: 100 }}>
                        Periodical inspection certificate
                    </Text>
                    <Text>
                        of motor vehicle for compliance with technical safety
                    </Text>
                    <Text>and environment protection requirements</Text>

                    <Text style={{ marginTop: 150 }}>Vietnam, 2024</Text>
                </View>

                <View break={false} style={{ margin: 30 }}>
                    <Text>1. VEHICLE</Text>
                    <Text style={styles.data}>
                        Registration Number:{" "}
                        {inspectionData.registration_number}
                    </Text>
                    <Text style={styles.data}>
                        (Vehicle Inspection No.):{" "}
                        {inspectionData.inspection_number}
                    </Text>
                    <Text style={styles.data}>Type: {inspectionData.type}</Text>
                    <Text style={styles.data}>
                        Model Code: {inspectionData.model_code}
                    </Text>
                    <Text style={styles.data}>
                        Engine Number: {inspectionData.engine_number}
                    </Text>
                    <Text style={styles.data}>
                        Chassis Number: {inspectionData.chassis_number}
                    </Text>
                    <Text style={styles.data}>
                        Manufactured Year and Country:{" "}
                        {`${inspectionData.manufactured_year}, ${inspectionData.manufactured_country}`}
                    </Text>

                    <Text style={styles.data}>
                        Commercial Use:{" "}
                        {inspectionData.purpose === "business" ? "Có" : "Không"}
                    </Text>
                    <Text style={styles.data}>
                        Modification:{" "}
                        {inspectionData.recovered ? "Có" : "Không"}
                    </Text>
                </View>

                <View break={false} style={{ margin: 30 }}>
                    <Text>2. SPECIFICATIONS</Text>
                    <Text style={styles.data}>
                        Wheel Formula: {inspectionData.wheel_formula}
                    </Text>
                    <Text style={styles.data}>
                        Wheel Tread: {inspectionData.wheel_tread}
                    </Text>
                    <Text style={styles.data}>
                        Overall Dimension: {inspectionData.overall_dimension}
                    </Text>
                    <Text style={styles.data}>
                        Inside cargo container dimension:{" "}
                        {inspectionData.container_dimension}
                    </Text>
                    <Text style={styles.data}>
                        Wheelbase: {inspectionData.length_base}
                    </Text>
                    <Text style={styles.data}>
                        Kerb Mass: {inspectionData.kerb_mass}
                    </Text>
                    <Text style={styles.data}>
                        Design/Authorized pay load:{" "}
                        {inspectionData.designed_and_authorized_payload}
                    </Text>

                    <Text style={styles.data}>
                        Design/Authorized total mass:{" "}
                        {inspectionData.designed_and_authorized_total_mass}
                    </Text>
                    <Text style={styles.data}>
                        Design/Authorized towed_mass:{" "}
                        {inspectionData.designed_and_authorized_towing_mass}
                    </Text>
                    <Text style={styles.data}>
                        Permissible No.of Pers Carried: seat, stood place,
                        laying place: car
                        {`${inspectionData.permissible_carry} seats, 0 stand, 0 laying`}
                    </Text>
                    <Text style={styles.data}>
                        Type of Fuel used: {inspectionData.fuel}
                    </Text>
                    <Text style={styles.data}>
                        Engine Displacement:{" "}
                        {inspectionData.engine_displacement}
                    </Text>
                    <Text style={styles.data}>
                        Max output / rpm:{" "}
                        {inspectionData.maximum_output_to_rpm_ratio}
                    </Text>
                    <Text style={styles.data}>
                        Number of tires, Tires size/axle:{" "}
                        {inspectionData.kerb_mass}
                    </Text>
                </View>

                <View style={{ margin: 30 }}>
                    <Text style={{ textAlign: "right" }}>
                        Inspection Center
                    </Text>
                    {/* <Image
                        src={signature}
                        style={{ width: 60, marginTop: 5 }}
                    /> */}
                    {/* <Image src={"./../../../../public/image/signature.png"} /> */}
                </View>
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
