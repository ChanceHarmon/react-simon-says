import React from 'react';
import Blue from './colorComponents/Blue';
import Green from './colorComponents/Green';
import Red from './colorComponents/Red';
import Yellow from './colorComponents/Yellow';

class GameBoard extends React.Component {
    render() {
        return (
            <>
                <Green />
                <Red />
                <Yellow />
                <Blue />
            </>
        )
    }
}
export default GameBoard;