import './App.css';
import React from 'react'
import Editor from '@monaco-editor/react';
import editorX from './editor'

class App extends React.Component {

  editor = new editorX();

  constructor(props) {
    super(props);
    this.editor = new editorX();
    window.myApp = this;
  }
  componentDidMount()  {
  }

  handleEditorDidMount(editor, monaco) {
    this.editor.init(editor, monaco);
  }

  render() {
      return (
        <div style={{ boxSizing:'border-box', overflow:'hidden', width:'100%', height:'100vh' }} >
          <Editor
          language="qsclua"
            theme='vs-dark'
            onMount={(e,m)=> { this.handleEditorDidMount( e,m ) }}
            />
        </div>
      );
  }
}

export default App;
