import { Token } from "./Token"

export abstract class Lexer {
  input: string
  static readonly EOF = '\0'
  static readonly EOF_TYPE = 1
  c: string
  p: number = 0

  constructor(input: string) {
    this.input = input
    this.c = this.input.charAt(this.p)
  }

  abstract nextToken(): Token
}
