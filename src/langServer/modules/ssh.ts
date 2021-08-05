import { option, optionLib } from "./options";

export default class lib extends optionLib {

  constructor() {
    super();
    this.name = "Ssh";
    this.description = ""
  }

  getOptionsInternal(tok:string): Array<option> {
    return [
      {
        name: "New",
        details: "Ssh.New()",
        help: "Creates a new SSH instance"
      },
    ];
  }
}