class HeteroAST {
  token: Token
  constructor(token: Token) {
    this.token = token
  }

  toString() {
    return this.token.toString()
  }
}

abstract class VecMathNode extends HeteroAST {
  constructor(token: Token) {
    super(token)
  }

  print() {
    console.log(this.token.toString())
  }
}

class AssignNode {
  constructor() {}

  print() {
    console.log('id')
    console.log('=')
    console.log('\n')
  }
}
