import React from "react";
import './Footer.scss'
import fbIcon from 'assets/iconFB.svg'
import imgPay from 'assets/icons_payment 1.svg'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
export const Footer = () => {
    return <>
        <div className="footer">
            <div className="warapper">
                <div className="lisa">
                    <h1 style={{ fontWeight: 400, fontSize: 28 }}>UAN</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua</p>
                    <div className="icon">
                        <img src={fbIcon} alt="" />
                        <img src={fbIcon} alt="" />
                        <img src={fbIcon} alt="" />
                        <img src={fbIcon} alt="" />
                    </div>
                </div>

                <div className="catalog">
                    <h1 style={{ fontWeight: 600, fontSize: 16 }}>CATALOG</h1>
                    <p>Necklaces</p>
                    <p>hoodies</p>
                    <p>Jewelry Box</p>
                    <p>t-shirt</p>
                    <p>jacket</p>
                </div>

                <div className="aboutUs">
                    <h1 style={{ fontWeight: 600, fontSize: 16 }}>ABOUT US</h1>
                    <p>Our Producers</p>
                    <p>Sitemap</p>
                    <p>FAQ</p>
                    <p>About Us</p>
                    <p>Terms & Conditions</p>
                </div>

                <div className="customer">
                    <h1 style={{ fontWeight: 600, fontSize: 16 }}>CUSTOMER SERVICES</h1>
                    <p>Contact Us</p>
                    <p>Track Your Order</p>
                    <p>Product Care & Repair</p>
                    <p>Book an Appointment</p>
                    <p>Shipping & Returns</p>
                </div>
            </div>
            <div className="bottom-footer">
                <div style={{ paddingLeft: 300, color: "white" }}>
                    <span>© 2023 UAN , Inc.</span>
                </div>

                <div>
                    <img src={imgPay} alt="" />
                </div>

                <div style={{ paddingRight: 300, color: "white" }}>
                    <span style={{ display: 'flex', gap: 4 }}>Scroll to top <ArrowUpwardIcon /></span>
                </div>
            </div>
        </div>
    </>
}