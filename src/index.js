import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component{
  render(){
    return (
      <div className="square-component">{this.props.value}</div>
    );
  }
}

class Board extends React.Component{
  constructor(props){
    super(props);

    // adding in starting values to random starting points -
    var startingArray = Array(16).fill(null);
    var randomNumbers = getTwoRandomNumbers();
    for (var i = 0; i < 16; i++){
      if (randomNumbers.includes(i)){
        startingArray[i] = 2;
      }
    }

    this.state = {
      squares: startingArray,
      randomNumbers: randomNumbers
    };
  }


  render(){
    return(
      <div>
        <div>{this.state.randomNumbers}</div>
        <div>{this.state.squares}</div>


        <div className="board-row">
          <Square value={this.state.squares[0]}/>
          <Square value={this.state.squares[1]}/>
          <Square value={this.state.squares[2]}/>
          <Square value={this.state.squares[3]}/>
        </div>
        <div className="board-row">
          <Square value={this.state.squares[4]}/>
          <Square value={this.state.squares[5]}/>
          <Square value={this.state.squares[6]}/>
          <Square value={this.state.squares[7]}/>
        </div>
        <div className="board-row">
          <Square value={this.state.squares[8]}/>
          <Square value={this.state.squares[9]}/>
          <Square value={this.state.squares[10]}/>
          <Square value={this.state.squares[11]}/>
        </div>
        <div className="board-row">
          <Square value={this.state.squares[12]}/>
          <Square value={this.state.squares[13]}/>
          <Square value={this.state.squares[14]}/>
          <Square value={this.state.squares[15]}/>
        </div>
      </div>
    );
  }
}

function getTwoRandomNumbers(){
  let first = getRandomNumber(16);
  let second = getRandomNumber(16);
  while (first === second){
    second = getRandomNumber(16);
  }
  return [first, second];
}

function getRandomNumber(max){
  let number = Math.floor(Math.random() * 1000) % max;
  return number;
}

ReactDOM.render(<Board/>, document.getElementById('root'));
