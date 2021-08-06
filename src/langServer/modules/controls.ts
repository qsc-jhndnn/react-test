import { option, optionLib } from "./options";

export default class lib extends optionLib {

  controls: Array<string>;

  constructor() {
    super();
    this.controls = ["Control_1", "Mute", "AnotherOne", "With a space"];
    this.name = "Controls";
    this.description = "Controls"
    this.isQSC = true;
  }

  getHelpInternal(func:Array<string>) : string {
    return "Controls_IO.htm";
  }

  getControlOptions() : Array<option> {
    return [
      {
        name: "Position",
        details: "Control.Position",
        isVar: true,
        help:"The position of the control"
      },
      {
        name: "String",
        details: "Control.String",
        isVar: true,
        help:"The string representation of the control"
      },
      {
        name: "Value",
        details: "Control.Value",
        isVar: true,
        help:"The floating point value of the control"
      },
      {
        name: "Boolean",
        details: "Control.Boolean",
        isVar: true,
        help:"True if the position is greater than 0.5, otherwise false"
      },
      {
        name: "RampTime",
        details: "Control.RampTime",
        isVar: true,
        help:"The time in seconds to ramp to the new value"
      },
      {
        name: "IsInvisible",
        details: "Control.IsInvisible",
        isVar: true,
        help:"True if the control is currently invisible"
      },
      {
        name: "IsDisabled",
        details: "Control.IsDisabled",
        isVar: true,
        help:"True if the control is currently disabled"
      },
      {
        name: "IsIndeterminate",
        details: "Control.IsIndeterminate",
        isVar: true,
        help:"True if the control is currently indeterminate"
      },
      {
        name: "Color",
        details: "Control.Color",
        isVar: true,
        help:"The color of the control"
      },
      {
        name: "Legend",
        details: "Control.Legend",
        isVar: true,
        help:"The legend of the control - valid for buttons and faders"
      },
      {
        name: "Choices",
        details: "Control.Choices",
        isVar: true,
        help:"The choices of valid string values for the control"
      },
      {
        name: "Values",
        details: "Control.Values",
        isVar: true,
        help:"The array of Values of a vector control"
      },
      {
        name: "Strings",
        details: "Control.Strings",
        isVar: true,
        help:"The array of Strings of a vector control"
      },
      {
        name: "Positions",
        details: "Control.Positions",
        isVar: true,
        help:"The array of Positions of a vector control"
      },
      {
        name: "EventHandler",
        details: "Control.EventHandler",
        isVar: true,
        help:"The event handler which is called when any control property changes"
      },
   ]

  }

  getOptionsInternal(tok:string): Array<option> {
    if (tok === "Controls.") {
      let options = new Array<option>();
      this.controls.forEach(ctl => {
        if(ctl.includes(" ")) {
          options.push({
            name : ctl,
            help : ">>>",
            details : "some control",
            insertText : `["${ctl}"]`,
            backSpace: true

          });
        } else {
          options.push({
            name : ctl,
            help : ">>>",
            details : "some control",
            insertText : ctl
          });
        }
      });
      return options;
    }
    else {
      // split on .
      let toks = tok.split(".");
      if (toks.length === 3 && toks[2] === "") {
        if (this.controls.includes(toks[1])) {
          return this.getControlOptions();
        }
      }
    }
    return [];
  }

  getHover(func:Array<string>) : any {
    let contents = [] as any;
    if(func.length === 2)
    {
      this.getControlOptions().forEach(opt => {
        if(opt.name === func[1]) {
           contents.push({ value: '```lua\n'+opt.details+'\n\n```' });
           contents.push({ value: opt.help });
         }
       });
    }
    return contents;
  }

}