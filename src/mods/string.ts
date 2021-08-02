import { option, optionLib } from "./options";

export class stringLib extends optionLib {

  constructor() {
    super();
    this.name = "string";
    this.description = "Some string stuff"
  }

  getOptionsInternal(tok:string): Array<option> {
    return [
      {
        name : "format",
        details : "string.format(str,...)",
        help : "formats a string",
        /* eslint-disable no-template-curly-in-string */
        insertText : "format(${1:x}, ${2:...})"
      },
    ];
  }
}