import antlr4 from 'antlr4';
import luaLexer from './LuaLexer.js';
import luaParser from './LuaParser.js';

class visitor {

  local_vars = new Set();
  local_funcs = new Set();

  current_var = "";

  ruleToString(rule)
  {
    switch(rule)
    {
      case luaParser.RULE_chunk: return "chunk";
      case luaParser.RULE_block: return "block";
      case luaParser.RULE_block: return "block";
      case luaParser.RULE_stat: return "stat";
      case luaParser.RULE_attnamelist: return "attnamelist";
      case luaParser.RULE_attrib: return "attrib";
      case luaParser.RULE_retstat: return "retstat";
      case luaParser.RULE_funcname: return "funcname";
      case luaParser.RULE_varlist: return "varlist";
      case luaParser.RULE_namelist: return "chunamelistnk";
      case luaParser.RULE_explist: return "explist";
      case luaParser.RULE_exp: return "exp";
      case luaParser.RULE_prefixexp: return "prefixexp";
      case luaParser.RULE_functioncall: return "functioncall";
      case luaParser.RULE_varOrExp: return "varOrExp";
      case luaParser.RULE_var_: return "var_";
      case luaParser.RULE_varSuffix: return "varSuffix";
      case luaParser.RULE_nameAndArgs: return "nameAndArgs";
      case luaParser.RULE_args: return "args";
      case luaParser.RULE_functiondef: return "functiondef";
      case luaParser.RULE_funcbody: return "funcbody";
      case luaParser.RULE_parlist: return "parlist";
      case luaParser.RULE_tableconstructor: return "tableconstructor";
      case luaParser.RULE_fieldlist: return "fieldlist";
      case luaParser.RULE_field: return "field";
      case luaParser.RULE_fieldsep: return "fieldsep";
      case luaParser.RULE_operatorOr: return "operatorOr";
      case luaParser.RULE_operatorAnd: return "operatorAnd";
      case luaParser.RULE_operatorComparison: return "operatorComparison";
      case luaParser.RULE_operatorStrcat: return "operatorStrcat";
      case luaParser.RULE_operatorAddSub: return "operatorAddSub";
      case luaParser.RULE_operatorMulDivMod: return "operatorMulDivMod";
      case luaParser.RULE_operatorBitwise: return "operatorBitwise";
      case luaParser.RULE_operatorUnary: return "operatorUnary";
      case luaParser.RULE_operatorPower: return "operatorPower";
      case luaParser.RULE_number: return "number";
      case luaParser.RULE_string: return "string";
    }
    console.log(rule);
    return "??";
  }

  getKeywords() {
    let keywords = new Set();
    this.local_vars.forEach(v => {
      keywords.add({
        label: v,
        kind: 4,
        detail: "local variable",
        insertText: v,
        insertRule: 1
      });
    });

    this.local_funcs.forEach(f => {
      keywords.add({
        label: f,
        kind: 1,
        detail: "local function",
        /* eslint-disable no-template-curly-in-string */
        insertText: f + "(${1})",
        insertRule: 4
      });
    });
    return keywords;
  }
  visitChildren(ctx) {
    if (!ctx) {
      return;
    }

    let txt = ctx.getText();
    // if we have a current var and the next thing is an = we are good to go
    //console.log(`child ${txt} : ${ this.ruleToString(ctx.ruleIndex)}`);
     
    // types are stolen from monaco but i'm too lazy to import them...
    if (ctx.ruleIndex === luaParser.RULE_var_) {
      if(!txt.includes('.'))
      {
        this.current_var = txt;
        this.local_vars.add(txt);
      }
    }
    else if (ctx.ruleIndex === luaParser.RULE_funcname) {
      this.local_funcs.add(txt);
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
    return visit.getKeywords();
  }
}