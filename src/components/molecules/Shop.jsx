import React from 'react';

class Shop extends React.Component {
    render() {
        const { schoolName, schoolGrade, semiName, shopName, price, introductionText } = this.props.shopData;
        let suffix = 'JPG';
        return (
            <div class="shop">
                <h2>{schoolName}{schoolGrade}{semiName} {shopName}</h2>
                <div class="introduction-img">
                    <img src={`../img/shop-introduction-img/${shopName}.${suffix}`} alt={`${shopName}の紹介画像`} />
                </div>
                <div class="price">
                    <p>¥{price}</p>
                </div>
                <div class="introduction-text">
                    <p>{introductionText}</p>
                </div>
            </div>
        );
    }
}

export default Shop;