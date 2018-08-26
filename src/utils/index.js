import React from 'react';
import Color from "color";


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

export function formatHeader(str) {
  const [first, ...rest] = str.split(' ');
  return (<span><strong>{first}</strong>{' '}{rest.join(' ')}</span>);
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