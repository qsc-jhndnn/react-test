import { option, optionLib } from "./options";

export default class lib extends optionLib {

  constructor() {
    super();
    this.name = "table";
    this.description = "Some table stuff"
  }

  getHelpInternal(func:Array<string>) : string {
    return "5 - Table Manipulation.htm";
  }

  getOptionsInternal(tok:string): Array<option> {
    return [
      {
        name: "concat",
        details: "table.concat (table [, sep [, i [, j]]])",
        help: "Given an array where all elements are strings or numbers, returns table[i]..sep..table[i+1] ··· sep..table[j]. The default value for sep is the empty string, the default for i is 1, and the default for j is the length of the table. If i is greater than j, returns the empty string."
      },
      {
        name: "insert",
        details: "table.insert (table, [pos,] value)",
        help: "Inserts element value at position pos in table, shifting up other elements to open space, if necessary. The default value for pos is n+1, where n is the length of the table (see §2.5.5), so that a call table.insert(t,x) inserts x at the end of table t."
      },
      {
        name: "remove",
        details: "table.remove (table [, pos])",
        help: "Removes from table the element at position pos, shifting down other elements to close the space, if necessary. Returns the value of the removed element. The default value for pos is n, where n is the length of the table, so that a call table.remove(t) removes the last element of table t."
      },
      {
        name: "sort",
        details: "table.sort (table [, comp])",
        help: "Sorts table elements in a given order, in-place, from table[1] to table[n], where n is the length of the table. If comp is given, then it must be a function that receives two table elements, and returns true when the first is less than the second (so that not comp(a[i+1],a[i]) will be true after the sort). If comp is not given, then the standard Lua operator < is used instead."
      }
      ];
  }
}
