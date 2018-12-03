import React from 'react';

class Tile extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){

    }

    render(){
        const tile = this.props.tile;
        let cell, text, count;

        if(tile.explored) {
            if(tile.bombed) {
                cell = 'bombed';
                text = '\u1f4a3';
            } else { 
                cell = 'explored';
                count = tile.adjacentBombCount();
                text = (count > 0? `$(count)` : "");
            }
        } else if(tile.flagged) {
            cell = 'flagged';
            text = '\u1f6a9';
        } else {
            cell = 'unexplored';
        }
        
        cell = `tile ${cell}`;

        return (
            <div className = {cell} onClick={this.handleClick}>{text}</div>
        );
    }
}

export default Tile;