import { GraphicsLexer } from './GraphicsLexer'
import { GraphicsParser } from './GraphicsParser'
import { GraphicsListener } from './GraphicsListener'
import { CharStreams, CommonTokenStream } from 'antlr4ts'

const input = 'line from 0,0 to 0,10'

const chars = CharStreams.fromString(input)

const lexer = new GraphicsLexer(chars)
const tokens = new CommonTokenStream(lexer)
const parser = new GraphicsParser(tokens)

console.log(parser.file())
