import React, { useState } from 'react';
import './ProductBrand.scss'

export const ProductBrand = ({ img, name, quanlity }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return <>
        <div
            className={`product-follow ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="img-product">
                <img src={img} alt={name}>
                </img>

                <div className="bottom">
                    <div className="name">
                        <span>{name}</span>
                    </div>
                    <div className="quanlity">
                        <span style={{ fontWeight: 400, fontSize: 18 }}>{quanlity}</span>
                    </div>
                </div>
            </div>

        </div>
    </>
}