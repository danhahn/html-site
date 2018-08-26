import { darken, lighten } from "polished";

export default class Colors {
  constructor(color) {
    this.primary = color;
    this.primaryDark = darken(0.05, this.primary);
    this.primary5 = lighten(0.05, this.primary);
    this.primary20 = lighten(0.2, this.primary);
    this.white = "#fff";
    this.darker = "#20232a";
    this.light = "#bdc3c7";
    this.secondary = "#6c757d";
    this.secondaryDark = darken(0.05, this.secondary);
    this.success = "#28a745";
    this.successDark = darken(0.05, this.success);
    this.danger = "#dc3545";
    this.dangerDark = darken(0.05, this.danger);
    this.warning = "#ffc107";
    this.warningDark = darken(0.05, this.warning);
    this.info = "#17a2b8";
    this.infoDark = darken(0.05, this.info);
    this.light = "#f8f9fa";
    this.lightDark = darken(0.05, this.light);
    this.dark = "#343a40";
    this.darkDark = darken(0.05, this.dark);
    this.link = "transparent";
  }
}

export const colors = new Colors("#c0392b");

