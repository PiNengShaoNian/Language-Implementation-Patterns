import { Lexer } from './Lexer'
import { Token } from './Token'

export class ListLexer extends Lexer {
  static readonly NAME = 2
  static readonly COMMA = 3
  static readonly LBRACK = 4
  static readonly RBRACK = 5
  static readonly tokenNames = [
    'n/a',
    '<EOF>',
    'NAME',
    'COMMA',
    'LBRACK',
    'RBRACK',
  ]

  WS() {
    let c = this.c
    while (c === '' || c === '\t' || c === '\n' || c === 'r') {
      this.consume()
      c = this.c
    }
  }

  consume(): void {
    ++this.p
    if (this.p >= this.input.length) {
      this.c = '\0'
    } else {
      this.c = this.input[this.p]
    }
  }

  match(x: string): void {
    if (this.c === x) this.consume()

    throw new Error('Expecting ' + x + '; found ' + this.c)
  }

  isLetter(): boolean {
    const a = this.c <= 'z' && this.c >= 'a'
    const b = this.c <= 'Z' && this.c >= 'A'

    return a || b
  }

  NAME(): Token {
    let name = ''

    do {
      name += this.c
      this.consume()
    } while (this.isLetter())

    return new Token(ListLexer.NAME, name)
  }

  nextToken(): Token {
    const { COMMA, LBRACK, RBRACK } = ListLexer
    while (this.c !== Lexer.EOF) {
      switch (this.c) {
        case ' ':
        case '\t':
        case '\n':
        case '\r':
          this.WS()
          break
        case ',':
          this.consume()
          return new Token(COMMA, ',')
        case '[':
          this.consume()
          return new Token(LBRACK, '[')
        case ']':
          this.consume()
          return new Token(RBRACK, ']')
        default:
          if (this.isLetter()) {
            return this.NAME()
          }

          throw new Error('Invalid character')
      }
    }

    return new Token(Lexer.EOF_TYPE, '<EOF>')
  }

  getTokenName(x: number): string {
    return ListLexer.tokenNames[x]
  }

  constructor(input: string) {
    super(input)
  }
}
