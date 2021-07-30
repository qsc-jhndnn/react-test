import { option, optionLib } from "./options";

export class mathLib extends optionLib {

  constructor() {
    super();
    this.name = "math";
    this.description = "Some math stuff"
  }

  getOptionsInternal(): Array<option> {
    return [
      {
        name : "abs",
        // for hover
        hover : "math.abs(x)",
        hoverDetails : "returns the absolute value of x",
        /* eslint-disable no-template-curly-in-string */
        insertText : "abs"//(${1:x})"
      },
      {
        name : "acos",
        // for hover
        hover : "math.acos(x)",
        hoverDetails : "returns the arc cosine of x (in radians)",
        /* eslint-disable no-template-curly-in-string */
        insertText : "acos"
      },
      {
        name : "min",
        // for hover
        hover : "math.min(x,...)",
        hoverDetails : "Returns the minimum value among its arguments",
        /* eslint-disable no-template-curly-in-string */
        insertText : "min"
      },
      {
        name : "max",
        // for hover
        hover : "math.max(x,...)",
        hoverDetails : "returns the maximum value among its arguments",
        /* eslint-disable no-template-curly-in-string */
        insertText : "max"
      }
    ];
  }
}