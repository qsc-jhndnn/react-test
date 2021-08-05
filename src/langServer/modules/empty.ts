import { option, optionLib } from "./options";

export default class lib extends optionLib {

  constructor() {
    super();
    this.name = "";
    this.description = ""
  }

  getOptionsInternal(tok:string): Array<option> {
    return [
    ];
  }

}