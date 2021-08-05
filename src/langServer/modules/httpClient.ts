import { option, optionLib } from "./options";

export default class lib extends optionLib {

  constructor() {
    super();
    this.name = "HttpClient";
    this.description = ""
  }

  getOptionsInternal(tok:string): Array<option> {
    return [

      {
        name: "Download",
        details: "HttpClient.Download( table )",
        help:"Downloads the URL specified in <table>."
      },

      {
        name: "Upload",
        details: "HttpClient.Upload( table )",
        help:"Uploads the URL specified in <table>."
      },

      {
        name: "CreateUrl",
        details: "HttpClient.CreateUrl( table )",
        help:"Creates a URL string specified in <table>."
      },

      {
        name: "EncodeParams",
        details: "HttpClient.EncodeParams( table )",
        help:"URL encodes a list of parameters specified in <table>."
      },

      {
        name: "EncodeString",
        details: "HttpClient.EncodeString( string )",
        help:"URL escapes <string>."
      },

      {
        name: "DecodeString",
        details: "HttpClient.DecodeString( string )",
        help:"URL unescapes <string>."
      },

    ];
  }

}