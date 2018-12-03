export class Board {
    constructor(gridSize, numBombs) {
        this.gridSize = gridSize;
        this.grid = [];
        this.numBombs = numBombs;
        // this.generateBoard();
        // this.plantBombs();
    }
}

export class Tile {
    constructor(board, pos){
        this.board = board;
        this.pos = pos;
        this.explored = false;
        this.bombed = false;
        this.flagged = false;
    }

    adjacentBombCount(){
        
    }
}

// export default Minesweeper;