import React from 'react';

class Yellow extends React.Component {
    render() {
        return (
            <div id='yellow' style={{ backgroundColor: this.props.bgColor, borderColor: this.props.border }} onClick={(e) => this.props.handleColor(e.target.id)}>
            </div>
        )
    }
}
export default Yellow;
