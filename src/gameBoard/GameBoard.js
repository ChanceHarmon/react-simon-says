import React from 'react';
import Blue from './colorComponents/Blue';
import Green from './colorComponents/Green';
import Red from './colorComponents/Red';
import Yellow from './colorComponents/Yellow';
import PlayButton from './PlayButton';
import { Howl, Howler } from 'howler';
import FirstWhistle from './../audio/simon-first-note.mp3';
import SecondWhistle from './../audio/simon-second-note.mp3';
import ThirdWhistle from './../audio/simon-third-note.mp3';
import FourthWhistle from './../audio/simon-fourth-note.mp3';

const clips = [
    { sound: FirstWhistle },
    { sound: SecondWhistle },
    { sound: ThirdWhistle },
    { sound: FourthWhistle }
];

class GameBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            streak: 0,
            npcList: [],
            playerList: [],
            green: {
                bgColor: 'rgb(40,255,0)',
                border: 'rgb(0,0,0)'
            },
            red: {
                bgColor: 'rgb(255,0,0)',
                border: 'rgb(0,0,0)'
            },
            yellow: {
                bgColor: 'rgb(255,255,0)',
                border: 'rgb(0,0,0)'
            },
            blue: {
                bgColor: 'rgb(0,0,255)',
                border: 'rgb(0,0,0)'
            }

        }
    }

    playSound = (src) => {
        const sound = new Howl({
            src
        })
        sound.play();
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
        console.log('green clicked')
        this.playSound(clips[0].sound)
        this.setState(prevState => {
            return {
                ...prevState, green: { bgColor: 'rgb(156,255,138)', border: 'rgb(222,255,216)' }
            }
        });
        setTimeout(() => {
            this.setState(prevState => {
                return {
                    ...prevState, green: { bgColor: 'rgb(40,255,0)', border: 'rgb(0,0,0)' }
                }
            });
        }, 500)
    }

    handleRed = () => {
        console.log('red clicked')
        this.playSound(clips[1].sound)
        this.setState(prevState => {
            return {
                ...prevState, red: { bgColor: 'rgb(255,118,118)', border: 'rgb(255,235,235)' }
            }
        });
        setTimeout(() => {
            this.setState(prevState => {
                return {
                    ...prevState, red: { bgColor: 'rgb(255,0,0)', border: 'rgb(0,0,0)' }
                }
            });
        }, 500)
    }

    handleYellow = () => {
        console.log('yellow clicked')
        this.playSound(clips[2].sound)
        this.setState(prevState => {
            return {
                ...prevState, yellow: { bgColor: 'rgb(255,255,157)', border: 'rgb(255,255,216)' }
            }
        });
        setTimeout(() => {
            this.setState(prevState => {
                return {
                    ...prevState, yellow: { bgColor: 'rgb(255,255,0)', border: 'rgb(0,0,0)' }
                }
            });
        }, 500)
    }

    handleBlue = () => {
        console.log('blue clicked')
        this.playSound(clips[3].sound)
        this.setState(prevState => {
            return {
                ...prevState, blue: { bgColor: 'rgb(157,157,255)', border: 'rgb(235,235,255)' }
            }
        });
        setTimeout(() => {
            this.setState(prevState => {
                return {
                    ...prevState, blue: { bgColor: 'rgb(0,0,255)', border: 'rgb(0,0,0)' }
                }
            });
        }, 500)
    }

    render() {
        Howler.volume(1.0)
        return (
            <>
                <Green handleColor={this.handleColor} bgColor={this.state.green.bgColor} border={this.state.green.border} />
                <Red handleColor={this.handleColor} bgColor={this.state.red.bgColor} border={this.state.red.border} />
                <Yellow handleColor={this.handleColor} bgColor={this.state.yellow.bgColor} border={this.state.yellow.border} />
                <Blue handleColor={this.handleColor} bgColor={this.state.blue.bgColor} border={this.state.blue.border} />
                <PlayButton />
            </>
        )
    }
}
export default GameBoard;