export const marking = {
    X: 'X', O: 'O', U: 'U',
};

export const GameState = {
    INIT : 0, PLAYING : 1, DONE: 2,
}

export class TicTacToeGame {
    constructor() {
        this.board = []; 
        for (let i = 0; i < 9; i++)
            this.board.push(marking.U);
        this.reset();
    }

    reset() {
        this.turn = marking.X; //X plays first
        this.moves = 0;
        this.gameState  = GameState.INIT;
        this.winner= null; // O/X/U (draw), null(playing)
        this.board = [];
        this.errorMessage = null; 
        for (let i = 0; i < 9; i++)
            this.board[i] = (marking.U);
    }

    play(pos) {
        this.board[pos] = this.true;
        this.moves++;
    }

    changeTurn(){
        this.turn = this.turn == marking.X ? marking.O : marking.X;
    }

}