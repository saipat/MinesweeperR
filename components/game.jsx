import React from 'react';
import Board from './board';
import * as Minesweeper from '../minesweeper';

class Game extends React.Component{
    constructor(props){
        super(props);
        const board = new Minesweeper.Board;
        this.state = {
            board: board
        };
        this.updateGame = this.updateGame.bind(this);
    }

   updateGame() {

   }

   render() {
       return (
           <div>
               <Board board={this.state.board} updateGame={this.updateGame} />
           </div>
       );
   }
}

export default Game;