import { Monaco } from "@monaco-editor/react";

export class option {
  name: string;
  help: string;
  details: string;
  isVar?: boolean;
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
  isQSC? : boolean;

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

  getHelpInternal(func:Array<string>) : string {
    return "";
  }


  getHelp(func:Array<string>) : string {
    if(this.isQSC) return "Using Lua in Q-SYS/" + this.getHelpInternal(func);
    else return "Lua 5.3 Reference Manual/Standard Libraries/" + this.getHelpInternal(func);
  }

  getHover(func:Array<string>) : any {
    let contents = [] as any;
    this.getOptionsInternal(func[0]).forEach(opt => {
      if(opt.name === func[0]) {
        contents.push({ value: '```lua\n(function) '+opt.details+'\n```' });
        contents.push({ value: opt.help });
      }
    });
    return contents;
  }

  getOptions(monaco:Monaco, position:any, tok:string) : any {
    let rules = monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet;
    let x =  this.getOptionsInternal(tok).map((value:option) => {

      let kind = value.isVar ? monaco.languages.CompletionItemKind.Variable : monaco.languages.CompletionItemKind.Function;

      let commitChar = value.isVar ? [] : ["("];

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
        commitCharacters : commitChar
      };
    });    return x;
  }

  getOptionNames() : any {
    return Array.from(this.getOptionsInternal(""), opt=>opt.name);
  }

  getOptionsRegex() : any {
    let opts = this.getOptionNames();
    return new RegExp(`(${this.name})(.)(${opts.join('|')})`);
  }

  getSnippets(monaco:Monaco) : any {
    let kind = monaco.languages.CompletionItemKind.Snippet;
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
