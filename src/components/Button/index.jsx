import React from "react";
import classNames from "classnames/bind";
import styles from "./button.module.scss";

const cx = classNames.bind(styles);

const Button = ({ children, kind = "primary" }) => {
  const btnClassNames = cx({
    btn: true,
    primary: kind === "primary"
  });
  return <button className={btnClassNames}>{children}</button>;
};

export default Button;
