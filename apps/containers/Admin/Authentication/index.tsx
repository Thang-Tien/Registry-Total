import { Col, Row } from "antd";


import { useEffect } from "react";
import IntroCarousel from "./module/IntroCarousel";

const AuthenticationPage = () => {
  useEffect(() => {
    document.title = "Đăng nhập";
  }, []);

  return (
    <Row>
      <Col lg={10} xs={0}>
        <IntroCarousel />
      </Col>
      <Col lg={14} xs={24}>
        
      </Col>
    </Row>
  );
};

export default AuthenticationPage;