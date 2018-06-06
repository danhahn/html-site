import React from "react";
import classNames from "classnames/bind";
import styles from "./badge.module.scss";

const cx = classNames.bind(styles);

const Badge = ({ kind }) => {
  const badgeClassNames = cx({
    badge: true,
    html: kind === "html",
    css: kind === "css",
    js: kind === "js"
  });
  return (
    <span className={badgeClassNames}>
      <span className="caps">{kind}</span>
    </span>
  );
};

export default Badge;
