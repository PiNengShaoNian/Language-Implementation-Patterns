interface Type {}

class MySymbol {
  private name: string
  type: Type | null = null
  constructor(name: string, type: Type | undefined = undefined) {
    this.name = name
    if (type) this.type = type
  }

  getName(): string {
    return this.name
  }

  toString() {
    if (this.type) return `<${this.getName()}:${this.type}>`

    return this.name
  }
}

class VariableSymbol extends MySymbol {
  constructor(name: string, type: Type) {
    super(name, type)
  }
}

class BuiltInTypeSymbol extends MySymbol implements Type {
  constructor(name: string) {
    super(name)
  }
}

interface Scope {
  define(sym: MySymbol): void
  getScopeName(): string
  getEnclosingScope(): null | Scope
  resolve(name: string): MySymbol | null
}

class SymbolTable implements Scope {
  private symbols: Map<string, MySymbol> = new Map()

  constructor() {
    this.initTypeSystem()
  }

  protected initTypeSystem() {
    this.define(new BuiltInTypeSymbol('int'))
    this.define(new BuiltInTypeSymbol('float'))
  }

  getScopeName() {
    return 'global'
  }

  define(sym: MySymbol): void {
    this.symbols.set(sym.getName(), sym)
  }
  getEnclosingScope(): null | Scope {
    return null
  }
  resolve(name: string): MySymbol | null {
    return this.symbols.get(name) ?? null
  }

  toString() {
    return this.getScopeName() + ':' + this.symbols
  }
}
