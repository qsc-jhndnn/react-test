import { Monaco } from "@monaco-editor/react";


export class option {
  name: string;
  hover: string;
  hoverDetails: string;
  insertText: string;

  constructor() {
    this.name = "";
    this.hover = "";
    this.hoverDetails = "";
    this.insertText = "";
  }
}

export class optionLib {
  name: string;
  description: string;

  constructor() {
    this.name = "";
    this.description = "";
  }

  getOptionsInternal(): Array<option> {
    return new Array<option>();
  }

  getSnippetsInternal() : Array<option> {
    return new Array<option>();
  }

  getHover(func:string) : any {
    let contents = [] as any;
    this.getOptionsInternal().forEach(opt => {
      if(opt.name === func) {
        contents.push({ value: '```lua\n(function) '+opt.hover+'\n```' });
        contents.push({ value: opt.hoverDetails });
      }
    });
    return contents;
  }

  getOptions(monaco:Monaco) : any {
    let kind = monaco.languages.CompletionItemKind.Function;
    let rules = monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet;
    let x =  this.getOptionsInternal().map((value:option) => {
      return {
        label: value.name,
        kind: kind,
        detail: value.hoverDetails,
        documentation: "documentation",
        /* eslint-disable no-template-curly-in-string */
        insertText: value.name,
        insertTextRules: rules,
        commitCharacters : ["("]

      };
    });
    return x;
  }

  getSnippets(monaco:Monaco) : any {
    let kind = monaco.languages.CompletionItemKind.Snippet;
    let rules = monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet;
    let x =  this.getSnippetsInternal().map((value:option) => {
      return {
        label: value.name,
        kind: kind,
        detail: value.hoverDetails,
        documentation: "documentation",
        insertText: value.insertText,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      };
    });
    return x;

  }



}
