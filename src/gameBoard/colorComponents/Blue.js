import React from 'react';

class Blue extends React.Component {
    render() {
        return (
            <div id='blue' style={{ backgroundColor: this.props.bgColor, borderColor: this.props.border }} onClick={(e) => this.props.handleColor(e.target.id)}>
            </div>
        )
    }
}
export default Blue;