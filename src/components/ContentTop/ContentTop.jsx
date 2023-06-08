import React from "react";
import "./ContentTop.scss"
import ShoppingBagSharpIcon from '@mui/icons-material/ShoppingBagSharp';
import imgTop from "assets/imgTop.svg"

export const ContentTop = () => {
    return <>
        <div className="content-top">
            <div className="warapper">
                <div className="left">
                    <div>
                        <h2 style={{ fontWeight: 300, fontSize: 74, fontFamily: "cursive" }}>Collections</h2>
                    </div>
                    <div style={{ width: 700, marginTop: 52 }}>
                        <p style={{ fontWeight: 400, fontSize: 30, fontFamily: "cursive" }}>You can explore ans shop many differnt collection
                            from various barands here.</p>
                    </div>
                    <div style={{ marginTop: 66 }} >
                        <button className="button-left">
                            <ShoppingBagSharpIcon className="icon" />
                            <span className="text">Shop Now</span>
                        </button>
                    </div>
                </div>
                <div className="right">
                    <div>
                        <img src={imgTop} alt="" />
                    </div>
                </div>
            </div>

        </div>
    </>
}