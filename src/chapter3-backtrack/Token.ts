import { ListLexer } from './ListLexer'

export class Token {
  type: number
  text: string

  constructor(type: number, text: string) {
    this.type = type
    this.text = text
  }

  toString() {
    const tname = ListLexer.tokenNames[this.type]
    return `<${this.text} , ${tname}>`
  }
}
