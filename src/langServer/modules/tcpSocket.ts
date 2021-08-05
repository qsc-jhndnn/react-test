import { option, optionLib } from "./options";

export default class lib extends optionLib {

  constructor() {
    super();
    this.name = "TcpSocket";
    this.description = "TCP Socket Library"
  }

  getOptionsInternal(tok:string): Array<option> {
    return [
      {
        name : "New",
        // for hover
        details : "TcpSocket.New()",
        help : "creates a new TCP Socket",
        /* eslint-disable no-template-curly-in-string */
        insertText : "New"
      },
    ];
  }

  getSnippetsInternal() : Array<option> {

    let snips = new Array<option>();
    let sockSnippet = [
      "${1:socket}.Connection = function( sock )",
      "end",
      "",
      "${1:socket}.Reconnect = function( sock )",
      "end",
      "",
      "${1:socket}.Data = function( sock )",
      "end",
      "",
    ];
    snips.push({
      name : "TCP Socket : discrete event handlers",
      insertText : sockSnippet.join("\n"),
      help : "",
      details : "",
    });
    let sockSnippet2 = [
      "${1:socket}.EventHandler = function( sock, evt, err )",
      "  if evt == TcpSocket.Events.Connected then",
      "",
      "  elseif evt == TcpSocket.Events.Reconnect then",
      "",
      "  elseif evt == TcpSocket.Events.Data then",
      "",
      "  elseif evt == TcpSocket.Events.Closed then",
      "",
      "  elseif evt == TcpSocket.Events.Error then",
      "",
      "  elseif evt == TcpSocket.Events.Timeout then",
      "",
      "  end",
      "end",
    ];
    snips.push({
      name : "TCP Socket : event handler",
      help : "",
      details : "",
      insertText : sockSnippet2.join("\n") 
    });
    return snips;
  }
}