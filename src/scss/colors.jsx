import { darken, lighten } from "polished";
export const colors = {
  primary: "#c0392b",
  primaryDark: darken(0.05, "#c0392b"),
  primary5: lighten(0.05, "#c0392b"),
  white: "#fff",
  darker: "#20232a",
  light: "#bdc3c7",
  secondary: "#6c757d",
  secondaryDark: darken(0.05, "#6c757d"),
  success: "#28a745",
  successDark: darken(0.05, "#28a745"),
  danger: "#dc3545",
  dangerDark: darken(0.05, "#dc3545"),
  warning: "#ffc107",
  warningDark: darken(0.05, "#ffc107"),
  info: "#17a2b8",
  infoDark: darken(0.05, "#17a2b8"),
  light: "#f8f9fa",
  lightDark: darken(0.05, "#f8f9fa"),
  dark: "#343a40",
  darkDark: darken(0.05, "#343a40"),
  link: "transparent"
};
