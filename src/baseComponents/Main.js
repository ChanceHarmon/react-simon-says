import React from 'react';
import GameBoard from '../gameBoard/GameBoard';
import './Main.css'

class Main extends React.Component {
    render() {
        return (
            <div id='main'>
                <GameBoard />
            </div>
        )
    }
}
export default Main;
