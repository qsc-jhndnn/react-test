import { option, optionLib } from "./options";

export default class c extends optionLib {

  constructor() {
    super();
    this.name = "Log";
    this.description = "Log Library"
  }

  getOptionsInternal(tok:string): Array<option> {
    return [
      {
        name: "Message",
        details: "Log.Message( string )",
        help: "Writes <string> to log as a message."
      },
      {
        name: "Error",
        details: "Log.Error( string )",
        help: "Writes <string> to log as an error."
      },
    ];
  }

}