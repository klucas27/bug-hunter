import Editor from '@monaco-editor/react';


export function TextsCods(props) {
    return (
      <div className={props.className}>
        <Editor
          height="100%"
          defaultLanguage="javascript"
          defaultValue={ props.codigo ||"// Digite seu código aqui"}
          theme="vs-dark"
        />
      </div>
    );
  }
  