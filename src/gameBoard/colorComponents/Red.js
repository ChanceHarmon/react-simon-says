import React from 'react';
import { Howl, Howler } from 'howler';

import SecondWhistle from './../../audio/simon-second-note.mp3'

const clips = [
    { sound: SecondWhistle }
]

class Red extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'rgb(255,0,0)',
            border: 'rgb(0,0,0)'
        }
    }

    playSound = (src) => {
        console.log('in sound')
        const sound = new Howl({
            src
        })
        console.log(sound)
        sound.play();
    }

    handleColor = () => {
        console.log('red clicked')
        this.playSound(clips[0].sound)
        this.setState({ color: 'rgb(255,118,118)', border: 'rgb(255,235,235)' });
        setTimeout(() => {
            this.setState({ color: 'rgb(255,0,0)', border: 'rgb(0,0,0)' });
        }, 500)

    }

    render() {
        Howler.volume(1.0)
        return (
            <div id='red' style={{ backgroundColor: this.state.color, borderColor: this.state.border }} onClick={this.handleColor}>
            </div>
        )
    }
}
export default Red;