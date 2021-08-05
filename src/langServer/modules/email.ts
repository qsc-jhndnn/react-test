import { option, optionLib } from "./options";

export default class lib extends optionLib {

  constructor() {
    super();
    this.name = "Email";
    this.description = ""
  }

  getOptionsInternal(tok:string): Array<option> {
    return [
      {
        name: "Send",
        details: "Email.Send( table )",
        help: "Emails the message specified in <table>."
      },
    ];
  }

}