/* eslint-disable */
// Generated from Lua.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import LuaListener from './LuaListener.js';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003E\u01a6\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017",
    "\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b",
    "\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e",
    "\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004",
    "$\t$\u0004%\t%\u0004&\t&\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003",
    "\u0007\u0003Q\n\u0003\f\u0003\u000e\u0003T\u000b\u0003\u0003\u0003\u0005",
    "\u0003W\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0007",
    "\u0004{\n\u0004\f\u0004\u000e\u0004~\u000b\u0004\u0003\u0004\u0003\u0004",
    "\u0005\u0004\u0082\n\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0005\u0004\u008e\n\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004\u00a8\n\u0004\u0005",
    "\u0004\u00aa\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0007\u0005\u00b1\n\u0005\f\u0005\u000e\u0005\u00b4\u000b",
    "\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006\u00b9\n\u0006",
    "\u0003\u0007\u0003\u0007\u0005\u0007\u00bd\n\u0007\u0003\u0007\u0005",
    "\u0007\u00c0\n\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t",
    "\u0003\t\u0007\t\u00c9\n\t\f\t\u000e\t\u00cc\u000b\t\u0003\t\u0003\t",
    "\u0005\t\u00d0\n\t\u0003\n\u0003\n\u0003\n\u0007\n\u00d5\n\n\f\n\u000e",
    "\n\u00d8\u000b\n\u0003\u000b\u0003\u000b\u0003\u000b\u0007\u000b\u00dd",
    "\n\u000b\f\u000b\u000e\u000b\u00e0\u000b\u000b\u0003\f\u0003\f\u0003",
    "\f\u0007\f\u00e5\n\f\f\f\u000e\f\u00e8\u000b\f\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0005\r\u00f7\n\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r",
    "\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0007\r\u0119\n\r\f\r\u000e\r\u011c\u000b\r\u0003\u000e\u0003\u000e",
    "\u0007\u000e\u0120\n\u000e\f\u000e\u000e\u000e\u0123\u000b\u000e\u0003",
    "\u000f\u0003\u000f\u0006\u000f\u0127\n\u000f\r\u000f\u000e\u000f\u0128",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010",
    "\u0130\n\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0005\u0011\u0138\n\u0011\u0003\u0011\u0007\u0011",
    "\u013b\n\u0011\f\u0011\u000e\u0011\u013e\u000b\u0011\u0003\u0012\u0007",
    "\u0012\u0141\n\u0012\f\u0012\u000e\u0012\u0144\u000b\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0005\u0012",
    "\u014c\n\u0012\u0003\u0013\u0003\u0013\u0005\u0013\u0150\n\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0005\u0014\u0156\n\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0005\u0014\u015b\n\u0014\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0005\u0016\u0162",
    "\n\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0017",
    "\u0003\u0017\u0003\u0017\u0005\u0017\u016b\n\u0017\u0003\u0017\u0005",
    "\u0017\u016e\n\u0017\u0003\u0018\u0003\u0018\u0005\u0018\u0172\n\u0018",
    "\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019",
    "\u0007\u0019\u017a\n\u0019\f\u0019\u000e\u0019\u017d\u000b\u0019\u0003",
    "\u0019\u0005\u0019\u0180\n\u0019\u0003\u001a\u0003\u001a\u0003\u001a",
    "\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a",
    "\u0003\u001a\u0005\u001a\u018c\n\u001a\u0003\u001b\u0003\u001b\u0003",
    "\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0003",
    "\u001f\u0003\u001f\u0003 \u0003 \u0003!\u0003!\u0003\"\u0003\"\u0003",
    "#\u0003#\u0003$\u0003$\u0003%\u0003%\u0003&\u0003&\u0003&\u0002\u0003",
    "\u0018\'\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018",
    "\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJ\u0002\n\u0004\u0002\u0003",
    "\u0003\u0011\u0011\u0004\u0002\u0015\u0016\'*\u0003\u0002,-\u0003\u0002",
    ".1\u0003\u000226\u0005\u0002--4478\u0003\u0002>A\u0003\u0002;=\u0002",
    "\u01c1\u0002L\u0003\u0002\u0002\u0002\u0004R\u0003\u0002\u0002\u0002",
    "\u0006\u00a9\u0003\u0002\u0002\u0002\b\u00ab\u0003\u0002\u0002\u0002",
    "\n\u00b8\u0003\u0002\u0002\u0002\f\u00ba\u0003\u0002\u0002\u0002\u000e",
    "\u00c1\u0003\u0002\u0002\u0002\u0010\u00c5\u0003\u0002\u0002\u0002\u0012",
    "\u00d1\u0003\u0002\u0002\u0002\u0014\u00d9\u0003\u0002\u0002\u0002\u0016",
    "\u00e1\u0003\u0002\u0002\u0002\u0018\u00f6\u0003\u0002\u0002\u0002\u001a",
    "\u011d\u0003\u0002\u0002\u0002\u001c\u0124\u0003\u0002\u0002\u0002\u001e",
    "\u012f\u0003\u0002\u0002\u0002 \u0137\u0003\u0002\u0002\u0002\"\u0142",
    "\u0003\u0002\u0002\u0002$\u014f\u0003\u0002\u0002\u0002&\u015a\u0003",
    "\u0002\u0002\u0002(\u015c\u0003\u0002\u0002\u0002*\u015f\u0003\u0002",
    "\u0002\u0002,\u016d\u0003\u0002\u0002\u0002.\u016f\u0003\u0002\u0002",
    "\u00020\u0175\u0003\u0002\u0002\u00022\u018b\u0003\u0002\u0002\u0002",
    "4\u018d\u0003\u0002\u0002\u00026\u018f\u0003\u0002\u0002\u00028\u0191",
    "\u0003\u0002\u0002\u0002:\u0193\u0003\u0002\u0002\u0002<\u0195\u0003",
    "\u0002\u0002\u0002>\u0197\u0003\u0002\u0002\u0002@\u0199\u0003\u0002",
    "\u0002\u0002B\u019b\u0003\u0002\u0002\u0002D\u019d\u0003\u0002\u0002",
    "\u0002F\u019f\u0003\u0002\u0002\u0002H\u01a1\u0003\u0002\u0002\u0002",
    "J\u01a3\u0003\u0002\u0002\u0002LM\u0005\u0004\u0003\u0002MN\u0007\u0002",
    "\u0002\u0003N\u0003\u0003\u0002\u0002\u0002OQ\u0005\u0006\u0004\u0002",
    "PO\u0003\u0002\u0002\u0002QT\u0003\u0002\u0002\u0002RP\u0003\u0002\u0002",
    "\u0002RS\u0003\u0002\u0002\u0002SV\u0003\u0002\u0002\u0002TR\u0003\u0002",
    "\u0002\u0002UW\u0005\f\u0007\u0002VU\u0003\u0002\u0002\u0002VW\u0003",
    "\u0002\u0002\u0002W\u0005\u0003\u0002\u0002\u0002X\u00aa\u0007\u0003",
    "\u0002\u0002YZ\u0005\u0012\n\u0002Z[\u0007\u0004\u0002\u0002[\\\u0005",
    "\u0016\f\u0002\\\u00aa\u0003\u0002\u0002\u0002]\u00aa\u0005\u001c\u000f",
    "\u0002^\u00aa\u0005\u000e\b\u0002_\u00aa\u0007\u0005\u0002\u0002`a\u0007",
    "\u0006\u0002\u0002a\u00aa\u0007:\u0002\u0002bc\u0007\u0007\u0002\u0002",
    "cd\u0005\u0004\u0003\u0002de\u0007\b\u0002\u0002e\u00aa\u0003\u0002",
    "\u0002\u0002fg\u0007\t\u0002\u0002gh\u0005\u0018\r\u0002hi\u0007\u0007",
    "\u0002\u0002ij\u0005\u0004\u0003\u0002jk\u0007\b\u0002\u0002k\u00aa",
    "\u0003\u0002\u0002\u0002lm\u0007\n\u0002\u0002mn\u0005\u0004\u0003\u0002",
    "no\u0007\u000b\u0002\u0002op\u0005\u0018\r\u0002p\u00aa\u0003\u0002",
    "\u0002\u0002qr\u0007\f\u0002\u0002rs\u0005\u0018\r\u0002st\u0007\r\u0002",
    "\u0002t|\u0005\u0004\u0003\u0002uv\u0007\u000e\u0002\u0002vw\u0005\u0018",
    "\r\u0002wx\u0007\r\u0002\u0002xy\u0005\u0004\u0003\u0002y{\u0003\u0002",
    "\u0002\u0002zu\u0003\u0002\u0002\u0002{~\u0003\u0002\u0002\u0002|z\u0003",
    "\u0002\u0002\u0002|}\u0003\u0002\u0002\u0002}\u0081\u0003\u0002\u0002",
    "\u0002~|\u0003\u0002\u0002\u0002\u007f\u0080\u0007\u000f\u0002\u0002",
    "\u0080\u0082\u0005\u0004\u0003\u0002\u0081\u007f\u0003\u0002\u0002\u0002",
    "\u0081\u0082\u0003\u0002\u0002\u0002\u0082\u0083\u0003\u0002\u0002\u0002",
    "\u0083\u0084\u0007\b\u0002\u0002\u0084\u00aa\u0003\u0002\u0002\u0002",
    "\u0085\u0086\u0007\u0010\u0002\u0002\u0086\u0087\u0007:\u0002\u0002",
    "\u0087\u0088\u0007\u0004\u0002\u0002\u0088\u0089\u0005\u0018\r\u0002",
    "\u0089\u008a\u0007\u0011\u0002\u0002\u008a\u008d\u0005\u0018\r\u0002",
    "\u008b\u008c\u0007\u0011\u0002\u0002\u008c\u008e\u0005\u0018\r\u0002",
    "\u008d\u008b\u0003\u0002\u0002\u0002\u008d\u008e\u0003\u0002\u0002\u0002",
    "\u008e\u008f\u0003\u0002\u0002\u0002\u008f\u0090\u0007\u0007\u0002\u0002",
    "\u0090\u0091\u0005\u0004\u0003\u0002\u0091\u0092\u0007\b\u0002\u0002",
    "\u0092\u00aa\u0003\u0002\u0002\u0002\u0093\u0094\u0007\u0010\u0002\u0002",
    "\u0094\u0095\u0005\u0014\u000b\u0002\u0095\u0096\u0007\u0012\u0002\u0002",
    "\u0096\u0097\u0005\u0016\f\u0002\u0097\u0098\u0007\u0007\u0002\u0002",
    "\u0098\u0099\u0005\u0004\u0003\u0002\u0099\u009a\u0007\b\u0002\u0002",
    "\u009a\u00aa\u0003\u0002\u0002\u0002\u009b\u009c\u0007\u0013\u0002\u0002",
    "\u009c\u009d\u0005\u0010\t\u0002\u009d\u009e\u0005*\u0016\u0002\u009e",
    "\u00aa\u0003\u0002\u0002\u0002\u009f\u00a0\u0007\u0014\u0002\u0002\u00a0",
    "\u00a1\u0007\u0013\u0002\u0002\u00a1\u00a2\u0007:\u0002\u0002\u00a2",
    "\u00aa\u0005*\u0016\u0002\u00a3\u00a4\u0007\u0014\u0002\u0002\u00a4",
    "\u00a7\u0005\b\u0005\u0002\u00a5\u00a6\u0007\u0004\u0002\u0002\u00a6",
    "\u00a8\u0005\u0016\f\u0002\u00a7\u00a5\u0003\u0002\u0002\u0002\u00a7",
    "\u00a8\u0003\u0002\u0002\u0002\u00a8\u00aa\u0003\u0002\u0002\u0002\u00a9",
    "X\u0003\u0002\u0002\u0002\u00a9Y\u0003\u0002\u0002\u0002\u00a9]\u0003",
    "\u0002\u0002\u0002\u00a9^\u0003\u0002\u0002\u0002\u00a9_\u0003\u0002",
    "\u0002\u0002\u00a9`\u0003\u0002\u0002\u0002\u00a9b\u0003\u0002\u0002",
    "\u0002\u00a9f\u0003\u0002\u0002\u0002\u00a9l\u0003\u0002\u0002\u0002",
    "\u00a9q\u0003\u0002\u0002\u0002\u00a9\u0085\u0003\u0002\u0002\u0002",
    "\u00a9\u0093\u0003\u0002\u0002\u0002\u00a9\u009b\u0003\u0002\u0002\u0002",
    "\u00a9\u009f\u0003\u0002\u0002\u0002\u00a9\u00a3\u0003\u0002\u0002\u0002",
    "\u00aa\u0007\u0003\u0002\u0002\u0002\u00ab\u00ac\u0007:\u0002\u0002",
    "\u00ac\u00b2\u0005\n\u0006\u0002\u00ad\u00ae\u0007\u0011\u0002\u0002",
    "\u00ae\u00af\u0007:\u0002\u0002\u00af\u00b1\u0005\n\u0006\u0002\u00b0",
    "\u00ad\u0003\u0002\u0002\u0002\u00b1\u00b4\u0003\u0002\u0002\u0002\u00b2",
    "\u00b0\u0003\u0002\u0002\u0002\u00b2\u00b3\u0003\u0002\u0002\u0002\u00b3",
    "\t\u0003\u0002\u0002\u0002\u00b4\u00b2\u0003\u0002\u0002\u0002\u00b5",
    "\u00b6\u0007\u0015\u0002\u0002\u00b6\u00b7\u0007:\u0002\u0002\u00b7",
    "\u00b9\u0007\u0016\u0002\u0002\u00b8\u00b5\u0003\u0002\u0002\u0002\u00b8",
    "\u00b9\u0003\u0002\u0002\u0002\u00b9\u000b\u0003\u0002\u0002\u0002\u00ba",
    "\u00bc\u0007\u0017\u0002\u0002\u00bb\u00bd\u0005\u0016\f\u0002\u00bc",
    "\u00bb\u0003\u0002\u0002\u0002\u00bc\u00bd\u0003\u0002\u0002\u0002\u00bd",
    "\u00bf\u0003\u0002\u0002\u0002\u00be\u00c0\u0007\u0003\u0002\u0002\u00bf",
    "\u00be\u0003\u0002\u0002\u0002\u00bf\u00c0\u0003\u0002\u0002\u0002\u00c0",
    "\r\u0003\u0002\u0002\u0002\u00c1\u00c2\u0007\u0018\u0002\u0002\u00c2",
    "\u00c3\u0007:\u0002\u0002\u00c3\u00c4\u0007\u0018\u0002\u0002\u00c4",
    "\u000f\u0003\u0002\u0002\u0002\u00c5\u00ca\u0007:\u0002\u0002\u00c6",
    "\u00c7\u0007\u0019\u0002\u0002\u00c7\u00c9\u0007:\u0002\u0002\u00c8",
    "\u00c6\u0003\u0002\u0002\u0002\u00c9\u00cc\u0003\u0002\u0002\u0002\u00ca",
    "\u00c8\u0003\u0002\u0002\u0002\u00ca\u00cb\u0003\u0002\u0002\u0002\u00cb",
    "\u00cf\u0003\u0002\u0002\u0002\u00cc\u00ca\u0003\u0002\u0002\u0002\u00cd",
    "\u00ce\u0007\u001a\u0002\u0002\u00ce\u00d0\u0007:\u0002\u0002\u00cf",
    "\u00cd\u0003\u0002\u0002\u0002\u00cf\u00d0\u0003\u0002\u0002\u0002\u00d0",
    "\u0011\u0003\u0002\u0002\u0002\u00d1\u00d6\u0005 \u0011\u0002\u00d2",
    "\u00d3\u0007\u0011\u0002\u0002\u00d3\u00d5\u0005 \u0011\u0002\u00d4",
    "\u00d2\u0003\u0002\u0002\u0002\u00d5\u00d8\u0003\u0002\u0002\u0002\u00d6",
    "\u00d4\u0003\u0002\u0002\u0002\u00d6\u00d7\u0003\u0002\u0002\u0002\u00d7",
    "\u0013\u0003\u0002\u0002\u0002\u00d8\u00d6\u0003\u0002\u0002\u0002\u00d9",
    "\u00de\u0007:\u0002\u0002\u00da\u00db\u0007\u0011\u0002\u0002\u00db",
    "\u00dd\u0007:\u0002\u0002\u00dc\u00da\u0003\u0002\u0002\u0002\u00dd",
    "\u00e0\u0003\u0002\u0002\u0002\u00de\u00dc\u0003\u0002\u0002\u0002\u00de",
    "\u00df\u0003\u0002\u0002\u0002\u00df\u0015\u0003\u0002\u0002\u0002\u00e0",
    "\u00de\u0003\u0002\u0002\u0002\u00e1\u00e6\u0005\u0018\r\u0002\u00e2",
    "\u00e3\u0007\u0011\u0002\u0002\u00e3\u00e5\u0005\u0018\r\u0002\u00e4",
    "\u00e2\u0003\u0002\u0002\u0002\u00e5\u00e8\u0003\u0002\u0002\u0002\u00e6",
    "\u00e4\u0003\u0002\u0002\u0002\u00e6\u00e7\u0003\u0002\u0002\u0002\u00e7",
    "\u0017\u0003\u0002\u0002\u0002\u00e8\u00e6\u0003\u0002\u0002\u0002\u00e9",
    "\u00ea\b\r\u0001\u0002\u00ea\u00f7\u0007\u001b\u0002\u0002\u00eb\u00f7",
    "\u0007\u001c\u0002\u0002\u00ec\u00f7\u0007\u001d\u0002\u0002\u00ed\u00f7",
    "\u0005H%\u0002\u00ee\u00f7\u0005J&\u0002\u00ef\u00f7\u0007\u001e\u0002",
    "\u0002\u00f0\u00f7\u0005(\u0015\u0002\u00f1\u00f7\u0005\u001a\u000e",
    "\u0002\u00f2\u00f7\u0005.\u0018\u0002\u00f3\u00f4\u0005D#\u0002\u00f4",
    "\u00f5\u0005\u0018\r\n\u00f5\u00f7\u0003\u0002\u0002\u0002\u00f6\u00e9",
    "\u0003\u0002\u0002\u0002\u00f6\u00eb\u0003\u0002\u0002\u0002\u00f6\u00ec",
    "\u0003\u0002\u0002\u0002\u00f6\u00ed\u0003\u0002\u0002\u0002\u00f6\u00ee",
    "\u0003\u0002\u0002\u0002\u00f6\u00ef\u0003\u0002\u0002\u0002\u00f6\u00f0",
    "\u0003\u0002\u0002\u0002\u00f6\u00f1\u0003\u0002\u0002\u0002\u00f6\u00f2",
    "\u0003\u0002\u0002\u0002\u00f6\u00f3\u0003\u0002\u0002\u0002\u00f7\u011a",
    "\u0003\u0002\u0002\u0002\u00f8\u00f9\f\u000b\u0002\u0002\u00f9\u00fa",
    "\u0005F$\u0002\u00fa\u00fb\u0005\u0018\r\u000b\u00fb\u0119\u0003\u0002",
    "\u0002\u0002\u00fc\u00fd\f\t\u0002\u0002\u00fd\u00fe\u0005@!\u0002\u00fe",
    "\u00ff\u0005\u0018\r\n\u00ff\u0119\u0003\u0002\u0002\u0002\u0100\u0101",
    "\f\b\u0002\u0002\u0101\u0102\u0005> \u0002\u0102\u0103\u0005\u0018\r",
    "\t\u0103\u0119\u0003\u0002\u0002\u0002\u0104\u0105\f\u0007\u0002\u0002",
    "\u0105\u0106\u0005<\u001f\u0002\u0106\u0107\u0005\u0018\r\u0007\u0107",
    "\u0119\u0003\u0002\u0002\u0002\u0108\u0109\f\u0006\u0002\u0002\u0109",
    "\u010a\u0005:\u001e\u0002\u010a\u010b\u0005\u0018\r\u0007\u010b\u0119",
    "\u0003\u0002\u0002\u0002\u010c\u010d\f\u0005\u0002\u0002\u010d\u010e",
    "\u00058\u001d\u0002\u010e\u010f\u0005\u0018\r\u0006\u010f\u0119\u0003",
    "\u0002\u0002\u0002\u0110\u0111\f\u0004\u0002\u0002\u0111\u0112\u0005",
    "6\u001c\u0002\u0112\u0113\u0005\u0018\r\u0005\u0113\u0119\u0003\u0002",
    "\u0002\u0002\u0114\u0115\f\u0003\u0002\u0002\u0115\u0116\u0005B\"\u0002",
    "\u0116\u0117\u0005\u0018\r\u0004\u0117\u0119\u0003\u0002\u0002\u0002",
    "\u0118\u00f8\u0003\u0002\u0002\u0002\u0118\u00fc\u0003\u0002\u0002\u0002",
    "\u0118\u0100\u0003\u0002\u0002\u0002\u0118\u0104\u0003\u0002\u0002\u0002",
    "\u0118\u0108\u0003\u0002\u0002\u0002\u0118\u010c\u0003\u0002\u0002\u0002",
    "\u0118\u0110\u0003\u0002\u0002\u0002\u0118\u0114\u0003\u0002\u0002\u0002",
    "\u0119\u011c\u0003\u0002\u0002\u0002\u011a\u0118\u0003\u0002\u0002\u0002",
    "\u011a\u011b\u0003\u0002\u0002\u0002\u011b\u0019\u0003\u0002\u0002\u0002",
    "\u011c\u011a\u0003\u0002\u0002\u0002\u011d\u0121\u0005\u001e\u0010\u0002",
    "\u011e\u0120\u0005$\u0013\u0002\u011f\u011e\u0003\u0002\u0002\u0002",
    "\u0120\u0123\u0003\u0002\u0002\u0002\u0121\u011f\u0003\u0002\u0002\u0002",
    "\u0121\u0122\u0003\u0002\u0002\u0002\u0122\u001b\u0003\u0002\u0002\u0002",
    "\u0123\u0121\u0003\u0002\u0002\u0002\u0124\u0126\u0005\u001e\u0010\u0002",
    "\u0125\u0127\u0005$\u0013\u0002\u0126\u0125\u0003\u0002\u0002\u0002",
    "\u0127\u0128\u0003\u0002\u0002\u0002\u0128\u0126\u0003\u0002\u0002\u0002",
    "\u0128\u0129\u0003\u0002\u0002\u0002\u0129\u001d\u0003\u0002\u0002\u0002",
    "\u012a\u0130\u0005 \u0011\u0002\u012b\u012c\u0007\u001f\u0002\u0002",
    "\u012c\u012d\u0005\u0018\r\u0002\u012d\u012e\u0007 \u0002\u0002\u012e",
    "\u0130\u0003\u0002\u0002\u0002\u012f\u012a\u0003\u0002\u0002\u0002\u012f",
    "\u012b\u0003\u0002\u0002\u0002\u0130\u001f\u0003\u0002\u0002\u0002\u0131",
    "\u0138\u0007:\u0002\u0002\u0132\u0133\u0007\u001f\u0002\u0002\u0133",
    "\u0134\u0005\u0018\r\u0002\u0134\u0135\u0007 \u0002\u0002\u0135\u0136",
    "\u0005\"\u0012\u0002\u0136\u0138\u0003\u0002\u0002\u0002\u0137\u0131",
    "\u0003\u0002\u0002\u0002\u0137\u0132\u0003\u0002\u0002\u0002\u0138\u013c",
    "\u0003\u0002\u0002\u0002\u0139\u013b\u0005\"\u0012\u0002\u013a\u0139",
    "\u0003\u0002\u0002\u0002\u013b\u013e\u0003\u0002\u0002\u0002\u013c\u013a",
    "\u0003\u0002\u0002\u0002\u013c\u013d\u0003\u0002\u0002\u0002\u013d!",
    "\u0003\u0002\u0002\u0002\u013e\u013c\u0003\u0002\u0002\u0002\u013f\u0141",
    "\u0005$\u0013\u0002\u0140\u013f\u0003\u0002\u0002\u0002\u0141\u0144",
    "\u0003\u0002\u0002\u0002\u0142\u0140\u0003\u0002\u0002\u0002\u0142\u0143",
    "\u0003\u0002\u0002\u0002\u0143\u014b\u0003\u0002\u0002\u0002\u0144\u0142",
    "\u0003\u0002\u0002\u0002\u0145\u0146\u0007!\u0002\u0002\u0146\u0147",
    "\u0005\u0018\r\u0002\u0147\u0148\u0007\"\u0002\u0002\u0148\u014c\u0003",
    "\u0002\u0002\u0002\u0149\u014a\u0007\u0019\u0002\u0002\u014a\u014c\u0007",
    ":\u0002\u0002\u014b\u0145\u0003\u0002\u0002\u0002\u014b\u0149\u0003",
    "\u0002\u0002\u0002\u014c#\u0003\u0002\u0002\u0002\u014d\u014e\u0007",
    "\u001a\u0002\u0002\u014e\u0150\u0007:\u0002\u0002\u014f\u014d\u0003",
    "\u0002\u0002\u0002\u014f\u0150\u0003\u0002\u0002\u0002\u0150\u0151\u0003",
    "\u0002\u0002\u0002\u0151\u0152\u0005&\u0014\u0002\u0152%\u0003\u0002",
    "\u0002\u0002\u0153\u0155\u0007\u001f\u0002\u0002\u0154\u0156\u0005\u0016",
    "\f\u0002\u0155\u0154\u0003\u0002\u0002\u0002\u0155\u0156\u0003\u0002",
    "\u0002\u0002\u0156\u0157\u0003\u0002\u0002\u0002\u0157\u015b\u0007 ",
    "\u0002\u0002\u0158\u015b\u0005.\u0018\u0002\u0159\u015b\u0005J&\u0002",
    "\u015a\u0153\u0003\u0002\u0002\u0002\u015a\u0158\u0003\u0002\u0002\u0002",
    "\u015a\u0159\u0003\u0002\u0002\u0002\u015b\'\u0003\u0002\u0002\u0002",
    "\u015c\u015d\u0007\u0013\u0002\u0002\u015d\u015e\u0005*\u0016\u0002",
    "\u015e)\u0003\u0002\u0002\u0002\u015f\u0161\u0007\u001f\u0002\u0002",
    "\u0160\u0162\u0005,\u0017\u0002\u0161\u0160\u0003\u0002\u0002\u0002",
    "\u0161\u0162\u0003\u0002\u0002\u0002\u0162\u0163\u0003\u0002\u0002\u0002",
    "\u0163\u0164\u0007 \u0002\u0002\u0164\u0165\u0005\u0004\u0003\u0002",
    "\u0165\u0166\u0007\b\u0002\u0002\u0166+\u0003\u0002\u0002\u0002\u0167",
    "\u016a\u0005\u0014\u000b\u0002\u0168\u0169\u0007\u0011\u0002\u0002\u0169",
    "\u016b\u0007\u001e\u0002\u0002\u016a\u0168\u0003\u0002\u0002\u0002\u016a",
    "\u016b\u0003\u0002\u0002\u0002\u016b\u016e\u0003\u0002\u0002\u0002\u016c",
    "\u016e\u0007\u001e\u0002\u0002\u016d\u0167\u0003\u0002\u0002\u0002\u016d",
    "\u016c\u0003\u0002\u0002\u0002\u016e-\u0003\u0002\u0002\u0002\u016f",
    "\u0171\u0007#\u0002\u0002\u0170\u0172\u00050\u0019\u0002\u0171\u0170",
    "\u0003\u0002\u0002\u0002\u0171\u0172\u0003\u0002\u0002\u0002\u0172\u0173",
    "\u0003\u0002\u0002\u0002\u0173\u0174\u0007$\u0002\u0002\u0174/\u0003",
    "\u0002\u0002\u0002\u0175\u017b\u00052\u001a\u0002\u0176\u0177\u0005",
    "4\u001b\u0002\u0177\u0178\u00052\u001a\u0002\u0178\u017a\u0003\u0002",
    "\u0002\u0002\u0179\u0176\u0003\u0002\u0002\u0002\u017a\u017d\u0003\u0002",
    "\u0002\u0002\u017b\u0179\u0003\u0002\u0002\u0002\u017b\u017c\u0003\u0002",
    "\u0002\u0002\u017c\u017f\u0003\u0002\u0002\u0002\u017d\u017b\u0003\u0002",
    "\u0002\u0002\u017e\u0180\u00054\u001b\u0002\u017f\u017e\u0003\u0002",
    "\u0002\u0002\u017f\u0180\u0003\u0002\u0002\u0002\u01801\u0003\u0002",
    "\u0002\u0002\u0181\u0182\u0007!\u0002\u0002\u0182\u0183\u0005\u0018",
    "\r\u0002\u0183\u0184\u0007\"\u0002\u0002\u0184\u0185\u0007\u0004\u0002",
    "\u0002\u0185\u0186\u0005\u0018\r\u0002\u0186\u018c\u0003\u0002\u0002",
    "\u0002\u0187\u0188\u0007:\u0002\u0002\u0188\u0189\u0007\u0004\u0002",
    "\u0002\u0189\u018c\u0005\u0018\r\u0002\u018a\u018c\u0005\u0018\r\u0002",
    "\u018b\u0181\u0003\u0002\u0002\u0002\u018b\u0187\u0003\u0002\u0002\u0002",
    "\u018b\u018a\u0003\u0002\u0002\u0002\u018c3\u0003\u0002\u0002\u0002",
    "\u018d\u018e\t\u0002\u0002\u0002\u018e5\u0003\u0002\u0002\u0002\u018f",
    "\u0190\u0007%\u0002\u0002\u01907\u0003\u0002\u0002\u0002\u0191\u0192",
    "\u0007&\u0002\u0002\u01929\u0003\u0002\u0002\u0002\u0193\u0194\t\u0003",
    "\u0002\u0002\u0194;\u0003\u0002\u0002\u0002\u0195\u0196\u0007+\u0002",
    "\u0002\u0196=\u0003\u0002\u0002\u0002\u0197\u0198\t\u0004\u0002\u0002",
    "\u0198?\u0003\u0002\u0002\u0002\u0199\u019a\t\u0005\u0002\u0002\u019a",
    "A\u0003\u0002\u0002\u0002\u019b\u019c\t\u0006\u0002\u0002\u019cC\u0003",
    "\u0002\u0002\u0002\u019d\u019e\t\u0007\u0002\u0002\u019eE\u0003\u0002",
    "\u0002\u0002\u019f\u01a0\u00079\u0002\u0002\u01a0G\u0003\u0002\u0002",
    "\u0002\u01a1\u01a2\t\b\u0002\u0002\u01a2I\u0003\u0002\u0002\u0002\u01a3",
    "\u01a4\t\t\u0002\u0002\u01a4K\u0003\u0002\u0002\u0002&RV|\u0081\u008d",
    "\u00a7\u00a9\u00b2\u00b8\u00bc\u00bf\u00ca\u00cf\u00d6\u00de\u00e6\u00f6",
    "\u0118\u011a\u0121\u0128\u012f\u0137\u013c\u0142\u014b\u014f\u0155\u015a",
    "\u0161\u016a\u016d\u0171\u017b\u017f\u018b"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class LuaParser extends antlr4.Parser {

    static grammarFileName = "Lua.g4";
    static literalNames = [ null, "';'", "'='", "'break'", "'goto'", "'do'", 
                            "'end'", "'while'", "'repeat'", "'until'", "'if'", 
                            "'then'", "'elseif'", "'else'", "'for'", "','", 
                            "'in'", "'function'", "'local'", "'<'", "'>'", 
                            "'return'", "'::'", "'.'", "':'", "'nil'", "'false'", 
                            "'true'", "'...'", "'('", "')'", "'['", "']'", 
                            "'{'", "'}'", "'or'", "'and'", "'<='", "'>='", 
                            "'~='", "'=='", "'..'", "'+'", "'-'", "'*'", 
                            "'/'", "'%'", "'//'", "'&'", "'|'", "'~'", "'<<'", 
                            "'>>'", "'not'", "'#'", "'^'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             "NAME", "NORMALSTRING", "CHARSTRING", "LONGSTRING", 
                             "INT", "HEX", "FLOAT", "HEX_FLOAT", "COMMENT", 
                             "LINE_COMMENT", "WS", "SHEBANG" ];
    static ruleNames = [ "chunk", "block", "stat", "attnamelist", "attrib", 
                         "retstat", "label", "funcname", "varlist", "namelist", 
                         "explist", "exp", "prefixexp", "functioncall", 
                         "varOrExp", "var_", "varSuffix", "nameAndArgs", 
                         "args", "functiondef", "funcbody", "parlist", "tableconstructor", 
                         "fieldlist", "field", "fieldsep", "operatorOr", 
                         "operatorAnd", "operatorComparison", "operatorStrcat", 
                         "operatorAddSub", "operatorMulDivMod", "operatorBitwise", 
                         "operatorUnary", "operatorPower", "number", "string" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = LuaParser.ruleNames;
        this.literalNames = LuaParser.literalNames;
        this.symbolicNames = LuaParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 11:
    	    		return this.exp_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    exp_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 9);
    		case 1:
    			return this.precpred(this._ctx, 7);
    		case 2:
    			return this.precpred(this._ctx, 6);
    		case 3:
    			return this.precpred(this._ctx, 5);
    		case 4:
    			return this.precpred(this._ctx, 4);
    		case 5:
    			return this.precpred(this._ctx, 3);
    		case 6:
    			return this.precpred(this._ctx, 2);
    		case 7:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	chunk() {
	    let localctx = new ChunkContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, LuaParser.RULE_chunk);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 74;
	        this.block();
	        this.state = 75;
	        this.match(LuaParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, LuaParser.RULE_block);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 80;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LuaParser.T__0) | (1 << LuaParser.T__2) | (1 << LuaParser.T__3) | (1 << LuaParser.T__4) | (1 << LuaParser.T__6) | (1 << LuaParser.T__7) | (1 << LuaParser.T__9) | (1 << LuaParser.T__13) | (1 << LuaParser.T__16) | (1 << LuaParser.T__17) | (1 << LuaParser.T__21) | (1 << LuaParser.T__28))) !== 0) || _la===LuaParser.NAME) {
	            this.state = 77;
	            this.stat();
	            this.state = 82;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 84;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===LuaParser.T__20) {
	            this.state = 83;
	            this.retstat();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	stat() {
	    let localctx = new StatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, LuaParser.RULE_stat);
	    var _la = 0; // Token type
	    try {
	        this.state = 167;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 86;
	            this.match(LuaParser.T__0);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 87;
	            this.varlist();
	            this.state = 88;
	            this.match(LuaParser.T__1);
	            this.state = 89;
	            this.explist();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 91;
	            this.functioncall();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 92;
	            this.label();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 93;
	            this.match(LuaParser.T__2);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 94;
	            this.match(LuaParser.T__3);
	            this.state = 95;
	            this.match(LuaParser.NAME);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 96;
	            this.match(LuaParser.T__4);
	            this.state = 97;
	            this.block();
	            this.state = 98;
	            this.match(LuaParser.T__5);
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 100;
	            this.match(LuaParser.T__6);
	            this.state = 101;
	            this.exp(0);
	            this.state = 102;
	            this.match(LuaParser.T__4);
	            this.state = 103;
	            this.block();
	            this.state = 104;
	            this.match(LuaParser.T__5);
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 106;
	            this.match(LuaParser.T__7);
	            this.state = 107;
	            this.block();
	            this.state = 108;
	            this.match(LuaParser.T__8);
	            this.state = 109;
	            this.exp(0);
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 111;
	            this.match(LuaParser.T__9);
	            this.state = 112;
	            this.exp(0);
	            this.state = 113;
	            this.match(LuaParser.T__10);
	            this.state = 114;
	            this.block();
	            this.state = 122;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===LuaParser.T__11) {
	                this.state = 115;
	                this.match(LuaParser.T__11);
	                this.state = 116;
	                this.exp(0);
	                this.state = 117;
	                this.match(LuaParser.T__10);
	                this.state = 118;
	                this.block();
	                this.state = 124;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 127;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===LuaParser.T__12) {
	                this.state = 125;
	                this.match(LuaParser.T__12);
	                this.state = 126;
	                this.block();
	            }

	            this.state = 129;
	            this.match(LuaParser.T__5);
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 131;
	            this.match(LuaParser.T__13);
	            this.state = 132;
	            this.match(LuaParser.NAME);
	            this.state = 133;
	            this.match(LuaParser.T__1);
	            this.state = 134;
	            this.exp(0);
	            this.state = 135;
	            this.match(LuaParser.T__14);
	            this.state = 136;
	            this.exp(0);
	            this.state = 139;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===LuaParser.T__14) {
	                this.state = 137;
	                this.match(LuaParser.T__14);
	                this.state = 138;
	                this.exp(0);
	            }

	            this.state = 141;
	            this.match(LuaParser.T__4);
	            this.state = 142;
	            this.block();
	            this.state = 143;
	            this.match(LuaParser.T__5);
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 145;
	            this.match(LuaParser.T__13);
	            this.state = 146;
	            this.namelist();
	            this.state = 147;
	            this.match(LuaParser.T__15);
	            this.state = 148;
	            this.explist();
	            this.state = 149;
	            this.match(LuaParser.T__4);
	            this.state = 150;
	            this.block();
	            this.state = 151;
	            this.match(LuaParser.T__5);
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 153;
	            this.match(LuaParser.T__16);
	            this.state = 154;
	            this.funcname();
	            this.state = 155;
	            this.funcbody();
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 157;
	            this.match(LuaParser.T__17);
	            this.state = 158;
	            this.match(LuaParser.T__16);
	            this.state = 159;
	            this.match(LuaParser.NAME);
	            this.state = 160;
	            this.funcbody();
	            break;

	        case 15:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 161;
	            this.match(LuaParser.T__17);
	            this.state = 162;
	            this.attnamelist();
	            this.state = 165;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===LuaParser.T__1) {
	                this.state = 163;
	                this.match(LuaParser.T__1);
	                this.state = 164;
	                this.explist();
	            }

	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	attnamelist() {
	    let localctx = new AttnamelistContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, LuaParser.RULE_attnamelist);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 169;
	        this.match(LuaParser.NAME);
	        this.state = 170;
	        this.attrib();
	        this.state = 176;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===LuaParser.T__14) {
	            this.state = 171;
	            this.match(LuaParser.T__14);
	            this.state = 172;
	            this.match(LuaParser.NAME);
	            this.state = 173;
	            this.attrib();
	            this.state = 178;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	attrib() {
	    let localctx = new AttribContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, LuaParser.RULE_attrib);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 182;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===LuaParser.T__18) {
	            this.state = 179;
	            this.match(LuaParser.T__18);
	            this.state = 180;
	            this.match(LuaParser.NAME);
	            this.state = 181;
	            this.match(LuaParser.T__19);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	retstat() {
	    let localctx = new RetstatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, LuaParser.RULE_retstat);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 184;
	        this.match(LuaParser.T__20);
	        this.state = 186;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LuaParser.T__16) | (1 << LuaParser.T__24) | (1 << LuaParser.T__25) | (1 << LuaParser.T__26) | (1 << LuaParser.T__27) | (1 << LuaParser.T__28))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (LuaParser.T__32 - 33)) | (1 << (LuaParser.T__42 - 33)) | (1 << (LuaParser.T__49 - 33)) | (1 << (LuaParser.T__52 - 33)) | (1 << (LuaParser.T__53 - 33)) | (1 << (LuaParser.NAME - 33)) | (1 << (LuaParser.NORMALSTRING - 33)) | (1 << (LuaParser.CHARSTRING - 33)) | (1 << (LuaParser.LONGSTRING - 33)) | (1 << (LuaParser.INT - 33)) | (1 << (LuaParser.HEX - 33)) | (1 << (LuaParser.FLOAT - 33)) | (1 << (LuaParser.HEX_FLOAT - 33)))) !== 0)) {
	            this.state = 185;
	            this.explist();
	        }

	        this.state = 189;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===LuaParser.T__0) {
	            this.state = 188;
	            this.match(LuaParser.T__0);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	label() {
	    let localctx = new LabelContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, LuaParser.RULE_label);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 191;
	        this.match(LuaParser.T__21);
	        this.state = 192;
	        this.match(LuaParser.NAME);
	        this.state = 193;
	        this.match(LuaParser.T__21);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funcname() {
	    let localctx = new FuncnameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, LuaParser.RULE_funcname);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 195;
	        this.match(LuaParser.NAME);
	        this.state = 200;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===LuaParser.T__22) {
	            this.state = 196;
	            this.match(LuaParser.T__22);
	            this.state = 197;
	            this.match(LuaParser.NAME);
	            this.state = 202;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 205;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===LuaParser.T__23) {
	            this.state = 203;
	            this.match(LuaParser.T__23);
	            this.state = 204;
	            this.match(LuaParser.NAME);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	varlist() {
	    let localctx = new VarlistContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, LuaParser.RULE_varlist);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 207;
	        this.var_();
	        this.state = 212;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===LuaParser.T__14) {
	            this.state = 208;
	            this.match(LuaParser.T__14);
	            this.state = 209;
	            this.var_();
	            this.state = 214;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	namelist() {
	    let localctx = new NamelistContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, LuaParser.RULE_namelist);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 215;
	        this.match(LuaParser.NAME);
	        this.state = 220;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 216;
	                this.match(LuaParser.T__14);
	                this.state = 217;
	                this.match(LuaParser.NAME); 
	            }
	            this.state = 222;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	explist() {
	    let localctx = new ExplistContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, LuaParser.RULE_explist);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 223;
	        this.exp(0);
	        this.state = 228;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===LuaParser.T__14) {
	            this.state = 224;
	            this.match(LuaParser.T__14);
	            this.state = 225;
	            this.exp(0);
	            this.state = 230;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	exp(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 22;
	    this.enterRecursionRule(localctx, 22, LuaParser.RULE_exp, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 244;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case LuaParser.T__24:
	            this.state = 232;
	            this.match(LuaParser.T__24);
	            break;
	        case LuaParser.T__25:
	            this.state = 233;
	            this.match(LuaParser.T__25);
	            break;
	        case LuaParser.T__26:
	            this.state = 234;
	            this.match(LuaParser.T__26);
	            break;
	        case LuaParser.INT:
	        case LuaParser.HEX:
	        case LuaParser.FLOAT:
	        case LuaParser.HEX_FLOAT:
	            this.state = 235;
	            this.number();
	            break;
	        case LuaParser.NORMALSTRING:
	        case LuaParser.CHARSTRING:
	        case LuaParser.LONGSTRING:
	            this.state = 236;
	            this.string();
	            break;
	        case LuaParser.T__27:
	            this.state = 237;
	            this.match(LuaParser.T__27);
	            break;
	        case LuaParser.T__16:
	            this.state = 238;
	            this.functiondef();
	            break;
	        case LuaParser.T__28:
	        case LuaParser.NAME:
	            this.state = 239;
	            this.prefixexp();
	            break;
	        case LuaParser.T__32:
	            this.state = 240;
	            this.tableconstructor();
	            break;
	        case LuaParser.T__42:
	        case LuaParser.T__49:
	        case LuaParser.T__52:
	        case LuaParser.T__53:
	            this.state = 241;
	            this.operatorUnary();
	            this.state = 242;
	            this.exp(8);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 280;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,18,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 278;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExpContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
	                    this.state = 246;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 247;
	                    this.operatorPower();
	                    this.state = 248;
	                    this.exp(9);
	                    break;

	                case 2:
	                    localctx = new ExpContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
	                    this.state = 250;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 251;
	                    this.operatorMulDivMod();
	                    this.state = 252;
	                    this.exp(8);
	                    break;

	                case 3:
	                    localctx = new ExpContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
	                    this.state = 254;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 255;
	                    this.operatorAddSub();
	                    this.state = 256;
	                    this.exp(7);
	                    break;

	                case 4:
	                    localctx = new ExpContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
	                    this.state = 258;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 259;
	                    this.operatorStrcat();
	                    this.state = 260;
	                    this.exp(5);
	                    break;

	                case 5:
	                    localctx = new ExpContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
	                    this.state = 262;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 263;
	                    this.operatorComparison();
	                    this.state = 264;
	                    this.exp(5);
	                    break;

	                case 6:
	                    localctx = new ExpContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
	                    this.state = 266;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 267;
	                    this.operatorAnd();
	                    this.state = 268;
	                    this.exp(4);
	                    break;

	                case 7:
	                    localctx = new ExpContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
	                    this.state = 270;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 271;
	                    this.operatorOr();
	                    this.state = 272;
	                    this.exp(3);
	                    break;

	                case 8:
	                    localctx = new ExpContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
	                    this.state = 274;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 275;
	                    this.operatorBitwise();
	                    this.state = 276;
	                    this.exp(2);
	                    break;

	                } 
	            }
	            this.state = 282;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,18,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	prefixexp() {
	    let localctx = new PrefixexpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, LuaParser.RULE_prefixexp);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 283;
	        this.varOrExp();
	        this.state = 287;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 284;
	                this.nameAndArgs(); 
	            }
	            this.state = 289;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,19,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functioncall() {
	    let localctx = new FunctioncallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, LuaParser.RULE_functioncall);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 290;
	        this.varOrExp();
	        this.state = 292; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 291;
	        		this.nameAndArgs();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 294; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,20, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	varOrExp() {
	    let localctx = new VarOrExpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, LuaParser.RULE_varOrExp);
	    try {
	        this.state = 301;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 296;
	            this.var_();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 297;
	            this.match(LuaParser.T__28);
	            this.state = 298;
	            this.exp(0);
	            this.state = 299;
	            this.match(LuaParser.T__29);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	var_() {
	    let localctx = new Var_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, LuaParser.RULE_var_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 309;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case LuaParser.NAME:
	            this.state = 303;
	            this.match(LuaParser.NAME);
	            break;
	        case LuaParser.T__28:
	            this.state = 304;
	            this.match(LuaParser.T__28);
	            this.state = 305;
	            this.exp(0);
	            this.state = 306;
	            this.match(LuaParser.T__29);
	            this.state = 307;
	            this.varSuffix();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 314;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,23,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 311;
	                this.varSuffix(); 
	            }
	            this.state = 316;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,23,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	varSuffix() {
	    let localctx = new VarSuffixContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, LuaParser.RULE_varSuffix);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 320;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===LuaParser.T__23 || _la===LuaParser.T__28 || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (LuaParser.T__32 - 33)) | (1 << (LuaParser.NORMALSTRING - 33)) | (1 << (LuaParser.CHARSTRING - 33)) | (1 << (LuaParser.LONGSTRING - 33)))) !== 0)) {
	            this.state = 317;
	            this.nameAndArgs();
	            this.state = 322;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 329;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case LuaParser.T__30:
	            this.state = 323;
	            this.match(LuaParser.T__30);
	            this.state = 324;
	            this.exp(0);
	            this.state = 325;
	            this.match(LuaParser.T__31);
	            break;
	        case LuaParser.T__22:
	            this.state = 327;
	            this.match(LuaParser.T__22);
	            this.state = 328;
	            this.match(LuaParser.NAME);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nameAndArgs() {
	    let localctx = new NameAndArgsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, LuaParser.RULE_nameAndArgs);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 333;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===LuaParser.T__23) {
	            this.state = 331;
	            this.match(LuaParser.T__23);
	            this.state = 332;
	            this.match(LuaParser.NAME);
	        }

	        this.state = 335;
	        this.args();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	args() {
	    let localctx = new ArgsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, LuaParser.RULE_args);
	    var _la = 0; // Token type
	    try {
	        this.state = 344;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case LuaParser.T__28:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 337;
	            this.match(LuaParser.T__28);
	            this.state = 339;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LuaParser.T__16) | (1 << LuaParser.T__24) | (1 << LuaParser.T__25) | (1 << LuaParser.T__26) | (1 << LuaParser.T__27) | (1 << LuaParser.T__28))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (LuaParser.T__32 - 33)) | (1 << (LuaParser.T__42 - 33)) | (1 << (LuaParser.T__49 - 33)) | (1 << (LuaParser.T__52 - 33)) | (1 << (LuaParser.T__53 - 33)) | (1 << (LuaParser.NAME - 33)) | (1 << (LuaParser.NORMALSTRING - 33)) | (1 << (LuaParser.CHARSTRING - 33)) | (1 << (LuaParser.LONGSTRING - 33)) | (1 << (LuaParser.INT - 33)) | (1 << (LuaParser.HEX - 33)) | (1 << (LuaParser.FLOAT - 33)) | (1 << (LuaParser.HEX_FLOAT - 33)))) !== 0)) {
	                this.state = 338;
	                this.explist();
	            }

	            this.state = 341;
	            this.match(LuaParser.T__29);
	            break;
	        case LuaParser.T__32:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 342;
	            this.tableconstructor();
	            break;
	        case LuaParser.NORMALSTRING:
	        case LuaParser.CHARSTRING:
	        case LuaParser.LONGSTRING:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 343;
	            this.string();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functiondef() {
	    let localctx = new FunctiondefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, LuaParser.RULE_functiondef);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 346;
	        this.match(LuaParser.T__16);
	        this.state = 347;
	        this.funcbody();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funcbody() {
	    let localctx = new FuncbodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, LuaParser.RULE_funcbody);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 349;
	        this.match(LuaParser.T__28);
	        this.state = 351;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===LuaParser.T__27 || _la===LuaParser.NAME) {
	            this.state = 350;
	            this.parlist();
	        }

	        this.state = 353;
	        this.match(LuaParser.T__29);
	        this.state = 354;
	        this.block();
	        this.state = 355;
	        this.match(LuaParser.T__5);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parlist() {
	    let localctx = new ParlistContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, LuaParser.RULE_parlist);
	    var _la = 0; // Token type
	    try {
	        this.state = 363;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case LuaParser.NAME:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 357;
	            this.namelist();
	            this.state = 360;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===LuaParser.T__14) {
	                this.state = 358;
	                this.match(LuaParser.T__14);
	                this.state = 359;
	                this.match(LuaParser.T__27);
	            }

	            break;
	        case LuaParser.T__27:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 362;
	            this.match(LuaParser.T__27);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	tableconstructor() {
	    let localctx = new TableconstructorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, LuaParser.RULE_tableconstructor);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 365;
	        this.match(LuaParser.T__32);
	        this.state = 367;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LuaParser.T__16) | (1 << LuaParser.T__24) | (1 << LuaParser.T__25) | (1 << LuaParser.T__26) | (1 << LuaParser.T__27) | (1 << LuaParser.T__28) | (1 << LuaParser.T__30))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (LuaParser.T__32 - 33)) | (1 << (LuaParser.T__42 - 33)) | (1 << (LuaParser.T__49 - 33)) | (1 << (LuaParser.T__52 - 33)) | (1 << (LuaParser.T__53 - 33)) | (1 << (LuaParser.NAME - 33)) | (1 << (LuaParser.NORMALSTRING - 33)) | (1 << (LuaParser.CHARSTRING - 33)) | (1 << (LuaParser.LONGSTRING - 33)) | (1 << (LuaParser.INT - 33)) | (1 << (LuaParser.HEX - 33)) | (1 << (LuaParser.FLOAT - 33)) | (1 << (LuaParser.HEX_FLOAT - 33)))) !== 0)) {
	            this.state = 366;
	            this.fieldlist();
	        }

	        this.state = 369;
	        this.match(LuaParser.T__33);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fieldlist() {
	    let localctx = new FieldlistContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, LuaParser.RULE_fieldlist);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 371;
	        this.field();
	        this.state = 377;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,33,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 372;
	                this.fieldsep();
	                this.state = 373;
	                this.field(); 
	            }
	            this.state = 379;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,33,this._ctx);
	        }

	        this.state = 381;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===LuaParser.T__0 || _la===LuaParser.T__14) {
	            this.state = 380;
	            this.fieldsep();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	field() {
	    let localctx = new FieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, LuaParser.RULE_field);
	    try {
	        this.state = 393;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,35,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 383;
	            this.match(LuaParser.T__30);
	            this.state = 384;
	            this.exp(0);
	            this.state = 385;
	            this.match(LuaParser.T__31);
	            this.state = 386;
	            this.match(LuaParser.T__1);
	            this.state = 387;
	            this.exp(0);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 389;
	            this.match(LuaParser.NAME);
	            this.state = 390;
	            this.match(LuaParser.T__1);
	            this.state = 391;
	            this.exp(0);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 392;
	            this.exp(0);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fieldsep() {
	    let localctx = new FieldsepContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, LuaParser.RULE_fieldsep);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 395;
	        _la = this._input.LA(1);
	        if(!(_la===LuaParser.T__0 || _la===LuaParser.T__14)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operatorOr() {
	    let localctx = new OperatorOrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, LuaParser.RULE_operatorOr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 397;
	        this.match(LuaParser.T__34);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operatorAnd() {
	    let localctx = new OperatorAndContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, LuaParser.RULE_operatorAnd);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 399;
	        this.match(LuaParser.T__35);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operatorComparison() {
	    let localctx = new OperatorComparisonContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, LuaParser.RULE_operatorComparison);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 401;
	        _la = this._input.LA(1);
	        if(!(((((_la - 19)) & ~0x1f) == 0 && ((1 << (_la - 19)) & ((1 << (LuaParser.T__18 - 19)) | (1 << (LuaParser.T__19 - 19)) | (1 << (LuaParser.T__36 - 19)) | (1 << (LuaParser.T__37 - 19)) | (1 << (LuaParser.T__38 - 19)) | (1 << (LuaParser.T__39 - 19)))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operatorStrcat() {
	    let localctx = new OperatorStrcatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, LuaParser.RULE_operatorStrcat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 403;
	        this.match(LuaParser.T__40);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operatorAddSub() {
	    let localctx = new OperatorAddSubContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, LuaParser.RULE_operatorAddSub);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 405;
	        _la = this._input.LA(1);
	        if(!(_la===LuaParser.T__41 || _la===LuaParser.T__42)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operatorMulDivMod() {
	    let localctx = new OperatorMulDivModContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, LuaParser.RULE_operatorMulDivMod);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 407;
	        _la = this._input.LA(1);
	        if(!(((((_la - 44)) & ~0x1f) == 0 && ((1 << (_la - 44)) & ((1 << (LuaParser.T__43 - 44)) | (1 << (LuaParser.T__44 - 44)) | (1 << (LuaParser.T__45 - 44)) | (1 << (LuaParser.T__46 - 44)))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operatorBitwise() {
	    let localctx = new OperatorBitwiseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, LuaParser.RULE_operatorBitwise);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 409;
	        _la = this._input.LA(1);
	        if(!(((((_la - 48)) & ~0x1f) == 0 && ((1 << (_la - 48)) & ((1 << (LuaParser.T__47 - 48)) | (1 << (LuaParser.T__48 - 48)) | (1 << (LuaParser.T__49 - 48)) | (1 << (LuaParser.T__50 - 48)) | (1 << (LuaParser.T__51 - 48)))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operatorUnary() {
	    let localctx = new OperatorUnaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, LuaParser.RULE_operatorUnary);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 411;
	        _la = this._input.LA(1);
	        if(!(((((_la - 43)) & ~0x1f) == 0 && ((1 << (_la - 43)) & ((1 << (LuaParser.T__42 - 43)) | (1 << (LuaParser.T__49 - 43)) | (1 << (LuaParser.T__52 - 43)) | (1 << (LuaParser.T__53 - 43)))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operatorPower() {
	    let localctx = new OperatorPowerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, LuaParser.RULE_operatorPower);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 413;
	        this.match(LuaParser.T__54);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	number() {
	    let localctx = new NumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, LuaParser.RULE_number);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 415;
	        _la = this._input.LA(1);
	        if(!(((((_la - 60)) & ~0x1f) == 0 && ((1 << (_la - 60)) & ((1 << (LuaParser.INT - 60)) | (1 << (LuaParser.HEX - 60)) | (1 << (LuaParser.FLOAT - 60)) | (1 << (LuaParser.HEX_FLOAT - 60)))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	string() {
	    let localctx = new StringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, LuaParser.RULE_string);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 417;
	        _la = this._input.LA(1);
	        if(!(((((_la - 57)) & ~0x1f) == 0 && ((1 << (_la - 57)) & ((1 << (LuaParser.NORMALSTRING - 57)) | (1 << (LuaParser.CHARSTRING - 57)) | (1 << (LuaParser.LONGSTRING - 57)))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

LuaParser.EOF = antlr4.Token.EOF;
LuaParser.T__0 = 1;
LuaParser.T__1 = 2;
LuaParser.T__2 = 3;
LuaParser.T__3 = 4;
LuaParser.T__4 = 5;
LuaParser.T__5 = 6;
LuaParser.T__6 = 7;
LuaParser.T__7 = 8;
LuaParser.T__8 = 9;
LuaParser.T__9 = 10;
LuaParser.T__10 = 11;
LuaParser.T__11 = 12;
LuaParser.T__12 = 13;
LuaParser.T__13 = 14;
LuaParser.T__14 = 15;
LuaParser.T__15 = 16;
LuaParser.T__16 = 17;
LuaParser.T__17 = 18;
LuaParser.T__18 = 19;
LuaParser.T__19 = 20;
LuaParser.T__20 = 21;
LuaParser.T__21 = 22;
LuaParser.T__22 = 23;
LuaParser.T__23 = 24;
LuaParser.T__24 = 25;
LuaParser.T__25 = 26;
LuaParser.T__26 = 27;
LuaParser.T__27 = 28;
LuaParser.T__28 = 29;
LuaParser.T__29 = 30;
LuaParser.T__30 = 31;
LuaParser.T__31 = 32;
LuaParser.T__32 = 33;
LuaParser.T__33 = 34;
LuaParser.T__34 = 35;
LuaParser.T__35 = 36;
LuaParser.T__36 = 37;
LuaParser.T__37 = 38;
LuaParser.T__38 = 39;
LuaParser.T__39 = 40;
LuaParser.T__40 = 41;
LuaParser.T__41 = 42;
LuaParser.T__42 = 43;
LuaParser.T__43 = 44;
LuaParser.T__44 = 45;
LuaParser.T__45 = 46;
LuaParser.T__46 = 47;
LuaParser.T__47 = 48;
LuaParser.T__48 = 49;
LuaParser.T__49 = 50;
LuaParser.T__50 = 51;
LuaParser.T__51 = 52;
LuaParser.T__52 = 53;
LuaParser.T__53 = 54;
LuaParser.T__54 = 55;
LuaParser.NAME = 56;
LuaParser.NORMALSTRING = 57;
LuaParser.CHARSTRING = 58;
LuaParser.LONGSTRING = 59;
LuaParser.INT = 60;
LuaParser.HEX = 61;
LuaParser.FLOAT = 62;
LuaParser.HEX_FLOAT = 63;
LuaParser.COMMENT = 64;
LuaParser.LINE_COMMENT = 65;
LuaParser.WS = 66;
LuaParser.SHEBANG = 67;

LuaParser.RULE_chunk = 0;
LuaParser.RULE_block = 1;
LuaParser.RULE_stat = 2;
LuaParser.RULE_attnamelist = 3;
LuaParser.RULE_attrib = 4;
LuaParser.RULE_retstat = 5;
LuaParser.RULE_label = 6;
LuaParser.RULE_funcname = 7;
LuaParser.RULE_varlist = 8;
LuaParser.RULE_namelist = 9;
LuaParser.RULE_explist = 10;
LuaParser.RULE_exp = 11;
LuaParser.RULE_prefixexp = 12;
LuaParser.RULE_functioncall = 13;
LuaParser.RULE_varOrExp = 14;
LuaParser.RULE_var_ = 15;
LuaParser.RULE_varSuffix = 16;
LuaParser.RULE_nameAndArgs = 17;
LuaParser.RULE_args = 18;
LuaParser.RULE_functiondef = 19;
LuaParser.RULE_funcbody = 20;
LuaParser.RULE_parlist = 21;
LuaParser.RULE_tableconstructor = 22;
LuaParser.RULE_fieldlist = 23;
LuaParser.RULE_field = 24;
LuaParser.RULE_fieldsep = 25;
LuaParser.RULE_operatorOr = 26;
LuaParser.RULE_operatorAnd = 27;
LuaParser.RULE_operatorComparison = 28;
LuaParser.RULE_operatorStrcat = 29;
LuaParser.RULE_operatorAddSub = 30;
LuaParser.RULE_operatorMulDivMod = 31;
LuaParser.RULE_operatorBitwise = 32;
LuaParser.RULE_operatorUnary = 33;
LuaParser.RULE_operatorPower = 34;
LuaParser.RULE_number = 35;
LuaParser.RULE_string = 36;

class ChunkContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_chunk;
    }

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	EOF() {
	    return this.getToken(LuaParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterChunk(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.exitChunk(this);
		}
	}


}



class BlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_block;
    }

	stat = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatContext);
	    } else {
	        return this.getTypedRuleContext(StatContext,i);
	    }
	};

	retstat() {
	    return this.getTypedRuleContext(RetstatContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.exitBlock(this);
		}
	}


}



class StatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_stat;
    }

	varlist() {
	    return this.getTypedRuleContext(VarlistContext,0);
	};

	explist() {
	    return this.getTypedRuleContext(ExplistContext,0);
	};

	functioncall() {
	    return this.getTypedRuleContext(FunctioncallContext,0);
	};

	label() {
	    return this.getTypedRuleContext(LabelContext,0);
	};

	NAME() {
	    return this.getToken(LuaParser.NAME, 0);
	};

	block = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BlockContext);
	    } else {
	        return this.getTypedRuleContext(BlockContext,i);
	    }
	};

	exp = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpContext);
	    } else {
	        return this.getTypedRuleContext(ExpContext,i);
	    }
	};

	namelist() {
	    return this.getTypedRuleContext(NamelistContext,0);
	};

	funcname() {
	    return this.getTypedRuleContext(FuncnameContext,0);
	};

	funcbody() {
	    return this.getTypedRuleContext(FuncbodyContext,0);
	};

	attnamelist() {
	    return this.getTypedRuleContext(AttnamelistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterStat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.exitStat(this);
		}
	}


}



class AttnamelistContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_attnamelist;
    }

	NAME = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LuaParser.NAME);
	    } else {
	        return this.getToken(LuaParser.NAME, i);
	    }
	};


	attrib = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AttribContext);
	    } else {
	        return this.getTypedRuleContext(AttribContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterAttnamelist(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.exitAttnamelist(this);
		}
	}


}



class AttribContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_attrib;
    }

	NAME() {
	    return this.getToken(LuaParser.NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterAttrib(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.exitAttrib(this);
		}
	}


}



class RetstatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_retstat;
    }

	explist() {
	    return this.getTypedRuleContext(ExplistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterRetstat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.exitRetstat(this);
		}
	}


}



class LabelContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_label;
    }

	NAME() {
	    return this.getToken(LuaParser.NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterLabel(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.exitLabel(this);
		}
	}


}



class FuncnameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_funcname;
    }

	NAME = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LuaParser.NAME);
	    } else {
	        return this.getToken(LuaParser.NAME, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterFuncname(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.exitFuncname(this);
		}
	}


}



class VarlistContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_varlist;
    }

	var_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Var_Context);
	    } else {
	        return this.getTypedRuleContext(Var_Context,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterVarlist(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.exitVarlist(this);
		}
	}


}



class NamelistContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_namelist;
    }

	NAME = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LuaParser.NAME);
	    } else {
	        return this.getToken(LuaParser.NAME, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterNamelist(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.exitNamelist(this);
		}
	}


}



class ExplistContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_explist;
    }

	exp = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpContext);
	    } else {
	        return this.getTypedRuleContext(ExpContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterExplist(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.exitExplist(this);
		}
	}


}



class ExpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_exp;
    }

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	functiondef() {
	    return this.getTypedRuleContext(FunctiondefContext,0);
	};

	prefixexp() {
	    return this.getTypedRuleContext(PrefixexpContext,0);
	};

	tableconstructor() {
	    return this.getTypedRuleContext(TableconstructorContext,0);
	};

	operatorUnary() {
	    return this.getTypedRuleContext(OperatorUnaryContext,0);
	};

	exp = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpContext);
	    } else {
	        return this.getTypedRuleContext(ExpContext,i);
	    }
	};

	operatorPower() {
	    return this.getTypedRuleContext(OperatorPowerContext,0);
	};

	operatorMulDivMod() {
	    return this.getTypedRuleContext(OperatorMulDivModContext,0);
	};

	operatorAddSub() {
	    return this.getTypedRuleContext(OperatorAddSubContext,0);
	};

	operatorStrcat() {
	    return this.getTypedRuleContext(OperatorStrcatContext,0);
	};

	operatorComparison() {
	    return this.getTypedRuleContext(OperatorComparisonContext,0);
	};

	operatorAnd() {
	    return this.getTypedRuleContext(OperatorAndContext,0);
	};

	operatorOr() {
	    return this.getTypedRuleContext(OperatorOrContext,0);
	};

	operatorBitwise() {
	    return this.getTypedRuleContext(OperatorBitwiseContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.exitExp(this);
		}
	}


}



class PrefixexpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_prefixexp;
    }

	varOrExp() {
	    return this.getTypedRuleContext(VarOrExpContext,0);
	};

	nameAndArgs = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NameAndArgsContext);
	    } else {
	        return this.getTypedRuleContext(NameAndArgsContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterPrefixexp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.exitPrefixexp(this);
		}
	}


}



class FunctioncallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_functioncall;
    }

	varOrExp() {
	    return this.getTypedRuleContext(VarOrExpContext,0);
	};

	nameAndArgs = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NameAndArgsContext);
	    } else {
	        return this.getTypedRuleContext(NameAndArgsContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterFunctioncall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.exitFunctioncall(this);
		}
	}


}



class VarOrExpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_varOrExp;
    }

	var_() {
	    return this.getTypedRuleContext(Var_Context,0);
	};

	exp() {
	    return this.getTypedRuleContext(ExpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterVarOrExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.exitVarOrExp(this);
		}
	}


}



class Var_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_var_;
    }

	NAME() {
	    return this.getToken(LuaParser.NAME, 0);
	};

	exp() {
	    return this.getTypedRuleContext(ExpContext,0);
	};

	varSuffix = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VarSuffixContext);
	    } else {
	        return this.getTypedRuleContext(VarSuffixContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterVar_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.exitVar_(this);
		}
	}


}



class VarSuffixContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_varSuffix;
    }

	exp() {
	    return this.getTypedRuleContext(ExpContext,0);
	};

	NAME() {
	    return this.getToken(LuaParser.NAME, 0);
	};

	nameAndArgs = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NameAndArgsContext);
	    } else {
	        return this.getTypedRuleContext(NameAndArgsContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterVarSuffix(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.exitVarSuffix(this);
		}
	}


}



class NameAndArgsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_nameAndArgs;
    }

	args() {
	    return this.getTypedRuleContext(ArgsContext,0);
	};

	NAME() {
	    return this.getToken(LuaParser.NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterNameAndArgs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.exitNameAndArgs(this);
		}
	}


}



class ArgsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_args;
    }

	explist() {
	    return this.getTypedRuleContext(ExplistContext,0);
	};

	tableconstructor() {
	    return this.getTypedRuleContext(TableconstructorContext,0);
	};

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterArgs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.exitArgs(this);
		}
	}


}



class FunctiondefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_functiondef;
    }

	funcbody() {
	    return this.getTypedRuleContext(FuncbodyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterFunctiondef(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.exitFunctiondef(this);
		}
	}


}



class FuncbodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_funcbody;
    }

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	parlist() {
	    return this.getTypedRuleContext(ParlistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterFuncbody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.exitFuncbody(this);
		}
	}


}



class ParlistContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_parlist;
    }

	namelist() {
	    return this.getTypedRuleContext(NamelistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterParlist(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.exitParlist(this);
		}
	}


}



class TableconstructorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_tableconstructor;
    }

	fieldlist() {
	    return this.getTypedRuleContext(FieldlistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterTableconstructor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.exitTableconstructor(this);
		}
	}


}



class FieldlistContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_fieldlist;
    }

	field = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FieldContext);
	    } else {
	        return this.getTypedRuleContext(FieldContext,i);
	    }
	};

	fieldsep = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FieldsepContext);
	    } else {
	        return this.getTypedRuleContext(FieldsepContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterFieldlist(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.exitFieldlist(this);
		}
	}


}



class FieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_field;
    }

	exp = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpContext);
	    } else {
	        return this.getTypedRuleContext(ExpContext,i);
	    }
	};

	NAME() {
	    return this.getToken(LuaParser.NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterField(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.exitField(this);
		}
	}


}



class FieldsepContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_fieldsep;
    }


	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterFieldsep(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.exitFieldsep(this);
		}
	}


}



class OperatorOrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_operatorOr;
    }


	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterOperatorOr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.exitOperatorOr(this);
		}
	}


}



class OperatorAndContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_operatorAnd;
    }


	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterOperatorAnd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.exitOperatorAnd(this);
		}
	}


}



class OperatorComparisonContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_operatorComparison;
    }


	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterOperatorComparison(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.exitOperatorComparison(this);
		}
	}


}



class OperatorStrcatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_operatorStrcat;
    }


	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterOperatorStrcat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.exitOperatorStrcat(this);
		}
	}


}



class OperatorAddSubContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_operatorAddSub;
    }


	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterOperatorAddSub(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.exitOperatorAddSub(this);
		}
	}


}



class OperatorMulDivModContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_operatorMulDivMod;
    }


	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterOperatorMulDivMod(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.exitOperatorMulDivMod(this);
		}
	}


}



class OperatorBitwiseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_operatorBitwise;
    }


	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterOperatorBitwise(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.exitOperatorBitwise(this);
		}
	}


}



class OperatorUnaryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_operatorUnary;
    }


	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterOperatorUnary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.exitOperatorUnary(this);
		}
	}


}



class OperatorPowerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_operatorPower;
    }


	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterOperatorPower(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.exitOperatorPower(this);
		}
	}


}



class NumberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_number;
    }

	INT() {
	    return this.getToken(LuaParser.INT, 0);
	};

	HEX() {
	    return this.getToken(LuaParser.HEX, 0);
	};

	FLOAT() {
	    return this.getToken(LuaParser.FLOAT, 0);
	};

	HEX_FLOAT() {
	    return this.getToken(LuaParser.HEX_FLOAT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.exitNumber(this);
		}
	}


}



class StringContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_string;
    }

	NORMALSTRING() {
	    return this.getToken(LuaParser.NORMALSTRING, 0);
	};

	CHARSTRING() {
	    return this.getToken(LuaParser.CHARSTRING, 0);
	};

	LONGSTRING() {
	    return this.getToken(LuaParser.LONGSTRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.exitString(this);
		}
	}


}




LuaParser.ChunkContext = ChunkContext; 
LuaParser.BlockContext = BlockContext; 
LuaParser.StatContext = StatContext; 
LuaParser.AttnamelistContext = AttnamelistContext; 
LuaParser.AttribContext = AttribContext; 
LuaParser.RetstatContext = RetstatContext; 
LuaParser.LabelContext = LabelContext; 
LuaParser.FuncnameContext = FuncnameContext; 
LuaParser.VarlistContext = VarlistContext; 
LuaParser.NamelistContext = NamelistContext; 
LuaParser.ExplistContext = ExplistContext; 
LuaParser.ExpContext = ExpContext; 
LuaParser.PrefixexpContext = PrefixexpContext; 
LuaParser.FunctioncallContext = FunctioncallContext; 
LuaParser.VarOrExpContext = VarOrExpContext; 
LuaParser.Var_Context = Var_Context; 
LuaParser.VarSuffixContext = VarSuffixContext; 
LuaParser.NameAndArgsContext = NameAndArgsContext; 
LuaParser.ArgsContext = ArgsContext; 
LuaParser.FunctiondefContext = FunctiondefContext; 
LuaParser.FuncbodyContext = FuncbodyContext; 
LuaParser.ParlistContext = ParlistContext; 
LuaParser.TableconstructorContext = TableconstructorContext; 
LuaParser.FieldlistContext = FieldlistContext; 
LuaParser.FieldContext = FieldContext; 
LuaParser.FieldsepContext = FieldsepContext; 
LuaParser.OperatorOrContext = OperatorOrContext; 
LuaParser.OperatorAndContext = OperatorAndContext; 
LuaParser.OperatorComparisonContext = OperatorComparisonContext; 
LuaParser.OperatorStrcatContext = OperatorStrcatContext; 
LuaParser.OperatorAddSubContext = OperatorAddSubContext; 
LuaParser.OperatorMulDivModContext = OperatorMulDivModContext; 
LuaParser.OperatorBitwiseContext = OperatorBitwiseContext; 
LuaParser.OperatorUnaryContext = OperatorUnaryContext; 
LuaParser.OperatorPowerContext = OperatorPowerContext; 
LuaParser.NumberContext = NumberContext; 
LuaParser.StringContext = StringContext; 
