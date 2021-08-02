import { Monaco } from "@monaco-editor/react";

export class baseLua {

  getProposals(monaco:Monaco, props:any) : any {
    props.push({
      label: 'function',
      kind: monaco.languages.CompletionItemKind.Keyword,
      documentation: "write a function",
      insertText: 'function ',
    });
    props.push({
      label: 'new function',
      kind: monaco.languages.CompletionItemKind.Snippet,
      detail: "function snippet",
      documentation: "create a function",
      /* eslint-disable no-template-curly-in-string */
      insertText: 'function ${1:functionName}(${2:...})\n  ${3:--body}\nend\n',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    });

    props.push({
      label: 'for loop',
      kind: monaco.languages.CompletionItemKind.Snippet,
      detail: "loop over a table",
      documentation: "loop over a table",
      /* eslint-disable no-template-curly-in-string */
      insertText: 'for ${1:key},${2:value} in pairs(${3:table}) do\n  ${4}\nend',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    });

    props.push({
      label: 'end',
      kind: monaco.languages.CompletionItemKind.Keyword,
      documentation: "STOP IT!",
      insertText: 'end ',
    });
  }
}
