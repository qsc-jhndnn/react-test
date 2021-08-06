import { option, optionLib } from "./options";

export default class lib extends optionLib {

  constructor() {
    super();
    this.name = "string";
    this.description = "Some string stuff"
  }

  getHelpInternal(func:Array<string>) : string {
    return "3 - String Manipulation.htm";
  }

  getOptionsInternal(tok:string): Array<option> {
    return [
      {
        name: "byte",
        details: "string.byte (s [, i [, j]])",
        help: "Returns the internal numerical codes of the characters s[i], s[i+1], ···, s[j]. The default value for i is 1; the default value for j is i."
      },
      {
        name: "char",
        details: "string.char (···)",
        help: "Returns the internal numerical codes of the characters s[i], s[i+1], ···, s[j]. The default value for i is 1; the default value for j is i."
      },
      {
        name: "dump",
        details: "string.dump (function)",
        help: "Returns a string containing a binary representation of the given function, so that a later loadstring on this string returns a copy of the function. function must be a Lua function without upvalues."
      },
      {
        name: "find",
        details: "string.find (s, pattern [, init [, plain]])",
        help: "Looks for the first match of pattern in the string s. If it finds a match, then find returns the indices of s where this occurrence starts and ends; otherwise, it returns nil. A third, optional numerical argument init specifies where to start the search; its default value is 1 and can be negative. A value of true as a fourth, optional argument plain turns off the pattern matching facilities, so the function does a plain 'find substring' operation, with no characters in pattern being considered 'magic'. Note that if plain is given, then init must be given as well."
      },
      {
        name: "format",
        details: "string.format (formatstring, ···)",
        help: "Returns a formatted version of its variable number of arguments following the description given in its first argument (which must be a string). The format string follows the same rules as the printf family of standard C functions."
      },
      {
        name: "gmatch",
        details: "string.gmatch (s, pattern)",
        help: "Returns an iterator function that, each time it is called, returns the next captures from pattern over string s. If pattern specifies no captures, then the whole match is produced in each call."
      },
      {
        name: "gsub",
        details: "string.gsub (s, pattern, repl [, n])",
        help: "Returns a copy of s in which all (or the first n, if given) occurrences of the pattern have been replaced by a replacement string specified by repl, which can be a string, a table, or a function. gsub also returns, as its second value, the total number of matches that occurred."
      },
      {
        name: "len",
        details: "string.len (s)",
        help: `Receives a string and returns its length. The empty string '' has length 0. Embedded zeros are counted, so 'a\\000bc\\000' has length 5.`
      },
      {
        name: "lower",
        details: "string.lower (s)",
        help: "Receives a string and returns a copy of this string with all uppercase letters changed to lowercase. All other characters are left unchanged. The definition of what an uppercase letter is depends on the current locale."
      },
      {
        name: "match",
        details: "string.match (s, pattern [, init])",
        help: "Looks for the first match of pattern in the string s. If it finds one, then match returns the captures from the pattern; otherwise it returns nil. If pattern specifies no captures, then the whole match is returned. A third, optional numerical argument init specifies where to start the search; its default value is 1 and can be negative."
      },
      {
        name: "rep",
        details: "string.rep (s, n)",
        help: "Returns a string that is the concatenation of n copies of the string s."
      },
      {
        name: "reverse",
        details: "string.reverse (s)",
        help: "Returns a string that is the string s reversed."
      },
      {
        name: "sub",
        details: "string.sub (s, i [, j])",
        help: "Returns the substring of s that starts at i and continues until j; i and j can be negative. If j is absent, then it is assumed to be equal to -1 (which is the same as the string length). In particular, the call string.sub(s,1,j) returns a prefix of s with length j, and string.sub(s, -i) returns a suffix of s with length i."
      },
      {
        name: "upper",
        details: "string.upper (s)",
        help: "Receives a string and returns a copy of this string with all lowercase letters changed to uppercase. All other characters are left unchanged. The definition of what a lowercase letter is depends on the current locale."
      }
    ];
  }
}