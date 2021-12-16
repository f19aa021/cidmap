import React from 'react';
import Shop from './molecules/Shop';
import Event from './molecules/Event';

class RoomGuide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shopsData: this.props.location.state.shopsData,
            roomName: this.props.location.state.roomName,
            numRoom: this.props.match.params.numRoom
        }
    }
    render() {
        const { shopsData, roomName, numRoom } = this.state;
        const shops = [];
        shopsData.forEach((shopData) => {
            if (shopData.type === 'shop') {
                shops.push(
                    <Shop shopData={shopData} />
                )
            } else if (shopData.type === 'event') {
                shops.push(
                    <Event shopData={shopData} />
                )
            }
        });
        return (
            <div class="room-guide">
                <button class="button back-button" onClick={() => this.props.history.goBack()}>＜ 戻る</button>
                <h1>{roomName}</h1>
                <div class="shops"> 
                    {shops}
                </div>
            </div>                
        );
    }
}

export default RoomGuide;