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
                <div class="error">
                    <h1>error!</h1>
                    <p>{error.message}</p>
                    <p>Sorry, please return to top</p>
                    <Link to="/" class="button">トップページに戻る</Link>
                </div>
            );
        } else if (!isLoaded) {
            return (
                <div class="loading">
                    <div class="three_balls"></div>
                </div>
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
                    <Link to={{pathname: `/${numFloor}/${numRoom}`, state: {shopsData: shopsData[numFloor][numRoom], roomName: roomName}}} class="button room-link">{roomName}を見る　＞</Link>
                );
            });
            return (
                <div class="floor-guide">
                    <button class="button back-button" onClick={() => this.props.history.goBack()}>＜ 戻る</button>
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