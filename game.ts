import  { Consts } from "./consts";

export class Game {
    gameBoard: SVGElement;

    constructor(gameContainer: HTMLElement, boardWidth: number, boardHeight: number){
        this.gameBoard = new SVGElement();
        this.gameBoard.setAttribute("width", String(Consts.SQUARE_SIZE * boardWidth));
        this.gameBoard.setAttribute("height", String(Consts.SQUARE_SIZE * boardHeight));

        gameContainer.appendChild(this.gameBoard);
    }
}

let game = new Game(document.getElementById('board'), 20, 20);