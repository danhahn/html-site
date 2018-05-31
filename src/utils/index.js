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