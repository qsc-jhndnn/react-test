import { Monaco } from "@monaco-editor/react";

export class option {
  name: string;
  help: string;
  details: string;
  insertText?: string;
  backSpace?: boolean;

  constructor() {
    this.name = "";
    this.help = "";
    this.details = "";
    this.insertText = "";
    this.backSpace = false;
  }
}

export class optionLib {
  name: string;
  description: string;

  constructor() {
    this.name = "";
    this.description = "";
  }

  getOptionsInternal(tok:string): Array<option> {
    return new Array<option>();
  }

  getSnippetsInternal() : Array<option> {
    return new Array<option>();
  }

  getHover(func:string) : any {
    let contents = [] as any;
    this.getOptionsInternal(func).forEach(opt => {
      if(opt.name === func) {
        contents.push({ value: '```lua\n(function) '+opt.details+'\n```' });
        contents.push({ value: opt.help });
      }
    });
    return contents;
  }

  getOptions(monaco:Monaco, position:any, tok:string) : any {
    let kind = monaco.languages.CompletionItemKind.Function;
    let rules = monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet;
    let x =  this.getOptionsInternal(tok).map((value:option) => {
      return {
        label: value.name,
        kind: kind,
        detail: value.details,
        documentation: value.help,
        insertText: value.insertText ? value.insertText : value.name,
        insertTextRules: rules,
        additionalTextEdits: value.backSpace ? [ monaco.ISingleEditOperation = { 
          text:"", 
          range: monaco.IRange = { 
            startLineNumber: position.lineNumber, 
            endLineNumber: position.lineNumber, 
            startColumn: position.column -1, 
            endColumn: position.column 
          }
        }] : null,
        commitCharacters : ["("]
      };
    });    return x;
  }

  getSnippets(monaco:Monaco) : any {
    let kind = monaco.languages.CompletionItemKind.Snippet;
    let rules = monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet;
    let x =  this.getSnippetsInternal().map((value:option) => {
      return {
        label: value.name,
        kind: kind,
        detail: value.details,
        documentation: "documentation",
        insertText: value.insertText,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      };
    });
    return x;

  }



}
