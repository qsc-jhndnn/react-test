import antlr4 from 'antlr4';
import luaLexer from './LuaLexer.js';
import luaParser from './LuaParser.js';

class visitor {

  keywords = new Set();
  visitChildren(ctx) {
    if (!ctx) {
      return;
    }

    // types are stolen from monaco but i'm too lazy to import them...

    if (ctx.ruleIndex === luaParser.RULE_attnamelist || ctx.ruleIndex === luaParser.RULE_var_) {
      this.keywords.add({
        label: ctx.getText(),
        kind: 4,
        detail: "local variable",
        insertText: ctx.getText(),
        insertRule: 1
      });
    }
    else if (ctx.ruleIndex === luaParser.RULE_funcname) {
      this.keywords.add({
        label: ctx.getText(),
        kind: 1,
        detail: "local function",
        /* eslint-disable no-template-curly-in-string */
        insertText: ctx.getText() + "(${1})",
        insertRule: 4
      });
    }

    if (ctx.children) {
      return ctx.children.map(child => {
        if (child.children && child.children.length !== 0) {
          return child.accept(this);
        } else {
          return child.getText();
        }
      });
    }
  }
}

export default class parser {

  parse(lua) {
    const chars = new antlr4.InputStream(lua);
    const lexer = new luaLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new luaParser(tokens);
    const tree = parser.chunk();
    var visit = new visitor();
    tree.accept(visit);
    return visit.keywords;
  }
}