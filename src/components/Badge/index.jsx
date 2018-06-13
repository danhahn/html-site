import React from "react";
import classNames from "classnames/bind";
import styles from "./badge.module.scss";
import Html5 from "../Icon/Html5";
import Css3 from "../Icon/Css3";
import Js from "../Icon/Js";

const cx = classNames.bind(styles);

const Badge = ({ kind }) => {
  const badgeClassNames = cx({
    badge: true,
    html: kind === "html",
    css: kind === "css",
    javascript: kind === "javascript"
  });
  let logo = null;
  switch (kind) {
    case "html":
      logo = <Html5 color="light" size={15} />;
      break;
    case "css":
      logo = <Css3 color="light" size={15} />;
      break;
    case "javascript":
      logo = <Js color="light" size={15} />;
      break;
    default:
      break;
  }
  return (
    <span className={badgeClassNames}>
      {logo}
      <span className="caps">{kind}</span>
    </span>
  );
};

export default Badge;
