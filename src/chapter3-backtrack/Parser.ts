import { Lexer } from './Lexer'
import { Token } from './Token'

export class Parser {
  input: Lexer
  lookahead: Token[]
  p: number = 0
  markers: number[]
  static readonly FAILED = -1

  alreadyParsedRule(memorization: Map<number, number>): boolean {
    const memo = memorization.get(this.index())
    if (typeof memo !== 'number') return false

    if (memo === Parser.FAILED) throw new Error('Previous Parse Failed')

    this.seek(memo)

    return true
  }

  index(): number {
    return this.p
  }

  memorize(
    memorization: Map<number, number>,
    startTokenIndex: number,
    failed: boolean
  ) {
    const stopTokenIndex = failed ? Parser.FAILED : this.index()

    memorization.set(startTokenIndex, stopTokenIndex)
  }

  constructor(lexer: Lexer) {
    this.input = lexer
    this.lookahead = []
    this.markers = []
  }

  sync(i: number): void {
    if (this.p + i - 1 > this.lookahead.length - 1) {
      this.fill(this.p + i - 1 - (this.lookahead.length - 1))
    }
  }

  fill(n: number): void {
    for (let i = 0; i < n; ++i) {
      this.lookahead.push(this.input.nextToken())
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
    this.sync(i)
    return this.lookahead[this.p + i - 1]
  }

  LA(i: number): number {
    return this.LT(i).type
  }

  consume(): void {
    ++this.p
    if (this.p === this.lookahead.length && !this.isSpeculating()) {
      this.p = 0
      this.lookahead.length = 0
      this.clearMemo()
    }

    this.sync(1)
  }

  clearMemo() {}

  mark(): number {
    this.markers.push(this.p)
    return this.p
  }

  release(): void {
    const marker = this.markers[this.markers.length - 1]
    this.markers.pop()

    this.seek(marker)
  }

  seek(index: number): void {
    this.p = index
  }

  isSpeculating() {
    return this.markers.length
  }
}
