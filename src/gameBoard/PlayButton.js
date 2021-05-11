import React from 'react';

class PlayButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'rgb(0,0,0)',
            textColor: 'rgb(240, 248, 255)',
            border: 'rgb(0,0,0)'
        }
    }

    handleClick = () => {
        console.log('play button')
        this.setState({ border: 'rgb(240, 248, 255)', textColor: 'rgb(144, 199, 248)' });
        setTimeout(() => {
            this.setState({ textColor: 'rgb(240, 248, 255)', border: 'rgb(0,0,0)' });
        }, 500)

    }

    render() {
        return (
            <div id='playButton' style={{ backgroundColor: this.state.color, borderColor: this.state.border }} onClick={this.handleClick}>
                <h2 style={{ color: this.state.textColor }}>Play</h2>
            </div>
        )
    }
}

export default PlayButton;