import React from 'react';
import { Link } from 'react-router-dom';

class FloorLink extends React.Component {
    render() {
        return (
            <div class={`floor-link floor-${this.props.numFloor}`}>
                <div class="floor-name">{this.props.numFloor}F</div>
                <Link to={`/floor${this.props.numFloor}`}></Link>
            </div>
        );
    }
}

export default FloorLink;