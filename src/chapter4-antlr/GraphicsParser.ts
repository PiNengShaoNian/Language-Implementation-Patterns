// Generated from .\\Graphics.g by ANTLR 4.9.0-SNAPSHOT

import { ATN } from 'antlr4ts/atn/ATN'
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer'
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException'
import { NotNull } from 'antlr4ts/Decorators'
import { NoViableAltException } from 'antlr4ts/NoViableAltException'
import { Override } from 'antlr4ts/Decorators'
import { Parser } from 'antlr4ts/Parser'
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext'
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator'
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener'
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor'
import { RecognitionException } from 'antlr4ts/RecognitionException'
import { RuleContext } from 'antlr4ts/RuleContext'
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import { Token } from 'antlr4ts/Token'
import { TokenStream } from 'antlr4ts/TokenStream'
import { Vocabulary } from 'antlr4ts/Vocabulary'
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl'

import * as Utils from 'antlr4ts/misc/Utils'

import { GraphicsListener } from './GraphicsListener'

export class GraphicsParser extends Parser {
  public static readonly T__0 = 1
  public static readonly T__1 = 2
  public static readonly T__2 = 3
  public static readonly T__3 = 4
  public static readonly INT = 5
  public static readonly WS = 6
  public static readonly RULE_file = 0
  public static readonly RULE_command = 1
  public static readonly RULE_point = 2
  // tslint:disable:no-trailing-whitespace
  public static readonly ruleNames: string[] = ['file', 'command', 'point']

  private static readonly _LITERAL_NAMES: Array<string | undefined> = [
    undefined,
    "'line'",
    "'from'",
    "'to'",
    "','",
  ]
  private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    'INT',
    'WS',
  ]
  public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(
    GraphicsParser._LITERAL_NAMES,
    GraphicsParser._SYMBOLIC_NAMES,
    []
  )

  // @Override
  // @NotNull
  public get vocabulary(): Vocabulary {
    return GraphicsParser.VOCABULARY
  }
  // tslint:enable:no-trailing-whitespace

  // @Override
  public get grammarFileName(): string {
    return 'Graphics.g'
  }

  // @Override
  public get ruleNames(): string[] {
    return GraphicsParser.ruleNames
  }

  // @Override
  public get serializedATN(): string {
    return GraphicsParser._serializedATN
  }

  protected createFailedPredicateException(
    predicate?: string,
    message?: string
  ): FailedPredicateException {
    return new FailedPredicateException(this, predicate, message)
  }

  constructor(input: TokenStream) {
    super(input)
    this._interp = new ParserATNSimulator(GraphicsParser._ATN, this)
  }
  // @RuleVersion(0)
  public file(): FileContext {
    let _localctx: FileContext = new FileContext(this._ctx, this.state)
    this.enterRule(_localctx, 0, GraphicsParser.RULE_file)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 7
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        do {
          {
            {
              this.state = 6
              this.command()
            }
          }
          this.state = 9
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        } while (_la === GraphicsParser.T__0)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public command(): CommandContext {
    let _localctx: CommandContext = new CommandContext(this._ctx, this.state)
    this.enterRule(_localctx, 2, GraphicsParser.RULE_command)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 11
        this.match(GraphicsParser.T__0)
        this.state = 12
        this.match(GraphicsParser.T__1)
        this.state = 13
        this.point()
        this.state = 14
        this.match(GraphicsParser.T__2)
        this.state = 15
        this.point()
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public point(): PointContext {
    let _localctx: PointContext = new PointContext(this._ctx, this.state)
    this.enterRule(_localctx, 4, GraphicsParser.RULE_point)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 17
        this.match(GraphicsParser.INT)
        this.state = 18
        this.match(GraphicsParser.T__3)
        this.state = 19
        this.match(GraphicsParser.INT)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }

  public static readonly _serializedATN: string =
    '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\b\x18\x04\x02' +
    '\t\x02\x04\x03\t\x03\x04\x04\t\x04\x03\x02\x06\x02\n\n\x02\r\x02\x0E\x02' +
    '\v\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03' +
    '\x04\x03\x04\x03\x04\x02\x02\x02\x05\x02\x02\x04\x02\x06\x02\x02\x02\x02' +
    '\x15\x02\t\x03\x02\x02\x02\x04\r\x03\x02\x02\x02\x06\x13\x03\x02\x02\x02' +
    '\b\n\x05\x04\x03\x02\t\b\x03\x02\x02\x02\n\v\x03\x02\x02\x02\v\t\x03\x02' +
    '\x02\x02\v\f\x03\x02\x02\x02\f\x03\x03\x02\x02\x02\r\x0E\x07\x03\x02\x02' +
    '\x0E\x0F\x07\x04\x02\x02\x0F\x10\x05\x06\x04\x02\x10\x11\x07\x05\x02\x02' +
    '\x11\x12\x05\x06\x04\x02\x12\x05\x03\x02\x02\x02\x13\x14\x07\x07\x02\x02' +
    '\x14\x15\x07\x06\x02\x02\x15\x16\x07\x07\x02\x02\x16\x07\x03\x02\x02\x02' +
    '\x03\v'
  public static __ATN: ATN
  public static get _ATN(): ATN {
    if (!GraphicsParser.__ATN) {
      GraphicsParser.__ATN = new ATNDeserializer().deserialize(
        Utils.toCharArray(GraphicsParser._serializedATN)
      )
    }

    return GraphicsParser.__ATN
  }
}

export class FileContext extends ParserRuleContext {
  public command(): CommandContext[]
  public command(i: number): CommandContext
  public command(i?: number): CommandContext | CommandContext[] {
    if (i === undefined) {
      return this.getRuleContexts(CommandContext)
    } else {
      return this.getRuleContext(i, CommandContext)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return GraphicsParser.RULE_file
  }
  // @Override
  public enterRule(listener: GraphicsListener): void {
    if (listener.enterFile) {
      listener.enterFile(this)
    }
  }
  // @Override
  public exitRule(listener: GraphicsListener): void {
    if (listener.exitFile) {
      listener.exitFile(this)
    }
  }
}

export class CommandContext extends ParserRuleContext {
  public point(): PointContext[]
  public point(i: number): PointContext
  public point(i?: number): PointContext | PointContext[] {
    if (i === undefined) {
      return this.getRuleContexts(PointContext)
    } else {
      return this.getRuleContext(i, PointContext)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return GraphicsParser.RULE_command
  }
  // @Override
  public enterRule(listener: GraphicsListener): void {
    if (listener.enterCommand) {
      listener.enterCommand(this)
    }
  }
  // @Override
  public exitRule(listener: GraphicsListener): void {
    if (listener.exitCommand) {
      listener.exitCommand(this)
    }
  }
}

export class PointContext extends ParserRuleContext {
  public INT(): TerminalNode[]
  public INT(i: number): TerminalNode
  public INT(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(GraphicsParser.INT)
    } else {
      return this.getToken(GraphicsParser.INT, i)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return GraphicsParser.RULE_point
  }
  // @Override
  public enterRule(listener: GraphicsListener): void {
    if (listener.enterPoint) {
      listener.enterPoint(this)
    }
  }
  // @Override
  public exitRule(listener: GraphicsListener): void {
    if (listener.exitPoint) {
      listener.exitPoint(this)
    }
  }
}
