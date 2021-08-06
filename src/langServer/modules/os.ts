import { option, optionLib } from "./options";

export default class lib extends optionLib {

  constructor() {
    super();
    this.name = "os";
    this.description = "Operating System Facilities"
  }

  getHelpInternal(func:Array<string>) : string {
    return "7 - Operating System Facilities.htm";
  }

  getOptionsInternal(tok:string): Array<option> {
    return [
      {
        name: "clock",
        details: "os.clock ()",
        help: "Returns an approximation of the amount in seconds of CPU time used by the program."
      },
      {
        name: "date",
        details: "os.date ([format [, time]])",
        help: "Returns a string or a table containing date and time, formatted according to the given string format."
      },
      {
        name: "difftime",
        details: "os.difftime (t2, t1)",
        help: "Returns the difference, in seconds, from time t1 to time t2 (where the times are values returned by os.time). In POSIX, Windows, and some other systems, this value is exactly t2-t1."
      },
      {
        name: "getenv",
        details: "os.getenv (varname)",
        help: "Returns the value of the process environment variable varname, or nil if the variable is not defined."
      },
      {
        name: "time",
        details: "os.time ([table])",
        help: "Returns the current time when called without arguments, or a time representing the local date and time specified by the given table."
      },
    ];
  }

}