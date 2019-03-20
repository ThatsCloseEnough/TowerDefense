"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var consts_1 = require("./consts");
var Game = /** @class */ (function () {
    function Game(gameContainer, boardWidth, boardHeight) {
        this.gameBoard = new SVGElement();
        this.gameBoard.setAttribute("width", String(consts_1.Consts.SQUARE_SIZE * boardWidth));
        this.gameBoard.setAttribute("height", String(consts_1.Consts.SQUARE_SIZE * boardHeight));
        gameContainer.appendChild(this.gameBoard);
    }
    return Game;
}());
exports.Game = Game;
var game = new Game(document.getElementById('board'), 20, 20);
