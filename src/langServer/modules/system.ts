import { option, optionLib } from "./options";

export default class lib extends optionLib {

  constructor() {
    super();
    this.name = "System";
    this.description = "system stuff"
  }

  getOptionsInternal(tok:string): Array<option> {
    return [
      {
        name: "IsEmulating",
        details: "System.IsEmulating",
        isVar: true,
        help:"Returns true if this design is in emulation mode, false if running on a core"
      },
      {
        name: "Version",
        details: "System.Version",
        isVar: true,
        help:"A string with the full firmware version number"
      },
      {
        name: "MajorVersion",
        details: "System.MajorVersion",
        isVar: true,
        help:"A string with only the major firmware version number"
      },
      {
        name: "MinorVersion",
        details: "System.MinorVersion",
        isVar: true,
        help:"A string with only the minor firmware version number"
      },
      {
        name: "BuildVersion",
        details: "System.BuildVersion",
        isVar: true,
        help:"A string with only the build firmware version number"
      },
      {
        name: "LockingId",
        details: "System.LockingId",
        isVar: true,
        help:"A string with the core locking id"
      },
    ];
  }

}