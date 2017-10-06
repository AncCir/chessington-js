import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let location : Square = board.findPiece(this);
        let availableMoves = [];
        //verificam daca playerul este alb
        if (this.player === Player.WHITE) {
            if (location.row === 1) {
                //se poate muta atat un rand, cat si doua in fata
                availableMoves.push(new Square(location.row + 1, location.col));
                availableMoves.push(new Square(location.row + 2, location.col));
            } else {
                // se poate muta doar un rand in fata
                availableMoves.push(new Square(location.row + 1, location.col));
            }
        } else {
            if (location.row === 6) {
                //se poate muta atat un rand, cat si doua in fata
                availableMoves.push(new Square(location.row - 1, location.col));
                availableMoves.push(new Square(location.row - 2, location.col));
            } else {
                // se poate muta doar un rand in fata
                availableMoves.push(new Square(location.row - 1, location.col));
            }
        }
        return availableMoves;
    }
}
