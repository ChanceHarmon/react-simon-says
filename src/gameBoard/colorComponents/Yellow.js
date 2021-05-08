import React from 'react';
import { Howl, Howler } from 'howler';

import ThirdWhistle from './../../audio/simon-third-note.mp3'

const clips = [
    { sound: ThirdWhistle }
]

class Yellow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'rgb(255,255,0)',
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
        console.log('yellow clicked')
        this.playSound(clips[0].sound)
        this.setState({ color: 'rgb(255,255,157)', border: 'rgb(255,255,216)' });
        setTimeout(() => {
            this.setState({ color: 'rgb(255,255,0)', border: 'rgb(0,0,0)' });
        }, 500)

    }

    render() {
        Howler.volume(1.0)
        return (
            <div id='yellow' style={{ backgroundColor: this.state.color, borderColor: this.state.border }} onClick={this.handleColor}>
            </div>
        )
    }
}
export default Yellow;
