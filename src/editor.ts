import { Monaco } from "@monaco-editor/react";
import parserx from "./antlr/parser";
import * as syntax from "./checkSyntax"

import { optionLib } from "./langServer/modules/options"

import controlsLib from "./langServer/modules/controls";
import cryptoLib from "./langServer/modules/crypto"
import designLib from "./langServer/modules/design"
import emailLib from "./langServer/modules/email"
import httpLib from "./langServer/modules/httpClient" 
import logLib from "./langServer/modules/log"
import mathLib from "./langServer/modules/math"
import mixerLib from "./langServer/modules/mixer"
import namedControlLib from "./langServer/modules/namedControl"
import networkLib from "./langServer/modules/network"
import qlibLib from "./langServer/modules/qlib" 
import sshLib from "./langServer/modules/ssh" 
import stringLib from "./langServer/modules/string"
import systemLib from "./langServer/modules/system"
import tableLib from "./langServer/modules/table"
import tcpLib from "./langServer/modules/tcpSocket"
import tcpServerLib from "./langServer/modules/tcpSocketServer"
import timerLib from "./langServer/modules/timer"
import uciLib from "./langServer/modules/uci"
import udpLib from "./langServer/modules/udpClient"

import * as luaMonarch from "./luaMonarch";

import * as keywords from "./langServer/keywords"
import * as globals from "./langServer/globals"

export default class editorX {

  monaco: Monaco;
  editor: any;

  libs : Array<optionLib>;
  controlsLib : controlsLib;

  constructor() {
    // keep around so we can set the controls
    this.controlsLib = new controlsLib();
    this.libs = [ 
      new logLib(), 
      new mathLib(), 
      new stringLib(), 
      new tcpLib(), 
      new tableLib(), 
      new timerLib(), 
      new uciLib(),
      new namedControlLib(),
      new systemLib(),
      new httpLib(),
      new qlibLib(),
      new sshLib(),
      new emailLib(),
      new mixerLib(),
      new tcpServerLib(),
      new udpLib(),
      new cryptoLib(),
      new designLib(),
      new networkLib(),
      this.controlsLib];
    this.monaco = null;
    this.editor = null;
    (window as any).editor = this;
  }

  codeChanged() {
    alert("codeChanged");
  }


  controlsChanged() {
    alert("controlsChanged");
  }
  
  init(editor: any, monaco: Monaco) {
    this.monaco = monaco;
    this.editor = editor;
    this.editor.updateOptions({roundedSelection: false});
    let code = `function foo() return "hey" end\n\nbob = math.sin(3)\nbob = math.sinc(3)\n\nbob = math.max(3)\n\nprint(1234)`;
    if((window as any).webView_getCode)
    {
      code = (window as any).webView_getCode();
    }
    if((window as any).webView_getControls)
    {
      this.controlsLib.controls = (window as any).webView_getControls();
    }
    this.editor.setValue(code);

    let langName = "qsclua";
    monaco.languages.register({id: langName});

    let lua = luaMonarch.get();

    this.libs.forEach(lib => {
      lua.language.modules.push(lib.name);
      lua.language.tokenizer.root.unshift([lib.getOptionsRegex(), ['keyword.flow', '', 'keyword.flow' ]]);
    });

    lua.language.globals = globals.getFunctionNames();
    lua.language.keywords = keywords.list();

    monaco.languages.setLanguageConfiguration(langName, lua.conf);
    monaco.languages.setMonarchTokensProvider(langName, lua.language);
    monaco.languages.registerCompletionItemProvider(langName, this.getLuaCompletionProvider(monaco));
    monaco.languages.registerHoverProvider(langName, this.getHoverProvider(monaco));

    editor.getModel().onDidChangeContent((e) => {
      let model = editor.getModel();
      let code = model.getValue();

      if((window as any).webView_setCode)
      {
        (window as any).webView_setCode(code);
      }

      let errors = syntax.check(this.monaco, code);
      this.monaco.editor.setModelMarkers(model, model.id, errors);
    });
  }

  globalProposals() {
    let props = [] as any;
    //push each module name
    this.libs.forEach(lib => {
      props.push({
        label: lib.name,
        kind: this.monaco.languages.CompletionItemKind.Module,
        detail: lib.description,
        insertText: lib.name,
        commitCharacters : ["."]
      });
    });
    props = props.concat(keywords.get(this.monaco));
    props = props.concat(globals.getSnippets(this.monaco));
    props = props.concat(globals.getFunctions(this.monaco));
    // get our module snippets
    this.libs.forEach(lib => {
      props = props.concat(lib.getSnippets(this.monaco));
    });
    return props;
  }

  getCompletionOptions(tok: string, position: any) {
    if (tok.length > 0 && tok[tok.length - 1] === ".") {
      let options = [];
      let libName = tok.substr(0,tok.indexOf("."));
      this.libs.forEach(lib => {
          if(lib.name === libName) options = lib.getOptions(this.monaco, position, tok);
      });
      return options;
    }
    return this.globalProposals();
  }

  isLibName(name: string) : boolean
  {
    let ret = false;
    this.libs.forEach(lib => {
      let modName = lib.name + ".";
      if(name.startsWith(modName)) ret = true;;
    });
    return ret;
  }

  provideCompletionItems(model: any, position: any, context: any, token: any) {
    // get full line
    let line = model.getValueInRange({ startLineNumber: position.lineNumber, startColumn: 1, endLineNumber: position.lineNumber, endColumn: position.column });
    // split into whitespace tokens
    let tokens = line.split(/(\s+)/);
    // get last token
    let tok = tokens[tokens.length - 1];

    let sugs = this.getCompletionOptions(tok, position);
    // for right now if the user pressed a '.' don't show the parsed stuff
    if (context.triggerKind !== this.monaco.languages.CompletionTriggerKind.TriggerCharacter) {
      // parse lua to get variables and functions 
      // we want to ignore our current word we are typing
      let endCol = position.column;
      let currentWord = model.getWordUntilPosition(position);
      if(currentWord)
      {
        endCol = currentWord.startColumn;
      }
      
      let content = model.getValueInRange({ startLineNumber: 1, startColumn: 1, endLineNumber: position.lineNumber, endColumn: endCol });
      let parser = new parserx();
      let tokens = parser.get_tokens(content);
      tokens.forEach(element => {
        if(!this.isLibName(element.label) && !globals.is(element.label))
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

  // defines to make the code more understandable
  periodChar = 46;
  zeroChar = 48;
  nineChar = 57;
  AChar = 65;
  ZChar = 90;
  underscoreChar = 95;
  aChar = 97;
  zChar = 122;
  isWhiteSpace(str:string) {
    let code = str.charCodeAt(0);
    if( code === this.periodChar ) return false; 
    if( code >= this.zeroChar && code <= this.nineChar) return false;
    if( code >= this.AChar && code <= this.ZChar) return false;
    if( code === this.underscoreChar ) return false;
    if( code >= this.aChar && code <= this.zChar) return false;
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

    // see if this is a global we are hovering over
    contents = globals.getHover(hoverToken);
    
    if(contents.length === 0) {
      let toks = hoverToken.split(".");
      if(toks.length >= 2) {
        let module = toks[0];
        let funcs = toks.slice(1);
        // join the rest 
        this.libs.forEach(lib => {
          if(lib.name === module) contents = lib.getHover(funcs);
        });
      }
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
      provideCompletionItems: (model: any, position: any, context: any, token: any) => { 
        return this.provideCompletionItems(model, position, context, token); 
      },
//      resolveCompletionItem: (item: any, token: any) => { return this.resolveCompletionItem(item, token) },
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
