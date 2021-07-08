import { Monaco } from "@monaco-editor/react";
import parserx from "./parser";
import parser2 from "./parser2"

import { optionLib } from "./modules/options"
import { mathLib } from "./modules/math"
import { stringLib } from "./modules/string"

export default class editorX {

  monaco: Monaco;

  libs : Array<optionLib>;
  controls: Array<string>;

  constructor(editor: any, monaco: Monaco) {
    this.monaco = monaco;
    this.libs = [ new mathLib(), new stringLib()];


    editor.getModel().onDidChangeContent((e) => {
      let model = editor.getModel();

      let p2 = new parser2();
      let errors = p2.check_code(model.getValue());

      var markerData = [] as any;
      errors.forEach(err => {
        console.log(err);
        markerData.push({
          message: err.msg,
          startLineNumber: err.line,
          endLineNumber: err.line,
          startColumn: err.column,
          endColumn: err.column,
          severity: this.monaco.MarkerSeverity.Error,
        });
      });
      this.monaco.editor.setModelMarkers(model, model.id, markerData);


    });

    this.controls = ["Control_1", "Control_2", "Mute"];
  }

  globalProposals() {
    let props = [] as any;
    this.libs.forEach(lib => {
      props.push({
        label: lib.name,
        kind: this.monaco.languages.CompletionItemKind.Module,
        detail: lib.description,
        insertText: lib.name,
        commitCharacters : ["."]
      });
    });
    props.push({
      label: 'Controls',
      kind: this.monaco.languages.CompletionItemKind.Module,
      documentation: "The controls",
      insertText: 'Controls',
    });
    props.push({
      label: 'function',
      kind: this.monaco.languages.CompletionItemKind.Keyword,
      documentation: "write a function",
      insertText: 'function ',
    });
    props.push({
      label: 'new function',
      kind: this.monaco.languages.CompletionItemKind.Snippet,
      detail: "function snippet",
      documentation: "create a function",
      /* eslint-disable no-template-curly-in-string */
      insertText: 'function ${1:functionName}(${2:...})\n  ${3:--body}\nend\n',
      insertTextRules: this.monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    });
    props.push({
      label: 'end',
      kind: this.monaco.languages.CompletionItemKind.Keyword,
      documentation: "STOP IT!",
      insertText: 'end ',
    });
    props.push({
      label: 'end',
      kind: this.monaco.languages.CompletionItemKind.Keyword,
      documentation: "STOP IT!",
      insertText: 'end ',
    });
    return props;
  }

  createControlOptions(tok: string) {
    var options = [] as any;
    if (tok === "Controls.") {
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
      if (toks.length === 3 && toks[2] === "") {
        if (this.controls.includes(toks[1])) {
          options.push({
            label: 'String',
            kind: this.monaco.languages.CompletionItemKind.Field,
            insertText: "String"
          });
          options.push({
            label: 'Value',
            kind: this.monaco.languages.CompletionItemKind.Field,
            insertText: "Value"
          });
          options.push({
            label: 'Position',
            kind: this.monaco.languages.CompletionItemKind.Field,
            insertText: "Position"
          });
        }

      }
    }
    return options;
  }

  getCompletionOptions(tok: string) {
    if (tok.length > 0 && tok[tok.length - 1] === ".") {
      let options = [];
      let libName = tok.substr(0,tok.length-1);
      if (tok.startsWith("Controls")) return this.createControlOptions(tok);
      this.libs.forEach(lib => {
          if(lib.name === libName) options = lib.getOptions(this.monaco);
      });
      return options;
    }
    return this.globalProposals();
  }

  provideCompletionItems(model: any, position: any, context: any, token: any) {
    let line = model.getValueInRange({ startLineNumber: position.lineNumber, startColumn: 1, endLineNumber: position.lineNumber, endColumn: position.column });
    let tokens = line.split(/(\s+)/);

    let tok = tokens[tokens.length - 1];
    // get suggestions
    let sugs = this.getCompletionOptions(tok);
    // for right now if the user pressed a '.' don't show the parsed stuff
    if (context.triggerKind !== this.monaco.languages.CompletionTriggerKind.TriggerCharacter) {
      let content = model.getValueInRange({ startLineNumber: 1, startColumn: 1, endLineNumber: position.lineNumber, endColumn: position.column });
      let parser = new parserx();
      let tokens = parser.get_tokens(content);
      // parse lua to get variables and functions
      tokens.forEach(element => {
        // hack for now....
        if(!element.label.startsWith("math.") && !element.label.startsWith("string."))
        {
          sugs.push({
            label: element.label,
            detail: element.detail,
            kind: element.kind,
            insertText: element.insertText,
            insertTextRules: element.insertRule
          });
        }
      });
    }
    return { suggestions: sugs };
  }

  isWhiteSpace(str:string) {
    let code = str.charCodeAt(0);
    if( code === 46 ) return false;
    if( code >= 48 && code <= 57) return false;
    if( code >= 65 && code <= 90) return false;
    if( code === 95 ) return false;
    if( code >= 97 && code <= 122) return false;
    return true;
  }

  provideHover(model: any, position: any, token: any) {
    let contents = [] as any;

    let line = model.getLineContent(position.lineNumber);
    // go forward and back until we get to whitespace
    let startColumn = position.column-1;
    while(startColumn > 0 && !this.isWhiteSpace(line[startColumn])) {
      startColumn--;
    }
    //startColumn--;
    let endColumn = position.column - 1;
    while(endColumn < line.length && !this.isWhiteSpace(line[endColumn])) {
      endColumn++;
    }
    let hoverToken = line.substr(startColumn,endColumn-startColumn).trim();
    console.log(`hover ${hoverToken}`);

    let toks = hoverToken.split(".");
    if(toks.length === 2) {
      let module = toks[0];
      let func = toks[1];
      this.libs.forEach(lib => {
        if(lib.name === module) contents = lib.getHover(func);
      });
    }
    return { 
      contents: contents, 
      range : {
        startColumn: startColumn+1,
        endColumn: endColumn+1,
        startLineNumber: position.lineNumber,
        endLineNumber:position.lineNumber
      } };
  }


  resolveCompletionItem(item: any, token: any) {
    console.log("resolveCompletionItem")
  }

  getLuaCompletionProvider(monaco: Monaco) {
    return {
      triggerCharacters: ['.'],
      provideCompletionItems: (model: any, position: any, context: any, token: any) => { return this.provideCompletionItems(model, position, context, token); },
      resolveCompletionItem: (item: any, token: any) => { return this.resolveCompletionItem(item, token) },
    }
  }

  getHoverProvider(monaco: Monaco) {
    return {
      provideHover: (model: any, position: any, token: any) => {
        return this.provideHover(model, position, token);
      },
    }
  }

}
