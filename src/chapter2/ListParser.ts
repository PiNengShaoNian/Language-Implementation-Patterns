import { Lexer } from './Lexer'
import { ListLexer } from './ListLexer'
import { Parser } from './Parser'

export class ListParser extends Parser {
  constructor(input: Lexer, k: number) {
    super(input, k)
  }

  list(): void {
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
const parser1 = new ListParser(lexer1, 1)

parser1.list()

const input2 = '[a,b,[c]]'
const lexer2 = new ListLexer(input2)
const parser2 = new ListParser(lexer2, 1)

parser2.list()

const input3 = '[a,b,c=d,[c]]'
const lexer3 = new ListLexer(input3)
const parser3 = new ListParser(lexer3, 2)

parser3.list()
