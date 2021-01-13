import React from 'react';
import './Game.css';

class GameComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      player: props.player,
      cells: Array(9).fill(''),
    };
  }

  render() {
    const updateCell = (input) => {
      if (this.state.cells[input]) {
        return;
      }
      // get the array from the state
      const arr = this.state.cells.slice();
      // modify the array

      arr[input] = this.state.player;
      const newPlayer = this.state.player === 'X' ? 'O' : 'X';
      // put the array back in the state
      this.setState({ cells: arr, player: newPlayer });
    };

    return (
      <>
        <h1 className='title'>Tic Tac Toe</h1>
        <div className='current-player'>
          <h2>Current Player: </h2>
          <h2 id='current-player'>{this.state.player}</h2>
        </div>
        <div className='row'>
          {this.state.cells.map((cell, index) => {
            return (
              <div
                className='cell'
                key={index} //smth from react
                onClick={() => updateCell(index)}
              >
                {this.state.cells[index]}
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default GameComponent;
