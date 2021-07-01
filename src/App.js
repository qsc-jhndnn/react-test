import './App.css';
import React from 'react'
import Editor from '@monaco-editor/react';
import editorX from './editor'

class App extends React.Component {
  componentDidMount()  {
  }

  editorWillMount(monaco) {

    Math.log10(23);

    Math.log10()

  }

  handleEditorDidMount(editor, monaco) {
    var editor = new editorX(editor, monaco);
    monaco.languages.registerCompletionItemProvider("lua", editor.getLuaCompletionProvider(monaco));
    monaco.languages.registerHoverProvider("lua", editor.getHoverProvider(monaco));
  }

  render() {

      let code = `function foo() return "hey" end\n\nmath.max(3,4)\n`;
      return (
        <div style={{ boxSizing:'border-box', overflow:'hidden', width:'100%', height:'100vh' }} >
          <Editor
            language="lua"
            theme='vs-dark'
            value={code}
            beforeMount={this.editorWillMount}
            onMount={this.handleEditorDidMount}
            />
        </div>
      );
  }
}

export default App;
