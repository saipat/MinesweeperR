import React from 'react';
import Board from './board';

class Game extends React.Component{
    constructor(){
        super();
        const board = new Minesweeper.Board;
        this.state = {board: board};
        this.updateGame = updateGame.bind(this);
    }

   updateGame() {

   }

   render() {
       return (
           < Board board={this.state.board} updateGame = {this.updateGame} />
       );
   }



}