var parser = require('luaparse');


export default class parser2 {

  check_code(lua) {
    let errors = [];
    try {
      parser.parse(lua);
    }
    catch(e) {
    errors.push({
      //offendingSymbol: offendingSymbol,
      line: e.line,
      column: e.column,
      msg: e.message,
      //err: err
      });
      console.log(e);
    }
    return errors;
  }

  get_tokens(lua) {
    return [];
  }
}