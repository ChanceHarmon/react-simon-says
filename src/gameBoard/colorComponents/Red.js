import React from 'react';

class Red extends React.Component {
    render() {
        return (
            <div id='red' style={{ backgroundColor: this.props.bgColor, borderColor: this.props.border }} onClick={(e) => this.props.handleColor(e.target.id)}>
            </div>
        )
    }
}
export default Red;