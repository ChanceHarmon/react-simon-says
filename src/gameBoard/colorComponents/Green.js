import React from 'react';
import { Howl, Howler } from 'howler';

import FirstWhistle from './../../audio/simon-first-note.mp3'

const clips = [
    { sound: FirstWhistle }
]
class Green extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'rgb(40,255,0)',
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
        console.log('green clicked')
        this.playSound(clips[0].sound)
        this.setState({ color: 'rgb(156,255,138)', border: 'rgb(222,255,216)' });
        setTimeout(() => {
            this.setState({ color: 'rgb(40,255,0)', border: 'rgb(0,0,0)' });
        }, 500)

    }


    render() {
        Howler.volume(1.0)
        return (
            <div id='green' style={{ backgroundColor: this.state.color, borderColor: this.state.border }} onClick={this.handleColor}>
            </div>
        )
    }
}
export default Green;