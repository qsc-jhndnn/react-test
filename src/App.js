import './App.css';
import React from 'react'
import Editor from '@monaco-editor/react';
import editorX from './editor'
import { isTypeQueryNode } from 'typescript';

class App extends React.Component {

  editor = new editorX();

  constructor(props) {
    super(props);
    this.editor = new editorX();
    this.state = {
      code : `function foo() return "hey" end\n\nbob = math.max(3,4)\n`
    }
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
            language="lua"
            value="asdf"
            theme='vs-dark'
            onMount={(e,m)=> { this.handleEditorDidMount( e,m ) }}
            />
        </div>
      );
  }

  setCode(code) {
    this.setState({code: code});
  }

  getCode() {
    return this.state.code;
  }
}

export default App;
