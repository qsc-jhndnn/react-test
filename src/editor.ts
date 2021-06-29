import { Monaco } from "@monaco-editor/react";
//import parserx from "./parser";

export default class editorX {

  monaco: Monaco;

  controls: Array<string>;

  constructor(monaco:Monaco) {
    this.monaco = monaco;
    this.controls = ["Control_1", "Control_2", "Mute"];
  }

  parseLua(lua: any) {
  //  let parser = new parserx();
  //  parser.parse(lua);
  }

  createMathOptions() {
    return [
      {
        label: 'min',
        kind: this.monaco.languages.CompletionItemKind.Function,
        detail: "some detail here...",
        documentation: "go small",
        insertText: 'min(',
      },
      {
        label: 'max',
        kind: this.monaco.languages.CompletionItemKind.Function,
        documentation: "go big",
        insertText: 'max(',
      },
    ];
  }

  createStringOptions() {
    return [
      {
        label: 'format',
        kind: this.monaco.languages.CompletionItemKind.Function,
        detail: "some detail here...",
        documentation: "go small",
        insertText: 'format(',
      },
      {
        label: 'length',
        kind: this.monaco.languages.CompletionItemKind.Function,
        detail: "THIS IS BIG",
        documentation: "go big",
        insertText: 'length(',
      },
    ];
  }

  globalProposals() {
    return [
      {
        label: 'math',
        kind: this.monaco.languages.CompletionItemKind.Module,
        documentation: "Some math crap",
        insertText: 'math',
      },
      {
        label: 'Controls',
        kind: this.monaco.languages.CompletionItemKind.Module,
        documentation: "The controls",
        insertText: 'Controls',
      },
      {
        label: 'string',
        kind: this.monaco.languages.CompletionItemKind.Module,
        documentation: "Some string crap",
        insertText: 'string',
      },
      {
        label: 'function',
        kind: this.monaco.languages.CompletionItemKind.Keyword,
        documentation: "write a function",
        insertText: 'function',
      },
      {
        label: 'end',
        kind: this.monaco.languages.CompletionItemKind.Keyword,
        documentation: "STOP IT!",
        insertText: 'end ',
      },
      {
        label: 'return',
        kind: this.monaco.languages.CompletionItemKind.Keyword,
        documentation: "go",
        insertText: 'return',
      },
    ];
  }

  createControlOptions(tok:string) {
    var options = [] as any;
    if(tok === "Controls.") {
      this.controls.forEach(ctl => {
        let opt = {
          label: ctl,
          kind: this.monaco.languages.CompletionItemKind.Field,
          documentation: "a control",
          insertText: ctl
        };
        options.push(opt);
      });
    }
    else {
      // split on .
      let toks = tok.split(".");
      if(toks.length == 3 && toks[2] === "") {
        if(this.controls.includes(toks[1])) {
          options.push({
            label: 'String',
            kind: this.monaco.languages.CompletionItemKind.Function,
            insertText: "String"
          });
          options.push({
            label: 'Value',
            kind: this.monaco.languages.CompletionItemKind.Function,
            insertText: "Value"
          });
          options.push({
            label: 'Position',
            kind: this.monaco.languages.CompletionItemKind.Function,
            insertText: "Position"
          });
        }

      }
    }
    return options;
  }

  getCompletionOptions(tok:string) {
    if(tok.length > 0 && tok[tok.length-1] == ".") {
      if(tok.startsWith("Controls.")) return this.createControlOptions(tok);
      if(tok == "math.") return this.createMathOptions();
      else if(tok == "string.") return this.createStringOptions();
      return [];
    }
    else return this.globalProposals(); 
  }

  provideCompletionItems(model : any, position : any, context : any, token: any) {

    let line = model.getValueInRange({startLineNumber: position.lineNumber, startColumn: 1, endLineNumber: position.lineNumber, endColumn: position.column});
    let tokens = line.split(/(\s+)/);

    let tok = tokens[tokens.length-1];
    console.log(tok);

    return { suggestions: this.getCompletionOptions(tok) };
  }

  resolveCompletionItem(item: any, token: any) {
    console.log("resolveCompletionItem")
  }

  getLuaCompletionProvider(monaco: Monaco) {
    return {
      triggerCharacters: ['.'],
      provideCompletionItems: (model : any, position : any, context : any, token: any) => { return this.provideCompletionItems(model, position, context, token); },
      resolveCompletionItem: (item: any, token: any) => { return this.resolveCompletionItem(item, token) },
    }
  }
}
