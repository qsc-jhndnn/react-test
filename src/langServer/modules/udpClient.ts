import { option, optionLib } from "./options";

export default class lib extends optionLib {

  constructor() {
    super();
    this.name = "UdpClient";
    this.description = ""
  }

  getOptionsInternal(tok:string): Array<option> {
    return [
      {
        name: "New",
        details: "UdpClient.New()",
        help: "Creates a new UDP client instance"
      },
    ];
  }

}