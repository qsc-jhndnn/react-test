import { option, optionLib } from "./options";

export default class lib extends optionLib {

  constructor() {
    super();
    this.name = "Timer";
    this.description = "Timer Library"
  }

  getOptionsInternal(tok:string): Array<option> {
    return [
      {
        name : "New",
        // for hover
        details : "Timer.New()",
        help : "creates a new Timer",
        insertText : "New"
      },
      {
        name : "Now",
        // for hover
        details : "Timer.Now()",
        help : "returns number of seconds since epoch",
        insertText : "New"
      },
      {
        name : "CallAfter",
        // for hover
        details : "Timer.CallAfter( function, delay )",
        help : "calls <function> once after <delay>",
        insertText : "CallAfter"
      },
    ];
  }

}