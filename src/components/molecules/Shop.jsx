import React from 'react';

class Shop extends React.Component {
    render() {
        const shopData = this.props.shopData;
        return (
            <div class="shop">
                <h2>{shopData.schoolName}{shopData.schoolGrade}{shopData.semiName} {shopData.shopName}</h2>
                <div class="introduction-img">
                    <img src={`../img/${shopData.semiName}.png`} alt="八木ゼミの紹介画像" />
                </div>
                <div class="price">
                    <p>¥{shopData.price}</p>
                </div>
                <div class="introduction-text">
                    <p>{shopData.introductionText}</p>
                </div>
            </div>
        );
    }
}

export default Shop;