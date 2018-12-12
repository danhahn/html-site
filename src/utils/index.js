import React from "react";
import Color from "color";
import moment from "moment";

export function getWeekFormat(count = 8, noClass = []) {
  let weeks = [0];
  for (let i = 1; i < count; i++) {
    let skipNumber = null;
    noClass.forEach(skip => {
      if (skip === i) {
        skipNumber = weeks[weeks.length - 1] + 2;
      }
    });
    const next = skipNumber ? skipNumber : weeks[weeks.length - 1] + 1;
    weeks = [...weeks, next];
  }
  return weeks;
}

export function getWeekDateList(
  startDate = "2018-09-26",
  count = 12,
  noClass = [],
  extraClasses = []
) {
  let weekList = [];
  let i = 0;
  let total = count;
  while (i < total) {
    const thisWeek = moment(startDate);
    const shouldSkip = noClass.includes(i);
    const isExtraWeek = extraClasses.includes(i);
    if (shouldSkip) {
      total = total + 1;
      weekList = [...weekList, null];
    } else {
      const thisWeek = moment(startDate).add(i, "week");
      weekList = [...weekList, thisWeek];
    }
    if (isExtraWeek) {
      const extraDate = moment(weekList[i]).add(2, "days");
      weekList = [
        ...weekList.slice(0, i + 1),
        extraDate,
        ...weekList.slice(i + 1)
      ];
    }
    i++;
  }
  weekList = weekList
    .filter(Boolean)
    .map(week => moment(week).format("MMMM D, YYYY"));
  const totalItems = weekList.length - extraClasses.length;
  weekList = weekList.slice(0, totalItems);
  return weekList;
}

export function formatHeader(str) {
  const [first, ...rest] = str.split(" ");
  return (
    <span>
      <strong>{first}</strong> {rest.join(" ")}
    </span>
  );
}

export function testColor(str, p1, c) {
  const color = Color(c);
  return `
    <li style='
        background-color: ${c};
        ${color.isDark() ? ` color: #ffffff;` : ""}
        ${color.luminosity() > 0.9 ? ` border-color: #c0c0c0` : ""}
      ' class='icon' data-clipboard-text='${c.toLowerCase()}'>${c.toLowerCase()}</li>\n`;
}

export function testUl(str, c) {
  return `<ul class='icon-list'>\n${testColor(undefined, undefined, c)}\n`;
}