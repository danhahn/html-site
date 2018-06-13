import React from "react";

const Js = ({ size = 512, color = "light" }) => {
  const isDark = color === "dark" ? true : false;
  const colors = {
    primary: isDark ? "#F7DF1E" : "#000",
    dark: isDark ? "#000" : "#f7df1e"
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={size}
      height={size}
    >
      <rect x="1.1" style={{ fill: colors.primary }} width="512" height="512" />
      <path
        fill={colors.dark}
        d="M344.3,399.2c10.3,16.8,23.7,29.2,47.4,29.2c19.9,0,32.6-9.9,32.6-23.7c0-16.5-13.1-22.3-35-31.9l-12-5.1
	c-34.6-14.8-57.7-33.2-57.7-72.3c0-36,27.4-63.4,70.3-63.4c30.5,0,52.5,10.6,68.3,38.4l-37.4,24c-8.2-14.8-17.1-20.6-30.9-20.6
	c-14.1,0-23,8.9-23,20.6c0,14.4,8.9,20.2,29.5,29.2l12,5.1c40.8,17.5,63.8,35.3,63.8,75.4c0,43.2-34,66.9-79.6,66.9
	c-44.6,0-73.4-21.2-87.5-49.1L344.3,399.2z M174.7,403.3c7.5,13.4,14.4,24.7,30.9,24.7c15.8,0,25.7-6.2,25.7-30.2V234.6h48v163.9
	c0,49.7-29.1,72.3-71.7,72.3c-38.4,0-60.7-19.9-72-43.9L174.7,403.3z"
      />
    </svg>
  );
};

export default Js;
