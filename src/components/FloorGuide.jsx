import React from 'react';
import { Link } from 'react-router-dom';

class FloorGuide extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({id: props.match.params.numFloor});
    }
    render() {
        return (
            <div class="floor-guide">
                <div class="rooms">
                    <Link to={`/floor${this.state.id}/room2${this.state.id}1`} class="room">2{this.state.id}1教室を見る　＞</Link>
                    <Link to={`/floor${this.state.id}/room2${this.state.id}2`} class="room">2{this.state.id}2教室を見る　＞</Link>
                    <Link to={`/floor${this.state.id}/room2${this.state.id}3`} class="room">2{this.state.id}3教室を見る　＞</Link>
                </div>
                <img src={`img/floor${this.state.id}.png`} alt={`${this.state.id}Fの俯瞰画像`} />
            </div>
        );
    }
}

export default FloorGuide;