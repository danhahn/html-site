import React from "react";

const Css3 = ({ size = 20, color = "light" }) => {
  const isDark = color === "dark" ? true : false;
  const colors = {
    primary: isDark ? "#264DE4" : "#fff",
    primaryAlt: isDark ? "#2965F1" : "#f0f0f0",
    light: isDark ? "#FFF" : "#1572b6",
    lightAlt: isDark ? "#EBEBEB" : "#1572b6"
  };
  return (
    <svg
      version="1.1"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
    >
      <g transform="translate(-193.63 -276.36)">
        <g transform="translate(119 276.36)">
          <polygon
            points="556.1 0.3 515 460.5 330.4 511.7 146.2 460.6 105.2 0.3"
            fill={colors.primary}
          />
          <polygon
            points="479.8 431.2 515 38 330.6 38 330.6 472.6"
            fill={colors.primaryAlt}
          />
          <polygon
            points="199.2 208.7 204.3 265.1 330.6 265.1 330.6 208.7"
            fill={colors.lightAlt}
          />
          <polygon
            points="330.6 94.4 330.4 94.4 189.1 94.4 194.3 150.9 330.6 150.9"
            fill={colors.lightAlt}
          />
          <polygon
            points="330.6 414 330.6 355.2 330.4 355.3 267.5 338.4 263.5 293.3 233 293.3 206.9 293.3 214.8 382 330.4 414.1"
            fill={colors.lightAlt}
          />
          <polygon
            points="400 265.1 393.4 338.3 330.4 355.2 330.4 414.1 446.2 382 447 372.4 460.2 223.8 461.6 208.7 471.8 94.4 330.4 94.4 330.4 150.9 409.9 150.9 404.8 208.7 330.4 208.7 330.4 265.1"
            fill={colors.light}
          />
        </g>
      </g>
    </svg>
  );
};

export default Css3;
