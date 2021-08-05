import { option, optionLib } from "./options";

export default class lib extends optionLib {

  constructor() {
    super();
    this.name = "TcpSocketServer";
    this.description = ""
  }

  getOptionsInternal(tok:string): Array<option> {
    return [
      {
        name: "New",
        details: "TcpSocketServer.New()",
        help: "Creates a new TCP server instance"
      },
    ];
  }

}