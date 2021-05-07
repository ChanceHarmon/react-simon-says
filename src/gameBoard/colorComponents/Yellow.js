import React from 'react';

class Yellow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'rgb(255,255,0)',
            border: 'rgb(0,0,0)'
        }
    }

    handleColor = () => {
        console.log('yellow clicked')
        this.setState({ color: 'rgb(255,255,157)', border: 'rgb(255,255,216)' });
        setTimeout(() => {
            this.setState({ color: 'rgb(255,255,0)', border: 'rgb(0,0,0)' });
        }, 500)

    }

    render() {
        return (
            <div id='yellow' style={{ backgroundColor: this.state.color, borderColor: this.state.border }} onClick={this.handleColor}>
            </div>
        )
    }
}
export default Yellow;
