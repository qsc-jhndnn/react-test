import { option, optionLib } from "./options";

export default class lib extends optionLib {

  constructor() {
    super();
    this.name = "Mixer";
    this.description = ""
  }

  getOptionsInternal(tok:string): Array<option> {
    return [

      {
        name: "SetCrossPointGain",
        details: "Mixer.SetCrossPointGain( ins, outs, gain, <ramp> )",
        help:"Sets specified cross point gains with optional ramp time."
      },

      {
        name: "SetCrossPointMute",
        details: "Mixer.SetCrossPointMute( ins, outs, mute )",
        help:"Sets specified cross point mutes with boolean."
      },

      {
        name: "SetCrossPointSolo",
        details: "Mixer.SetCrossPointSolo( ins, outs, mute )",
        help:"Sets specified cross point solos with boolean."
      },

      {
        name: "SetCrossPointDelay",
        details: "Mixer.SetCrossPointDelay( ins, outs, delay, <ramp> )",
        help:"Sets specified cross point delay with optional ramp time."
      },

      {
        name: "SetInputGain",
        details: "Mixer.SetInputGain( ins, gain, <ramp> )",
        help:"Sets specified input gain with optional ramp time."
      },

      {
        name: "SetInputMute",
        details: "Mixer.SetInputMute( ins, mute )",
        help:"Sets specified input mutes."
      },

      {
        name: "SetInputSolo",
        details: "Mixer.SetInputSolo( ins, solo )",
        help:"Sets specified input solos."
      },

      {
        name: "SetOutputGain",
        details: "Mixer.SetOutputGain( outs, gain, <ramp> )",
        help:"Sets specified output gain with optional ramp time."
      },

      {
        name: "SetOutputMute",
        details: "Mixer.SetOutputMute( outs, mute )",
        help:"Sets specified output mutes."
      },

      {
        name: "SetInputCueEnable",
        details: "Mixer.SetInputCueEnable( ins, cues, enable )",
        help:"Sets specified input cues enables."
      },

      {
        name: "SetInputCueAfl",
        details: "Mixer.SetInputCueAfl( ins, afls, enable )",
        help:"Sets specified input AFL enables."
      },

      {
        name: "SetCueGain",
        details: "Mixer.SetCueGain( cues, gain, <ramp> )",
        help:"Sets specified cue gains with optional ramp time."
      },

      {
        name: "SetCueMute",
        details: "Mixer.SetCueMute( cues, mute )",
        help:"Sets specified cue mutes."
      },

      {
        name: "GetMixerCrossPoints",
        details: "Mixer.GetMixerCrossPoints( ins, outs )",
        help:"Gets specified cross point values."
      },
    ];
  }

}