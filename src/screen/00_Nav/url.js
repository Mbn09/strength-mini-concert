import React from "react";
import { BsChevronDown } from "react-icons/bs";
// import { NEWS_TYPE } from "../../store/string";

export const URL = {
  // url
  home: "/",
  // login: "/login",
  // aboutUs: "/about-us",
  // advisory: "/about-us/advisory",
  // advisorySlug: "/about-us/advisory/:slug",
  // administration: "/about-us/administration",
  // administrationSlug: "/about-us/administration/:slug",
  // landing: "/about-us/hali-australia",
  // news: "/news",
  // post: "/post/:slug",
  // category: "/news/:type",
  // subCategory: "/news/:type/:slug",
  // immigrant: "/news/immigrant",
  // education: "/news/education",
  // lifeIntegration: "/news/life-integeration",
  // golf: "/news/golf",
  // property: "/property",
  // residential: "/residential",
  // commercial: "/commercial",
  // residentialSlug: "/residential/:slug",
  // commercialSlug: "/commercial/:slug",
  // event: "/event",
  // eventSlug: "/event/:slug",
  // eventRegister: "/register-event/:slug",
  // eventSuccess: "/register-event/success",
  // partner: "/partner",
  // contact: "/contact",
};

export const newItems = (t, language) => {
  const items = {
    home: {
      title: "Home",
      url: language,
      key: "1",
      hightlight: ["1"],
      arrow: false,
    },
    // aboutUs: {
    //   title: t("aboutUs"),
    //   url: language + URL.aboutUs,
    //   key: "2",
    //   hightlight: ["2"],
    //   arrow: true,
    // },
    // advisory: {
    //   title: t("advisory"),
    //   url: language + URL.advisory,
    //   key: "2.1",
    //   hightlight: ["2", "2.1"],
    //   arrow: false,
    // },
    // administration: {
    //   title: t("administration"),
    //   url: language + URL.administration,
    //   key: "2.2",
    //   hightlight: ["2", "2.2"],
    //   arrow: false,
    // },
    // landing: {
    //   title: t("haliAustralia"),
    //   url: language + URL.landing,
    //   key: "2.3",
    //   hightlight: ["2", "2.3"],
    //   arrow: false,
    // },
    // news: {
    //   title: t("news"),
    //   url: language + URL.news,
    //   key: "3",
    //   hightlight: ["3"],
    //   arrow: true,
    // },
    // immigrant: {
    //   title: t("immigrant"),
    //   url: language + URL.immigrant,
    //   key: "3.1",
    //   hightlight: ["3", "3.1"],
    //   arrow: false,
    // },
    // education: {
    //   title: t("education"),
    //   url: language + URL.education,
    //   key: "3.2",
    //   hightlight: ["3", "3.2"],
    //   arrow: false,
    // },
    // lifeIntegeration: {
    //   title: t("lifeIntegration"),
    //   url: language + URL.lifeIntegration,
    //   key: "3.3",
    //   hightlight: ["3", "3.3"],
    //   arrow: false,
    // },
    // golf: {
    //   title: t("golf"),
    //   url: language + URL.golf,
    //   key: "3.4",
    //   hightlight: ["3", "3.4"],
    //   arrow: false,
    // },
    // property: {
    //   title: t("property"),
    //   url: language + URL.property,
    //   key: "4",
    //   hightlight: ["4"],
    //   arrow: true,
    // },
    // residential: {
    //   title: t("residential"),
    //   url: language + URL.residential,
    //   key: "4.1",
    //   hightlight: ["4", "4.1"],
    //   arrow: false,
    // },
    // commercial: {
    //   title: t("commercial"),
    //   url: language + URL.commercial,
    //   key: "4.2",
    //   hightlight: ["4", "4.2"],
    //   arrow: false,
    // },
    // event: {
    //   title: t("event"),
    //   url: language + URL.event,
    //   key: "5",
    //   hightlight: ["5"],
    //   arrow: false,
    // },
    // eventSlug: {
    //   title: t("event"),
    //   url: language + URL.eventSlug,
    //   key: "5",
    //   hightlight: ["5"],
    //   arrow: false,
    // },
    // eventRegister: {
    //   title: t("event"),
    //   url: URL.eventRegister,
    //   key: "5",
    //   hightlight: ["5"],
    //   arrow: false,
    // },
    // partner: {
    //   title: t("partner"),
    //   url: language + URL.partner,
    //   key: "6",
    //   hightlight: ["6"],
    //   arrow: false,
    // },
    // contact: {
    //   title: t("contact"),
    //   url: language + URL.contact,
    //   key: "7",
    //   hightlight: ["7"],
    //   arrow: false,
    // },
  };
  return items;
};

