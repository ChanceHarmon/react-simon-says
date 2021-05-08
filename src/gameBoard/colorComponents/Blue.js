import React from 'react';
import { Howl, Howler } from 'howler';

import FourthWhistle from './../../audio/simon-fourth-note.mp3'

const clips = [
    { sound: FourthWhistle }
]

class Blue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'rgb(0,0,255)',
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
        console.log('blue clicked')
        this.playSound(clips[0].sound)
        this.setState({ color: 'rgb(157,157,255)', border: 'rgb(235,235,255)' });
        setTimeout(() => {
            this.setState({ color: 'rgb(0,0,255)', border: 'rgb(0,0,0)' });
        }, 500)

    }

    render() {
        Howler.volume(1.0)
        return (
            <div id='blue' style={{ backgroundColor: this.state.color, borderColor: this.state.border }} onClick={this.handleColor}>
            </div>
        )
    }
}
export default Blue;