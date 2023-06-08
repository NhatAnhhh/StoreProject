import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import "./NavbarStyle.scss"

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="warapper">
                <div className="left">
                    <SearchIcon />
                </div>
                <div className="center">
                    <h2>UAN Store</h2>
                </div>
                <div className="right">
                    <div className="account" style={{ display: 'flex', gap: 10.5 }}>
                        <PersonIcon />
                        <span>Account</span>
                    </div>

                    <div className="shoping" style={{ display: 'flex', gap: 10.5 }}>
                        <ShoppingBagIcon />
                        <span>Shoping</span>
                    </div>

                </div>
            </div>
        </div>
    )
}