// export const newBreadCrumb = (items) => {
//   const breadCrumb = {
//     home: null,
//     aboutUs: [items.home, items.aboutUs],
//     advisory: [items.home, items.aboutUs, items.advisory],
//     administration: [items.home, items.aboutUs, items.administration],
//     landing: [items.home, items.aboutUs, items.landing],
//     news: [items.home, items.news],
//     property: [items.home, items.property],
//     residential: [items.home, items.property, items.residential],
//     commercial: [items.home, items.property, items.commercial],
//     event: [items.home, items.event],
//     partner: [items.home, items.partner],
//     contact: [items.home, items.contact],
//   };
//   return breadCrumb;
// };

// export const setMenuItem = (props) => {
//   const { title, url, key, arrow, icon, children } = props;
//   const href = url;
//   let label = href ? (
//     <>
//       <a href={href} target="_self" rel="noopener noreferrer">
//         {title}
//       </a>
//       {arrow ? (
//         <BsChevronDown
//           style={{ fontSize: 10, marginLeft: 5 }}
//           className="arrow-down"
//         />
//       ) : null}
//     </>
//   ) : (
//     title
//   );
//   return { key, children, label, icon };
// };

// const setChildCategory = (type, categories, language) => {
//   const data = categories
//     ?.filter((item) => item?.type === type && item?.language === language)
//     ?.map((item) => {
//       return setMenuItem({
//         title: item?.name,
//         url: "/" + language + "/news/" + item?.type + "/" + item?.slug,
//         key: item?.id,
//         arrow: false,
//         icon: null,
//         children: null,
//       });
//     });
//   return data?.length > 0 ? data : null;
// };

// export const newMenus = ({ items, categories, language }) => {
//   const menu = [
//     setMenuItem({ ...items.home }),
//     setMenuItem({
//       ...items.aboutUs,
//       children: [
//         setMenuItem({ ...items.advisory }),
//         setMenuItem({ ...items.administration }),
//         setMenuItem({ ...items.landing }),
//       ],
//     }),
//     setMenuItem({
//       ...items.news,
//       children: [
//         setMenuItem({
//           ...items.immigrant,
//           children: setChildCategory(NEWS_TYPE.IMMIGRANT, categories, language),
//         }),
//         setMenuItem({
//           ...items.education,
//           children: setChildCategory(NEWS_TYPE.EDUCATION, categories, language),
//         }),
//         setMenuItem({
//           ...items.lifeIntegeration,
//           children: setChildCategory(NEWS_TYPE.LIFE, categories, language),
//         }),
//         setMenuItem({
//           ...items.golf,
//           children: setChildCategory(NEWS_TYPE.GOLF, categories, language),
//         }),
//       ],
//     }),
//     setMenuItem({
//       ...items.property,
//       children: [
//         setMenuItem({ ...items.residential }),
//         setMenuItem({ ...items.commercial }),
//       ],
//     }),
//     setMenuItem({ ...items.event }),
//     setMenuItem({ ...items.partner }),
//     setMenuItem({ ...items.contact }),
//   ];
//   return menu;
// };
