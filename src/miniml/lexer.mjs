import { or, regexp, string, eof } from "./parser_combinator";

// skip spaces
const SPACE = regexp(/[ \t\r\n]/);

const INT = regexp(/0-9+/);
const TINT = string("int");
const TBOOL = string("bool");
const TRUE = string("true");
const FALSE = string("false");
const FUN = string("fun");
const IS = string("is");
const IF = string("if");
const THEN = string("then");
const ELSE = string("else");
const LET = string("let");
const SEMISEMI = string(";;");
const EQUAL = string("=");
const LESS = string("<");
const TARROW = string("->");
const COLON = string(":");
const LPAREN = string("(");
const RPAREN = string(")");
const PLUS = string("+");
const MINUS = string("-");
const TIMES = string("*");
const VAR = regexp(/[a-zA-Z]+/);
const EOF = eof();
