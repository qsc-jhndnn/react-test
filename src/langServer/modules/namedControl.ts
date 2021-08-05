import { option, optionLib } from "./options";

export default class lib extends optionLib {

  constructor() {
    super();
    this.name = "NamedControl";
    this.description = "Access named controls"
  }

  getOptionsInternal(tok:string): Array<option> {
    return [

      {
        name: "GetString",
        details: "NamedControl.SetString( name )",
        help:"Gets the string of the control with the name <name>."
      },

      {
        name: "GetPosition",
        details: "NamedControl.GetPosition( name )",
        help:"Gets the position of the control with the name <name>."
      },

      {
        name: "GetValue",
        details: "NamedControl.GetValue( name )",
        help:"Gets the value of the control with the name <name>."
      },

      {
        name: "SetString",
        details: "NamedControl.SetString( name, string )",
        help:"Sets the control with the name <name> to the string value <string>."
      },

      {
        name: "SetPosition",
        details: "NamedControl.SetPosition( name, position )",
        help:"Sets the control with the name <name> to the position <position>."
      },

      {
        name: "SetValue",
        details: "NamedControl.SetValue( name, value )",
        help:"Sets the control with the name <name> to the value <value>."
      },

      {
        name: "Trigger",
        details: "NamedControl.Trigger( name )",
        help:"Triggers the control with the name <name>."
      },
    ];
  }

}