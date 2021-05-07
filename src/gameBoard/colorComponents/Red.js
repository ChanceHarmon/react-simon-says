import React from 'react';

class Red extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'rgb(255,0,0)',
            border: 'rgb(0,0,0)'
        }
    }

    handleColor = () => {
        console.log('red clicked')
        this.setState({ color: 'rgb(255,118,118)', border: 'rgb(255,235,235)' });
        setTimeout(() => {
            this.setState({ color: 'rgb(255,0,0)', border: 'rgb(0,0,0)' });
        }, 500)

    }

    render() {
        return (
            <div id='red' style={{ backgroundColor: this.state.color, borderColor: this.state.border }} onClick={this.handleColor}>
            </div>
        )
    }
}
export default Red;