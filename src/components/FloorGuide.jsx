import React from 'react';
import { Link } from 'react-router-dom';

class FloorGuide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            shopsData: [],
            numFloor: this.props.match.params.numFloor
        };
    }
    componentDidMount() {
        fetch('https://script.google.com/macros/s/AKfycbxP5TzGPf272KV0FounSseDgc57h13foba2Gd5DjcsxGilu8D80mKCAfRyc7Wk1gD58UQ/exec')
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    shopsData: result
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        );
    }
    render() {
        const { error, isLoaded, shopsData, numFloor } = this.state;
        if (error) {
            return (
                <div>Error: {error.message}</div>
            );
        } else if (!isLoaded) {
            return (
                <div>Loading...</div>
            );
        } else {
            const roomLinks = [];
            Object.keys(shopsData[numFloor]).forEach((numRoom) => {
                let roomName = '';
                if (numRoom === 'portal') {
                    roomName = '受付'
                } else if (numRoom === 'freelab') {
                    roomName = 'FreeLab'
                } else {
                    roomName = numRoom + '教室';
                }
                roomLinks.push(
                    <Link to={{pathname: `/${numFloor}/${numRoom}`, state: {shopsData: shopsData[numFloor][numRoom], roomName: roomName}}} class="room-link">{roomName}を見る　＞</Link>
                );
            });
            return (
                <div class="floor-guide">
                    <button id="back-button" onClick={() => this.props.history.goBack()}>＜ 戻る</button>
                    <div class="room-links">
                        {roomLinks}
                    </div>
                    <img src={`img/floor-map/${numFloor}.png`} alt={`${numFloor.toUpperCase()}の俯瞰画像`} />
                </div>
            );
        }
    }
}

export default FloorGuide;