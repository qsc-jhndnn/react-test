import { option, optionLib } from "./options";

export default class lib extends optionLib {

  constructor() {
    super();
    this.name = "Network";
    this.description = ""
  }

  getOptionsInternal(tok:string): Array<option> {
    return [
      
      {
        name: "Interfaces",
        details: "Network.Interfaces( )",
        help:"Returns a table of network interfaces and their IP addresses. {name, address}"
      },

      {
        name: "GetHostByName",
        details: "Network.GetHostByName( )",
        help:"Returns an object that has .name and .addresses, where .addresses is a table of strings"
      },

    ];
  }

}