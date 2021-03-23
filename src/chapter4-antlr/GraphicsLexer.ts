// Generated from .\\Graphics.g by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class GraphicsLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly INT = 5;
	public static readonly WS = 6;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "INT", "WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'line'", "'from'", "'to'", "','",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, "INT", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(GraphicsLexer._LITERAL_NAMES, GraphicsLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return GraphicsLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(GraphicsLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "Graphics.g"; }

	// @Override
	public get ruleNames(): string[] { return GraphicsLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return GraphicsLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return GraphicsLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return GraphicsLexer.modeNames; }

	// @Override
	public action(_localctx: RuleContext, ruleIndex: number, actionIndex: number): void {
		switch (ruleIndex) {
		case 5:
			this.WS_action(_localctx, actionIndex);
			break;
		}
	}
	private WS_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 0:
			this.skip()
			break;
		}
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\b&\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x06" +
		"\x06 \n\x06\r\x06\x0E\x06!\x03\x07\x03\x07\x03\x07\x02\x02\x02\b\x03\x02" +
		"\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x03\x02\x03\x05" +
		"\x02\v\f\x0F\x0F\"\"\x02&\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02" +
		"\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02" +
		"\x02\r\x03\x02\x02\x02\x03\x0F\x03\x02\x02\x02\x05\x14\x03\x02\x02\x02" +
		"\x07\x19\x03\x02\x02\x02\t\x1C\x03\x02\x02\x02\v\x1F\x03\x02\x02\x02\r" +
		"#\x03\x02\x02\x02\x0F\x10\x07n\x02\x02\x10\x11\x07k\x02\x02\x11\x12\x07" +
		"p\x02\x02\x12\x13\x07g\x02\x02\x13\x04\x03\x02\x02\x02\x14\x15\x07h\x02" +
		"\x02\x15\x16\x07t\x02\x02\x16\x17\x07q\x02\x02\x17\x18\x07o\x02\x02\x18" +
		"\x06\x03\x02\x02\x02\x19\x1A\x07v\x02\x02\x1A\x1B\x07q\x02\x02\x1B\b\x03" +
		"\x02\x02\x02\x1C\x1D\x07.\x02\x02\x1D\n\x03\x02\x02\x02\x1E \x042;\x02" +
		"\x1F\x1E\x03\x02\x02\x02 !\x03\x02\x02\x02!\x1F\x03\x02\x02\x02!\"\x03" +
		"\x02\x02\x02\"\f\x03\x02\x02\x02#$\t\x02\x02\x02$%\b\x07\x02\x02%\x0E" +
		"\x03\x02\x02\x02\x04\x02!\x03\x03\x07\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!GraphicsLexer.__ATN) {
			GraphicsLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(GraphicsLexer._serializedATN));
		}

		return GraphicsLexer.__ATN;
	}

}

