import './App.css';
import React from 'react'
import Editor from '@monaco-editor/react';
import editorX from './editor'

class App extends React.Component {
  componentDidMount()  {
  }

  editorWillMount(monaco) {
  }

  handleEditorDidMount(editor, monaco) {
    var editor = new editorX(editor, monaco);
    monaco.languages.registerCompletionItemProvider("lua", editor.getLuaCompletionProvider(monaco));
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
