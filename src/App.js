import logo from './logo.svg';
import './App.css';
import Editor from '@monaco-editor/react';

function handleEditorDidMount(editor, monaco) 
{
  alert('hey');
}


function App() {
  return (
    <div className="App" style={{width: '100vw', height: '100vh', boxSizing:'border-box', overflow: 'hidden'}}>
      <Editor
        language="lua"
        theme='vs-dark'
        value="function foo() return 'hey' end"
        onMount={handleEditorDidMount}
        />
    </div>
  );
}

export default App;
