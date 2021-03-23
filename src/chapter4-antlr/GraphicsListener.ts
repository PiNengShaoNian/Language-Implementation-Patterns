// Generated from .\\Graphics.g by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { FileContext } from "./GraphicsParser";
import { CommandContext } from "./GraphicsParser";
import { PointContext } from "./GraphicsParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `GraphicsParser`.
 */
export interface GraphicsListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `GraphicsParser.file`.
	 * @param ctx the parse tree
	 */
	enterFile?: (ctx: FileContext) => void;
	/**
	 * Exit a parse tree produced by `GraphicsParser.file`.
	 * @param ctx the parse tree
	 */
	exitFile?: (ctx: FileContext) => void;

	/**
	 * Enter a parse tree produced by `GraphicsParser.command`.
	 * @param ctx the parse tree
	 */
	enterCommand?: (ctx: CommandContext) => void;
	/**
	 * Exit a parse tree produced by `GraphicsParser.command`.
	 * @param ctx the parse tree
	 */
	exitCommand?: (ctx: CommandContext) => void;

	/**
	 * Enter a parse tree produced by `GraphicsParser.point`.
	 * @param ctx the parse tree
	 */
	enterPoint?: (ctx: PointContext) => void;
	/**
	 * Exit a parse tree produced by `GraphicsParser.point`.
	 * @param ctx the parse tree
	 */
	exitPoint?: (ctx: PointContext) => void;
}

