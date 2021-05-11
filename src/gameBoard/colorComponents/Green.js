import React from 'react';

class Green extends React.Component {
    render() {
        return (
            <div id='green' style={{ backgroundColor: this.props.bgColor, borderColor: this.props.border }} onClick={(e) => this.props.handleColor(e.target.id)}>
            </div>
        )
    }
}
export default Green;