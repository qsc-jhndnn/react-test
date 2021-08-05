import { Monaco } from "@monaco-editor/react";

export function list() {
  return [
    "and",
    "break",
    "do",
    "else",
    "elseif",
    "end",
    "false",
    "for",
    "function",
    "if",
    "in",
    "local",
    "nil",
    "not",
    "or",
    "repeat",
    "return",
    "then",
    "true",
    "until",
    "while",
  ]
}

export function get(monaco:Monaco) : any {
  return list().map((kw) => {
    return {
      label: kw,
      kind: monaco.languages.CompletionItemKind.Keyword,
      insertText: kw + ' ',
    }
  })
}
