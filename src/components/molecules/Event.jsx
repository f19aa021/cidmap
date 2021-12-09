import React from "react";

class Event extends React.Component {
    render() {
        const { shopName, introductionText } = this.props.shopData;
        let suffix = 'JPG';
        if (shopName.includes('受付(食券販売)') || shopName.includes('休憩所')) {
            suffix = 'png';
        }
        return (
            <div class="shop">
                <h2>{shopName}</h2>
                <div class="introduction-img">
                    <img src={`../img/shop-introduction-img/${shopName}.${suffix}`} alt={`${shopName}の紹介画像`} />
                </div>
                <div class="introduction-text">
                    <p>{introductionText}</p>
                </div>
            </div>
        );
    }
}

export default Event;