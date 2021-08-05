import { option, optionLib } from "./options";

export default class lib extends optionLib {

  constructor() {
    super();
    this.name = "Qlib";
    this.description = "Qlib"
  }

  getOptionsInternal(tok:string): Array<option> {
    return [

      {
        name: "networkinterfaces",
        details: "Qlib.networkinterfaces( )",
        help:"(Deprecated) Returns a table of network interfaces and their IP addresses. (see System.NetworkInterfaces)"
      },

      {
        name: "md5",
        details: "Qlib.md5( value )",
        help:"(Deprecated) Computes the md5 hash of <value>. (see Cryptography.MD5Compute)"
      },

      {
        name: "crc16",
        details: "Qlib.crc16( value )",
        help:"(Deprecated) Computes the crc16 of <value>. (see Cryptography.CRC16Compute)"
      },

      {
        name: "base64_enc",
        details: "Qlib.base64_enc( value )",
        help:"(Deprecated) Computes the base64 of <value>. (see Cryptography.Base64Encode)"
      },

      {
        name: "base64_dec",
        details: "Qlib.base64_dec( value )",
        help:"(Deprecated) Converts base64 of <value> to string. (see Cryptography.Base64Decode)"
      },

      {
        name: "version",
        details: "Qlib.version()",
        help:"(Deprecated) Returns a table with .Version, .Major, .Minor and .Build (see System.Version)"
      },

    ];
  }

}