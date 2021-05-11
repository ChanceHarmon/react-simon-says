import React from 'react';
import Blue from './colorComponents/Blue';
import Green from './colorComponents/Green';
import Red from './colorComponents/Red';
import Yellow from './colorComponents/Yellow';
import PlayButton from './PlayButton';

class GameBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            streak: 0,
            npcList: [],
            playerList: []
        }
    }


    handleColor = (color) => {
        switch (color) {
            case 'green':
                this.handleGreen();
                break;
            case 'red':
                this.handleRed();
                break;
            case 'yellow':
                this.handleYellow();
                break;
            case 'blue':
                this.handleBlue();
                break;
            default:
                console.log('Simon did not say to do this...')
        }
    }


    handleGreen = () => {

    }
    render() {
        return (
            <>
                <Green />
                <Red />
                <Yellow />
                <Blue />
                <PlayButton />
            </>
        )
    }
}
export default GameBoard;