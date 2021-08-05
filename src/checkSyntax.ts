import { Monaco } from "@monaco-editor/react";
var parser = require('luaparse');

export function check(monaco:Monaco, code:string) : any {
  try {
    parser.parse(code);
  }
  catch(e) {
    return [{
      message: e.message,
      startLineNumber: e.line,
      endLineNumber: e.line,
      startColumn: e.column,
      endColumn: e.column,
      severity: monaco.MarkerSeverity.Error,
    }];    
  }
  return [];
}
