import Flex from "@/modules/ui/components/Flex";
import Settings from "./module/Settings";
import NavBar from "../NavBar";

const SettingsPage = (props) => {
  return (
    <div>
      <Flex.Row style={{ height: "100vh", width: "100vw" }} padding={"0"}>
        <NavBar active="setting/profile" openMenu="accountOpen" />"
        <div
          style={{
            background: "#e4e4e7",
            width: "calc(100vw - 256px - 8px)",
            overflow: "auto",
            display: "flex",
            justifyContent: "center",
            padding: "100px 0",
          }}
        >
          <Flex.Cell style={{ marginBottom: "100px", width:"1700px" }}>
            <Settings mode={props.mode} />
          </Flex.Cell>
        </div>
      </Flex.Row>
    </div>
  );
};

export default SettingsPage;
