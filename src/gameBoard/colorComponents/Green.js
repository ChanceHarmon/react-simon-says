import React from 'react';

class Green extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'rgb(40,255,0)',
            border: 'rgb(0,0,0)'
        }
    }

    handleColor = () => {
        console.log('green clicked')
        this.setState({ color: 'rgb(156,255,138)', border: 'rgb(222,255,216)' });
        setTimeout(() => {
            this.setState({ color: 'rgb(40,255,0)', border: 'rgb(0,0,0)' });
        }, 500)

    }


    render() {
        return (
            <div id='green' style={{ backgroundColor: this.state.color, borderColor: this.state.border }} onClick={this.handleColor}>
            </div>
        )
    }
}
export default Green;