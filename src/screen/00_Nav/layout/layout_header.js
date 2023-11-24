import React, { useEffect, useState } from "react";
import { Layout, Row, Col, Drawer, Button, Grid, Select } from "antd";
import { FiMenu } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import LayoutMenu from "./layout_menu";
// import IconVi from "../../../asset/svg/vi.svg";
// import IconEn from "../../../asset/svg/en.svg";

const { Option } = Select;
const { useBreakpoint } = Grid;

const LayoutHeader = () => {
  // -------------------------- VAR --------------------------
  // const { i18n } = useTranslation();
  // const currentLang = i18n.language;
  // -------------------------- STATE --------------------------
  const [drawer, setDrawer] = useState(false);
  const [lang, setLang] = useState("en");
  const screens = useBreakpoint();
  const location = useLocation();
  const navigate = useNavigate();
  // -------------------------- REDUX --------------------------

  // -------------------------- FUNCTION --------------------------

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  const closeDrawer = () => {
    setDrawer(false);
  };

  // const handleChange = (value) => {
  //   const pathname = location.pathname;
  //   const isHome = window.location.pathname === "/";
  //   const search = location?.search;

  //   let newPath = "";
  //   if (isHome) {
  //     newPath = search !== "" ? "/" + value + search : "/" + value;
  //   } else {
  //     newPath =
  //       search !== ""
  //         ? pathname.replace(currentLang, value) + search
  //         : pathname.replace(currentLang, value);
  //   }

  //   navigate(newPath, { replace: true });
  // };

  // -------------------------- EFFECT --------------------------

  // useEffect(() => {
  //   setLang(currentLang);
  // }, [currentLang]);

  // -------------------------- RENDER --------------------------

  const renderLogo = () => {
    return (
      <a href="/" target="_self" rel="noopener noreferrer">
        <div className="logo" />
      </a>
    );
  };

  const renderDestop = () => {
    return (
      <Row justify="space-between" align="middle">
        <Col flex="150px">{renderLogo()}</Col>
        {/* <Col flex="auto">
          <LayoutMenu mode="horizontal" />
        </Col>
        <Col flex="150px">{languageSwitch()}</Col> */}
      </Row>
    );
  };

  const renderMobile = () => {
    return (
      <Row justify="space-between" align="middle">
        <Col flex="none">{mobileButton()}</Col>
        <Col flex="auto">{renderLogo()}</Col>
        {/* <Col flex="none">{languageSwitch()}</Col>
        {mobileDrawer()} */}
      </Row>
    );
  };

  const mobileButton = () => {
    return (
      <Button
        shape="default"
        onClick={() => toggleDrawer()}
        style={{ padding: 6, borderRadius: 5 }}
      >
        <FiMenu style={{ fontSize: 18 }} />
      </Button>
    );
  };

  const mobileDrawer = () => {
    return (
      <Drawer
        placement="left"
        closable={false}
        onClose={() => closeDrawer()}
        visible={drawer}
        className="drawer-container"
        style={{ width: 250 }}
      >
        <LayoutMenu mode="inline" />
      </Drawer>
    );
  };

  // -------------------------- MAIN --------------------------
  return (
    <Layout.Header className="header-menu">
      {screens?.xs ? renderMobile() : renderDestop()}
    </Layout.Header>
  );
};

export default LayoutHeader;
