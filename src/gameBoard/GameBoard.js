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

//clips => Part of Howler setup, I have tried it a lot of ways, but array, even if it is only one item seems to be the way. clips could be banana, just what the example from the use case i studied named the variable. objects with a key of sound at each index does not appear to be banana, so I didn't experiment with that
const clips = [
    { sound: FirstWhistle },
    { sound: SecondWhistle },
    { sound: ThirdWhistle },
    { sound: FourthWhistle }
];
const colorArray = ['green', 'red', 'yellow', 'blue'];

class GameBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            streak: 0,
            npcList: [],
            playerList: [],
            playBoxText: 'Play',
            playBoxStyles: {
                bgColor: 'rgb(0,0,0)',
                textColor: 'rgb(240, 248, 255)',
                border: 'rgb(0,0,0)'
            },
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

    //playSound =>  straight from the Howler docs, basic boiler plate to be able to play a sound function for this Lib
    playSound = (src) => {
        const sound = new Howl({
            src
        })
        sound.play();
    }

    // Made this a switch because why not, seemed like a perfect use case vs if/else if/else
    handlePlayerColor = (color) => {
        switch (color) {
            case 'green':
                this.handleGreen();
                this.userPlay(color);
                break;
            case 'red':
                this.handleRed();
                this.userPlay(color);
                break;
            case 'yellow':
                this.handleYellow();
                this.userPlay(color);
                break;
            case 'blue':
                this.handleBlue();
                this.userPlay(color);
                break;
            default:
                console.log('Simon did not say to do this...')
        }
    }

    handleNpcColor = (color) => {
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

    // Below is each function that handles color and border change( and sound ) per click for each color.
    //Thank you Jacob Knaack for helping me get over the prevState hurdle

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

    handleGameStart = () => {
        this.setState(prevState => {
            return {
                ...prevState, playBoxText: `Score: ${this.state.score}`, playBoxStyles: {
                    textColor: 'rgb(144, 199, 248)', border: 'rgb(240, 248, 255)'
                }
            }
        })
        this.npcPlay();
    }

    randomNum = (max) => {
        return Math.floor(Math.random() * max);
    }

    npcPlay = () => {
        this.state.npcList.push(colorArray[this.randomNum(colorArray.length)])
        this.setState({ playerList: [] })
        console.log(this.state)
        // this.userPlay();
    }

    userPlay = (color) => {
        this.state.playerList.push(color);
        let idx = this.state.playerList.length - 1;
        if (this.state.playerList[idx] !== this.state.npcList[idx]) {
            console.log('didn\'t match')
        } else if (this.state.playerList[idx] === this.state.npcList[idx]) {
            console.log('Match')
            if (this.state.playerList.length === this.state.npcList.length) {
                this.handleScore()
                this.npcPlay()
            }
        }
        console.log(this.state.playerList)
        // this.npcPlay();
    }

    handleScore = () => {
        let newScore = this.state.score + 1;
        console.log(newScore)
        if (this.state.streak < newScore) {
            this.setState({ score: newScore, streak: newScore, playBoxText: `Score: ${newScore}` })
        } else {
            this.setState({ score: newScore, playBoxText: `Score: ${newScore}` })
        }
    }

    render() {
        Howler.volume(1.0)
        return (
            <>
                <Green handleColor={this.handlePlayerColor} bgColor={this.state.green.bgColor} border={this.state.green.border} />
                <Red handleColor={this.handlePlayerColor} bgColor={this.state.red.bgColor} border={this.state.red.border} />
                <Yellow handleColor={this.handlePlayerColor} bgColor={this.state.yellow.bgColor} border={this.state.yellow.border} />
                <Blue handleColor={this.handlePlayerColor} bgColor={this.state.blue.bgColor} border={this.state.blue.border} />
                <PlayButton startGame={this.handleGameStart} boxContent={this.state.playBoxText} boxStyle={this.state.playBoxStyles} />
            </>
        )
    }
}
export default GameBoard;