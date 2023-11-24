import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import { useParams } from "react-router-dom";
import "./style.css";
import LayoutHeader from "./layout_header";
import LayoutFooter from "./layout_footer";

const LayoutRoot = () => {
  // -------------------------- VAR --------------------------
  // const { i18n } = useTranslation();
  // const params = useParams();
  // const language = params?.language || "en";
  // -------------------------- STATE --------------------------
  // -------------------------- REDUX --------------------------
  // -------------------------- FUNCTION --------------------------
  // -------------------------- EFFECT --------------------------
  // useEffect(() => {
  //   i18n.changeLanguage(language);
  // }, [language, i18n]);
  // -------------------------- MAIN --------------------------
  return (
    <Layout className="layout main root">
      <LayoutHeader />
      <Outlet />
      <LayoutFooter />
    </Layout>
  );
};

export default LayoutRoot;
