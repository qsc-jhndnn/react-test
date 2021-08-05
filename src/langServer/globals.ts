import { Monaco } from "@monaco-editor/react";

function getGlobals() : Array<any> {
  return [
    {
      name: "assert",
      display: "assert (v [, message])",
      help: "Issues an error when the value of its argument v is false (i.e., nil or false); otherwise, returns all its arguments. message is an error message; when absent, it defaults to 'assertion failed!'"
    },
    {
      name: "collectgarbage",
      display: "collectgarbage (opt [, arg])",
      help: `This function is a generic interface to the garbage collector. It performs different functions according to its first argument, opt:

'stop': stops the garbage collector.
'restart': restarts the garbage collector.
'collect': performs a full garbage-collection cycle.
'count': returns the total memory in use by Lua (in Kbytes).
'step': performs a garbage-collection step. Returns true if the step finished a collection cycle.
'setpause': sets arg as the new value for the pause of the collector. Returns the previous value for pause.
'setstepmul': sets arg as the new value for the step multiplier of the collector. Returns the previous value for step.`
    },
    {
      name: "error",
      display: "error (message [, level])",
      help: "Terminates the last protected function called and returns message as the error message. Function error never returns."
    },
    {
      name: "getmetatable",
      display: "getmetatable (object)",
      help: "If object does not have a metatable, returns nil. Otherwise, if the object's metatable has a '__metatable' field, returns the associated value. Otherwise, returns the metatable of the given object."
    },
    {
      name: "ipairs",
      display: "ipairs (t)",
      help: `Returns three values: an iterator function, the table t, and 0, so that the construction

for i,v in ipairs(t) do body end

will iterate over the pairs (1,t[1]), (2,t[2]), ···, up to the first integer key absent from the table.`
    },
    {
      name: "next",
      display: "next (table [, index])",
      help: `Allows a program to traverse all fields of a table. Its first argument is a table and its second argument is an index in this table. next returns the next index of the table and its associated value. When called with nil as its second argument, next returns an initial index and its associated value. When called with the last index, or with nil in an empty table, next returns nil. If the second argument is absent, then it is interpreted as nil. In particular, you can use next(t) to check whether a table is empty.

The order in which the indices are enumerated is not specified, even for numeric indices. (To traverse a table in numeric order, use a numerical for or the ipairs function.)

The behavior of next is undefined if, during the traversal, you assign any value to a non-existent field in the table. You may however modify existing fields. In particular, you may clear existing fields.`
    },
    {
      name: "pairs",
      display: "pairs (t)",
      help: `Returns three values: the next function, the table t, and nil, so that the construction

   for k,v in pairs(t) do body end

will iterate over all key–value pairs of table t.`
    },
    {
      name: "print",
      display: "print (···)",
      help: "Receives any number of arguments, and prints their values to stdout, using the tostring function to convert them to strings. print is not intended for formatted output, but only as a quick way to show a value, typically for debugging. For formatted output, use string.format."
    },
    {
      name: "rawequal",
      display: "rawequal (v1, v2)",
      help: "Checks whether v1 is equal to v2, without invoking any metamethod. Returns a boolean."
    },
    {
      name: "rawget",
      display: "rawget (table, index)",
      help: "Gets the real value of table[index], without invoking any metamethod. table must be a table; index may be any value."
    },
    {
      name: "rawset",
      display: "rawset (table, index, value)",
      help: `Sets the real value of table[index] to value, without invoking any metamethod. table must be a table, index any value different from nil, and value any Lua value.

This function returns table.`
    },
    {
      name: "select",
      display: "select (index, ···)",
      help: "If index is a number, returns all arguments after argument number index. Otherwise, index must be the string '#', and select returns the total number of extra arguments it received."
    },
    {
      name: "setmetatable",
      display: "setmetatable (table, metatable)",
      help: `Sets the metatable for the given table. (You cannot change the metatable of other types from Lua, only from C.) If metatable is nil, removes the metatable of the given table. If the original metatable has a '__metatable' field, raises an error.

This function returns table.`
    },
    {
      name: "tonumber",
      display: "tonumber (e [, base])",
      help: `Tries to convert its argument to a number. If the argument is already a number or a string convertible to a number, then tonumber returns this number; otherwise, it returns nil.

An optional argument specifies the base to interpret the numeral. The base may be any integer between 2 and 36, inclusive. In bases above 10, the letter 'A' (in either upper or lower case) represents 10, 'B' represents 11, and so forth, with 'Z' representing 35. In base 10 (the default), the number can have a decimal part, as well as an optional exponent part (see §2.1). In other bases, only unsigned integers are accepted.`
    },
    {
      name: "tostring",
      display: "tostring (e)",
      help: `Receives an argument of any type and converts it to a string in a reasonable format. For complete control of how numbers are converted, use string.format.

If the metatable of e has a '__tostring' field, then tostring calls the corresponding value with e as argument, and uses the result of the call as its result.`
    },
    {
      name: "type",
      display: "type (v)",
      help: "Returns the type of its only argument, coded as a string. The possible results of this function are 'nil' (a string, not the value nil), 'number', 'string', 'boolean', 'table', 'function', 'thread', and 'userdata'."
    },
    {
      name: "_VERSION",
      display: "_VERSION",
      help: "A global variable (not a function) that holds a string containing the current interpreter version. The current contents of this variable is 'Lua 5.1'.",
      isVar: true
    },
    {
      name: "xpcall",
      display: "xpcall (f, err)",
      help: "This function is similar to pcall, except that you can set a new error handler."
    },
  ];
}

export function getFunctions(monaco:Monaco) : Array<any> {
  return getGlobals().map((value:any) => {
    return {
      label: value.name,
      kind: value.isVar ? monaco.languages.CompletionItemKind.Constant : monaco.languages.CompletionItemKind.Function,
      detail: value.display,
      documentation: value.help,
      insertText: value.name,
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      commitCharacters : value.isVar ? null : ["("]
    };
  });
}

export function getFunctionNames() : Array<string>
{
  return Array.from(getGlobals(), x => x.name);
}

export function getHover(func:string) : any {
  let contents = [] as any;
  getGlobals().forEach(f => {
    if(f.name === func) {
      contents.push({ value: '```lua\n(function) '+f.display+'\n```' });
      contents.push({ value: f.help });
    }
  });
  return contents;
}

export function getSnippets(monaco:Monaco) : any {
  return [{
    label: 'new function',
    kind: monaco.languages.CompletionItemKind.Snippet,
    detail: "function snippet",
    documentation: "create a function",
    /* eslint-disable no-template-curly-in-string */
    insertText: 'function ${1:functionName}(${2:...})\n  ${3:--body}\nend\n',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
  },
  {
    label: 'for loop',
    kind: monaco.languages.CompletionItemKind.Snippet,
    detail: "loop over a table",
    documentation: "loop over a table",
    /* eslint-disable no-template-curly-in-string */
    insertText: 'for ${1:key},${2:value} in pairs(${3:table}) do\n  ${4}\nend',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
  }];
}

export function is(name: string) : boolean
{
  let ret = false;
  getFunctionNames().forEach(n => {
    ret = ret || name === n;
  });
  return ret;
}



