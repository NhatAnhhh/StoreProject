import React, { useState } from 'react';
import iconIns from 'assets/iconIns.svg'
import './ProductFollow.scss'

export const ProductFollow = ({ img }) => {
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

            <div className="img">
                <img src={img} alt="" />
                <div className="iconIns">
                    <img src={iconIns} alt="" />
                </div>
            </div>

        </div>
    </>
}