import React, { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import './Product.scss'

const Product = ({ image, name, price, category, isSale, isHot }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className={`product ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="img-product">
                <img src={image} alt={name}>
                </img>

                <div className="bottom">
                    <div className="icon">
                        <span><FavoriteBorderIcon /></span>
                        <span><SearchIcon /></span>
                    </div>
                    <div className="text">
                        <span><ShoppingBagIcon /></span>
                        <span style={{ fontWeight: 400, fontSize: 18 }}>Shop Now</span>
                    </div>
                </div>
            </div>

            <h6>{name}</h6>
            <div className="product-details">
                <span className="category">{category}</span>
                <span className="price">{price}</span>
                {isSale && <span className="sale-tag">Sale</span>}
                {isHot && <span className="hot-tag">Hot</span>}
            </div>

        </div>
    );
};

export default Product;