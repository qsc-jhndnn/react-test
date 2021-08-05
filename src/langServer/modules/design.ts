import { option, optionLib } from "./options";

export default class lib extends optionLib {

  constructor() {
    super();
    this.name = "Design";
    this.description = ""
  }

  getOptionsInternal(tok:string): Array<option> {
    return [
      {
        name: "GetStatus",
        details: "Design.GetStatus()",
        help:"Returns a information about the current design, with these properties .DesignName, .DesignCode, .Platform"
      },

      {
        name: "GetInventory",
        details: "Design.GetInventory()",
        help:"Returns an table that has each inventory item with properties {Name, Type, Model, Location, Message, Code, Status}"
      },

    ];
  }

}