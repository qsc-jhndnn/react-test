import antlr4 from 'antlr4';
import luaLexer from './LuaLexer.js';
import luaParser from './LuaParser.js';
import luaListener from './LuaListener.js';

class myListener extends luaListener {
	enterChunk(ctx) { console.log("enterChunk") };
	exitChunk(ctx) { console.log("exitChunk") };
	enterBlock(ctx) { console.log("enterBlock") };
	exitBlock(ctx) { console.log("exitBlock") };
	enterStat(ctx) { console.log("enterStat") };
	exitStat(ctx) { console.log("exitStat") };
	enterAttnamelist(ctx) { console.log("enterAttnamelist") };
	exitAttnamelist(ctx) { console.log("exitAttnamelist") };
	enterAttrib(ctx) { console.log("enterAttrib") };
	exitAttrib(ctx) { console.log("exitAttrib") };
	enterRetstat(ctx) { console.log("enterRetstat") };
	exitRetstat(ctx) { console.log("exitRetstat") };
	enterLabel(ctx) { console.log("enterLabel") };
	exitLabel(ctx) { console.log("exitLabel") };
	enterFuncname(ctx) { console.log("enterFuncname") };
	exitFuncname(ctx) { console.log("exitFuncname") };
	enterVarlist(ctx) { console.log("enterVarlist") };
	exitVarlist(ctx) { console.log("exitVarlist") };
  enterNamelist(ctx) { console.log("enterNamelist") };
  exitNamelist(ctx) { console.log("exitNamelist") };
  enterExplist(ctx) { console.log("enterExplist") };
  exitExplist(ctx) { console.log("exitExplist") };
  enterExp(ctx) { console.log("enterExp") };
  exitExp(ctx) { console.log("exitExp") };
  enterPrefixexp(ctx) { console.log("enterPrefixexp") };
  exitPrefixexp(ctx) { console.log("exitPrefixexp") };
  enterFunctioncall(ctx) { console.log("enterFunctioncall") };
  exitFunctioncall(ctx) { console.log("exitFunctioncall") };
  enterVarOrExp(ctx) { console.log("enterVarOrExp") };
  exitVarOrExp(ctx) { console.log("exitVarOrExp") };
  enterVar_(ctx) { console.log("enterVar_") };
  exitVar_(ctx) { console.log("exitVar_") };
  enterVarSuffix(ctx) { console.log("enterVarSuffix") };
  exitVarSuffix(ctx) { console.log("exitVarSuffix") };
  enterNameAndArgs(ctx) { console.log("enterNameAndArgs") };
  exitNameAndArgs(ctx) { console.log("exitNameAndArgs") };
  enterArgs(ctx) { console.log("enterArgs") };
  exitArgs(ctx) { console.log("exitArgs") };
  enterFunctiondef(ctx) { console.log("enterFunctiondef") };
  exitFunctiondef(ctx) { console.log("exitFunctiondef") };
  enterFuncbody(ctx) { console.log("enterFuncbody") };
  exitFuncbody(ctx) { console.log("exitFuncbody") };
  enterParlist(ctx) { console.log("enterParlist") };
  exitParlist(ctx) { console.log("exitParlist") };
  enterTableconstructor(ctx) { console.log("enterTableconstructor") };
  exitTableconstructor(ctx) { console.log("exitTableconstructor") };
  enterFieldlist(ctx) { console.log("enterFieldlist") };
  exitFieldlist(ctx) { console.log("exitFieldlist") };
  enterField(ctx) { console.log("enterField") };
  exitField(ctx) { console.log("exitField") };
  enterFieldsep(ctx) { console.log("enterFieldsep") };
  exitFieldsep(ctx) { console.log("exitFieldsep") };
  enterOperatorOr(ctx) { console.log("enterOperatorOr") };
  exitOperatorOr(ctx) { console.log("exitOperatorOr") };
  enterOperatorAnd(ctx) { console.log("enterOperatorAnd") };
  exitOperatorAnd(ctx) { console.log("exitOperatorAnd") };
  enterOperatorComparison(ctx) { console.log("enterOperatorComparison") };
  exitOperatorComparison(ctx) { console.log("exitOperatorComparison") };
  enterOperatorStrcat(ctx) { console.log("enterOperatorStrcat") };
  exitOperatorStrcat(ctx) { console.log("exitOperatorStrcat") };
  enterOperatorAddSub(ctx) { console.log("enterOperatorAddSub") };
  exitOperatorAddSub(ctx) { console.log("exitOperatorAddSub") };
  enterOperatorMulDivMod(ctx) { console.log("enterOperatorMulDivMod") };
  exitOperatorMulDivMod(ctx) { console.log("exitOperatorMulDivMod") };
  enterOperatorBitwise(ctx) { console.log("enterOperatorBitwise") };
  exitOperatorBitwise(ctx) { console.log("exitOperatorBitwise") };
  enterOperatorUnary(ctx) { console.log("enterOperatorUnary") };
  exitOperatorUnary(ctx) { console.log("exitOperatorUnary") };
  enterOperatorPower(ctx) { console.log("enterOperatorPower") };
  exitOperatorPower(ctx) { console.log("exitOperatorPower") };
  enterNumber(ctx) { console.log("enterNumber") };
  exitNumber(ctx) { console.log("exitNumber") };
  enterString(ctx) { console.log("enterString") };
  exitString(ctx) { console.log("exitString") };
}

class visitor {
  visitChildren(ctx) {
    if (!ctx) {
      return;
    }

    console.log(ctx);

    if (ctx.children) {
      return ctx.children.map(child => {
        if (child.children && child.children.length != 0) {
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
    console.log(`parsing ${lua}`);
    const chars = new antlr4.InputStream(lua);
    const lexer = new luaLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new luaParser(tokens);
    //parser.buildParseTrees = true;
    const tree = parser.chunk();
    const printer = new myListener();
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(printer, tree);
    console.log("*****************************");
    tree.accept(new visitor());
    console.log("*****************************");
  }
}