import { option, optionLib } from "./options";

export default class lib extends optionLib {

  constructor() {
    super();
    this.name = "Crypto";
    this.description = ""
  }

  getOptionsInternal(tok:string): Array<option> {
    return [

      {
        name: "MD5Compute",
        details: "Crypto.MD5Compute( value )",
        help:"Computes the md5 hash of <value>."
      },

      {
        name: "CRC16Compute",
        details: "Crypto.CRC16Compute( value )",
        help:"Computes the crc16 of <value>."
      },

      {
        name: "Base64Encode",
        details: "Crypto.Base64Encode( value, <pad> )",
        help:"Computes the base64 of <value>. If pad is true output will be padded with =. Default value of pad is true."
      },

      {
        name: "Base64Decode",
        details: "Crypto.Base64Decode( value )",
        help:"Converts base64 of <value> to string."
      },

      {
        name: "HMAC",
        details: "Crypto.HMAC( algoritm, key, data )",
        help:"Computes HMAC of <key> and <data> using hashing function <algorithm>."
      },

    ];
  }

}