import { option, optionLib } from "./options";

export default class lib extends optionLib {

  constructor() {
    super();
    this.name = "Uci";
    this.description = "Access UCI stuff"
  }

  getOptionsInternal(tok:string): Array<option> {
    return [
      {
        name: "SetLayerVisibility",
        details: "Uci.SetLayerVisibility( )",
        help: "QSC.QSys.Properties.Resources.LUA_AUTOCOMPLETE_UCI_SET_LAYER_VISIBILITY_HELP"
      },
      {
        name: "SetSharedLayerVisibility",
        details: "Uci.SetSharedLayerVisibility( )",
        help: "QSC.QSys.Properties.Resources.LUA_AUTOCOMPLETE_UCI_SET_SHARED_LAYER_VISIBILITY_HELP"
      },
    ];
  }

}