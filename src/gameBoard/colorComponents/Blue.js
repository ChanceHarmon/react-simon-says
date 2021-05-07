import React from 'react';

class Blue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'rgb(0,0,255)',
            border: 'rgb(0,0,0)'
        }
    }

    handleColor = () => {
        console.log('blue clicked')
        this.setState({ color: 'rgb(157,157,255)', border: 'rgb(235,235,255)' });
        setTimeout(() => {
            this.setState({ color: 'rgb(0,0,255)', border: 'rgb(0,0,0)' });
        }, 500)

    }

    render() {
        return (
            <div id='blue' style={{ backgroundColor: this.state.color, borderColor: this.state.border }} onClick={this.handleColor}>
            </div>
        )
    }
}
export default Blue;