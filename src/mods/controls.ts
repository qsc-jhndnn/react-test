import { option, optionLib } from "./options";

export class controlsLib extends optionLib {

  controls: Array<string>;

  constructor() {
    super();
    this.controls = ["Control_1", "Mute", "AnotherOne", "With a space"];
    this.name = "Controls";
    this.description = "Controls"
  }

  getOptionsInternal(tok:string): Array<option> {
    let options = new Array<option>();
    if (tok === "Controls.") {
      this.controls.forEach(ctl => {
        if(ctl.includes(" ")) {
          options.push({
            name : ctl,
            help : ">>>",
            details : "some control",
            insertText : `["${ctl}"]`,
            backSpace: true

          });
        } else {
          options.push({
            name : ctl,
            help : ">>>",
            details : "some control",
            insertText : ctl
          });
        }
      });
    }
    else {
      // split on .
      let toks = tok.split(".");
      if (toks.length === 3 && toks[2] === "") {
        if (this.controls.includes(toks[1])) {
          options.push({
            name: "String",
            insertText: "String",
            help: "HOVER",
            details: "String value of the control"
          });
          options.push({
            name: "Value",
            insertText: "Value",
            help: "HOVER",
            details: "Floating point value of the control"
          });
          options.push({
            name: "Position",
            insertText: "Position",
            help: "HOVER",
            details: "Position value of the control"
          });
        }
      }
    }
    return options;
  }
}