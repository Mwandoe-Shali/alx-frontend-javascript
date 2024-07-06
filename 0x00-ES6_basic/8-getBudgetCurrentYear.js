#!/usr/bin/node
function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const bugdet = {
    [`${income}-${getCurrentYear()}`]: income,
    [`${gdp}-${getCurrentYear()}`]: gdp,
    [`${capita}-${getCurrentYear()}`]: capita,
  };
 
  return bugdet;
}
