import './App.css';
import React from 'react'
import Editor from '@monaco-editor/react';
import editorX from './editor'

class App extends React.Component {
  /*

  createMathOptions(monaco) {
    return [
      {
          label: 'min',
          kind: monaco.languages.CompletionItemKind.Function,
          detail : "some detail here...",
          documentation: "go small",
          insertText: 'min(',
      },
      {
          label: 'max',
          kind: monaco.languages.CompletionItemKind.Function,
          documentation: "go big",
          insertText: 'max(',
      },
    ];
  }
  
  createStringOptions(monaco) {
    return [
      {
          label: 'format',
          kind: monaco.languages.CompletionItemKind.Function,
          detail : "some detail here...",
          documentation: "go small",
          insertText: 'format(',
      },
      {
          label: 'length',
          kind: monaco.languages.CompletionItemKind.Function,
          documentation: "go big",
          insertText: 'length(',
      },
    ];
  }
  
  
  globalProposals(monaco) {
    return [
      {
          label: 'math',
          kind: monaco.languages.CompletionItemKind.Module,
          documentation: "Some math crap",
          insertText: 'math',
      },
      {
        label: 'string',
        kind: monaco.languages.CompletionItemKind.Module,
        documentation: "Some string crap",
        insertText: 'string',
      },
      {
        label: 'function',
        kind: monaco.languages.CompletionItemKind.Keyword,
        documentation: "write a function",
        insertText: 'function(',
      },
      {
        label: 'end',
        kind: monaco.languages.CompletionItemKind.Keyword,
        documentation: "STOP IT!",
        insertText: 'end ',
      },
      {
        label: 'return',
        kind: monaco.languages.CompletionItemKind.Keyword,
        documentation: "go",
        insertText: 'return',
      },
  ];
  }
  
  function getLuaCompletionProvider(monaco)
  {
    return {
      triggerCharacters:['.'],
      provideCompletionItems: function(model, position, context, token)
      {
        var word = model.getWordUntilPosition(position);
        position.column = position.column - 1;
        //var prevAt = model.getWordAtPosition(position);
        //var prevUntil = model.getWordUntilPosition(position);
  
        if(context.triggerKind === global.monaco.languages.CompletionTriggerKind.TriggerCharacter &&
           context.triggerCharacter === "." )
        {
          // get previous word
          position.column = position.column - 1;
          var prevWord = model.getWordAtPosition(position);
          if(prevWord.word === "math") return { suggestions : this.createMathOptions(monaco) };
          else if(prevWord.word === "string") return { suggestions : this.createStringOptions(monaco) };
          return { suggestions: [] };
        }
        if(context.triggerKind === global.monaco.languages.CompletionTriggerKind.Invoke && word.word === "")
        {
          return { suggestions : this.globalProposals(monaco) };
        }
        return { suggestions : this.globalProposals(monaco) };
      },
      resolveCompletionItem: function(item, token)
      {
        console.log("resolveCompletionItem")
      }
    }
  }

  */

  componentDidMount()  {
  }

  editorWillMount(monaco) {
    var editor = new editorX(monaco);
    monaco.languages.registerCompletionItemProvider("lua", editor.getLuaCompletionProvider(monaco));
  }

  handleEditorDidMount(editor, monaco) {
  }

  render() {
      return (
        <div style={{ boxSizing:'border-box', overflow:'hidden', width:'100%', height:'100vh' }} >
          <Editor
            language="lua"
            theme='vs-dark'
            value="function foo() return 'hey' end"
            beforeMount={this.editorWillMount}
            onMount={this.handleEditorDidMount}
            />
        </div>
      );
  }
}

export default App;
