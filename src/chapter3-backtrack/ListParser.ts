import { Lexer } from './Lexer'
import { ListLexer } from './ListLexer'
import { Parser } from './Parser'

export class ListParser extends Parser {
  constructor(input: Lexer) {
    super(input)
  }
  list_memo: Map<number, number> = new Map()

  _list(): void {
    this.match(ListLexer.LBRACK)
    this.elements()
    this.match(ListLexer.RBRACK)
  }

  elements() {
    this.element()
    while (this.LA(1) === ListLexer.COMMA) {
      this.match(ListLexer.COMMA)
      this.element()
    }
  }

  stat() {
    if (this.speculate_alt1()) {
      this.list()
      this.match(Lexer.EOF_TYPE)
    } else if (this.speculate_alt2()) {
      this.assign()
      this.match(Lexer.EOF_TYPE)
    } else throw new Error('Expecting stat found ' + this.LT(1))
  }

  speculate_alt1(): boolean {
    let success = true

    this.mark()
    try {
      this.list()
      this.match(Lexer.EOF_TYPE)
    } catch (e) {
      success = false
    }
    this.release()
    return success
  }

  speculate_alt2(): boolean {
    let success = true

    this.mark()

    try {
      this.assign()
      this.match(Lexer.EOF_TYPE)
    } catch (e) {
      success = false
    }

    this.release()
    return success
  }

  _assign() {
    this.list()
    this.match(ListLexer.EQUALS)
    this.list()
  }

  assign(): void {
    let failed = false

    const startTokenIndex = this.index()

    if (this.isSpeculating() && this.alreadyParsedRule(this.list_memo)) return

    try {
      this._assign()
    } catch (e) {
      failed = true
      throw e
    } finally {
      this.memorize(this.list_memo, startTokenIndex, failed)
    }
  }

  list(): void {
    let failed = false

    const startTokenIndex = this.index()

    if (this.isSpeculating() && this.alreadyParsedRule(this.list_memo)) return

    try {
      this._list()
    } catch (e) {
      failed = true
      throw e
    } finally {
      this.memorize(this.list_memo, startTokenIndex, failed)
    }
  }

  element(): void {
    if (this.LA(1) === ListLexer.NAME && this.LA(2) === ListLexer.EQUALS) {
      this.match(ListLexer.NAME)
      this.match(ListLexer.EQUALS)
      this.match(ListLexer.NAME)
    } else if (this.LA(1) === ListLexer.NAME) {
      this.match(ListLexer.NAME)
    } else if (this.LA(1) === ListLexer.LBRACK) {
      this.list()
    } else throw new Error('Expecting name or list; found ' + this.lookahead)
  }
}

const input1 = '[a,b]'
const lexer1 = new ListLexer(input1)
const parser1 = new ListParser(lexer1)

parser1.list()

const input2 = '[a,b,[c]]'
const lexer2 = new ListLexer(input2)
const parser2 = new ListParser(lexer2)

parser2.list()

const input3 = '[a,b,c=d,[c]]'
const lexer3 = new ListLexer(input3)
const parser3 = new ListParser(lexer3)

parser3.list()

const input4 = '[a,b]=[b,c]'
const lexer4 = new ListLexer(input4)
const parser4 = new ListParser(lexer4)

parser4.stat()
