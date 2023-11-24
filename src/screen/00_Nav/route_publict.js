import React from "react";
import { Route } from "react-router-dom";
import { URL } from "./url";
import LayoutRoot from "./layout/layout_root";

import HomeScreen from "../01_Home/home";
// import AboutUsScreen from "../02_About_Us/about_us";
// import NewsScreen from "../03_News/news";
// import CategoryScreen from "../03_Category/category";
// import SubCategoryScreen from "../03_Sub_Category/sub_category";
// import PropertyScreen from "../04_Property/property";
// import ResidentialScreen from "../04_Property_Residential_Listing/residential";
// import PropertyDetailScreen from "../04_Property_Residential_Detail/property_detail";
// import EventScreen from "../05_Event/event";
// import EventRegister from "../05_Event_Register/event_register";
// import EventSuccess from "../05_Event_Thanks/event_success";
// import PartnerScreen from "../06_Partner/partner";
// import ContactScreen from "../07_Contact/contact";
// import HaliAustralia from "../02_Hali_australia/hali_australia";
// import AdvisoryScreen from "../02_Advisory/advisory";
// import AdministrationScreen from "../02_Administration/administration";
// import NewsDetailScreen from "../03_News_Detail/news_detail";
// import EventDetailScreen from "../05_Event_Detail/event_detail";
// import CommingPage from "../04_Property_Commercial_Comming/comming_page";
// import AdvisoryDetailScreen from "../02_Advisory_Detail/advisory_detail";
// import AdministrationDetailScreen from "../02_Administration_Detail/administration_detail";

const RoutePublict = () => {
  // -------------------------- VAR --------------------------
  // const language = "/:language";
  // -------------------------- STATE --------------------------
  // -------------------------- REDUX --------------------------
  // -------------------------- FUNCTION --------------------------

  // -------------------------- EFFECT --------------------------

  // -------------------------- RENDER --------------------------

  // -------------------------- MAIN --------------------------
  return (
    <Route exact path={URL.home} element={<LayoutRoot />}>
      <Route index element={<HomeScreen />} />
      <Route element={<HomeScreen />} />
    </Route>
  );
};

export default RoutePublict;
