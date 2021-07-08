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

class errorListener extends antlr4.error.ErrorListener {
  errors = [];
  syntaxError(recognizer, offendingSymbol, line, column, msg, err) {
    console.log("syntaxError");
    this.errors.push(
      this.info = {
        offendingSymbol: offendingSymbol,
        line: line,
        column: column,
        msg: msg,
        err: err
      });
    }
    reportAmbiguity(recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs) {
      console.log("reportAmbiguity");
    }

    reportAttemptingFullContext(recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs) {
      console.log("reportAttemptingFullContext");
    }

    reportContextSensitivity(recognizer, dfa, startIndex, stopIndex, prediction, configs) {
      console.log("reportAttemptingFullContext");
    }
}

export default class parser {

  check_code(lua) {
    const chars = new antlr4.InputStream(lua);
    const lexer = new luaLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new luaParser(tokens);
    parser.removeErrorListeners();
    var errListener = new errorListener();
    parser.addErrorListener(errListener);
    parser.chunk();
    return errListener.errors;
  }

  get_tokens(lua) {
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