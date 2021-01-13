import React from 'react';

class RulesComponent extends React.Component {
  constructor() {
    super();
    this.player = 'X';
  }

  // play(cellNumber) {
  // const result = writeInCell(this.player, cellNumber);
  // if (result) {
  //   this.changePlayer();

  // }
  // }

  //   changePlayer() {
  //     if (this.player === 'X') {
  //       this.player = 'O';
  //     } else {
  //       this.player = 'X';
  //     }
  //   }

  render() {
    return <h1>me</h1>;
  }
}

export default RulesComponent;
