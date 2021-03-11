import React from 'react';
import Shop from './molecules/Shop';
import shopsData from '../data/shopsData';

class RoomGuide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numRoom: this.props.match.params.numRoom,
            shopsData: shopsData
        }
    }
    render() {
        const shops = [];
        this.state.shopsData[this.state.numRoom].forEach((shopData) => {
            shops.push(
                <Shop shopData={shopData} />
            )
        });
        return (
            <div class="room-guide">
                <h1>{this.state.numRoom}教室</h1>
                <div class="shops"> 
                    {shops}
                </div>
          </div>
        );
    }
}

export default RoomGuide;