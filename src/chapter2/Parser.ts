import { Lexer } from './Lexer'
import { Token } from './Token'

export class Parser {
  input: Lexer
  lookahead: Token[]
  k: number
  p: number = 0

  constructor(lexer: Lexer, k: number) {
    this.input = lexer
    this.lookahead = []
    this.k = k

    for (let i = 0; i < k; ++i) {
      this.consume()
    }
  }

  match(x: number): void {
    if (this.LA(1) === x) this.consume()
    else
      throw new Error(
        'Expecting ' + this.input.getTokenName(x) + '; found ' + this.LT(1)
      )
  }

  LT(i: number): Token {
    return this.lookahead[(i + this.p - 1) % this.k]
  }

  LA(i: number): number {
    return this.LT(i).type
  }

  consume() {
    this.lookahead[this.p] = this.input.nextToken()
    this.p = (this.p + 1) % this.k
  }
}
