"use client";

import { Button, Card } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import InspectionProfile from "../../../containers/Admin/Inspection/InspectionProfile";
import Flex from "@/modules/ui/components/Flex";
import NavBar from "../../../containers/Admin/NavBar";

export default function RouteToInspectionProfile({
  params,
}: {
  params: { id: string };
}) {
  const [data, setData] = useState({ car_id: 1, user_id: 1, centre_id: 1 });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);

    const getData = async () => {
      try {
        let response = await fetch(
          `http://fall2324w3g10.int3306.freeddns.org/api/v1/inspections?inspection_id=${Number(
            params.id
          )}`
        );
        if (!response.ok) throw new Error("Fail to get data");

        let tmp = await response.json();
        setData(tmp.data[0]);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <Flex.Row style={{ height: "100vh", width: "100vw" }} padding={"0"}>
        <NavBar active="inspections" openMenu="" />"
        <div
          style={{
            background: "#e4e4e7",
            width: "calc(100vw - 256px - 8px)",
            overflow: "auto",
            display: "flex",
            justifyContent: "center",
            padding: "50px 0",
          }}
        >
          <Flex.Cell style={{ marginBottom: "500px", maxWidth:"800px" }}>
            <Card
              loading={loading}
              title={
                <Button
                  type="text"
                  icon={
                    <IoArrowBackOutline
                      style={{ fontSize: "2rem", verticalAlign: "middle" }}
                    />
                  }
                  onClick={() => {
                    router.back();
                  }}
                />
              }
            >
              <Card.Meta
                style={{ padding: "0 3rem " }}
                title={
                  <div style={{ marginBottom: "3rem" }}>
                    Thông tin đăng kiểm
                  </div>
                }
                description={<InspectionProfile data={data} />}
              />
            </Card>
          </Flex.Cell>
        </div>
      </Flex.Row>
    </div>
  );
}
