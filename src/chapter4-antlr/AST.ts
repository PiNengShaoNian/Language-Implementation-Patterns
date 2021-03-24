declare class Token {
  type: number
  constructor(tokenType: number)
}

class AST {
  token: Token | null = null
  children: AST[] = []

  constructor(tokenType: number) {
    this.token = new Token(tokenType)
  }

  getTokenType(): number | null {
    return this.token?.type ?? null
  }

  addChild(t: AST): void {
    this.children.push(t)
  }

  isNil() {
    return this.token == null
  }
}
