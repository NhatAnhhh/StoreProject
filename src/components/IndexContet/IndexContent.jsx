import React from "react";
import brand1 from 'assets/brand-1.svg'
import imgLeft from "assets/category1.svg"
import imgRight from 'assets/categoryRight1.svg'
import product1 from 'assets/product-1.svg'
import backgrounnd from 'assets/backgound.svg'
import zara from 'assets/zara.svg'
import follow1 from 'assets/follow-product1.svg'
import zaraBG from 'assets/zaraBG.svg'
import { Product } from "components/Products";
import FilterAltSharpIcon from '@mui/icons-material/FilterAltSharp';
import "./IndexContent.scss"
import Slider from "react-slick";
import { ProductFollow } from 'components/ProductFollow';
import { ProductBrand } from "components/ProductBrand";

export const IndexContent = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };

    return <>
        <div className="IndexContent">
            <div className="warapper">
                <div className="content-brand">
                    <div className="logo-fashion">
                        <div>
                            <img src={brand1} alt="" />
                        </div>
                        <div>
                            <img src={brand1} alt="" />
                        </div>
                        <div>
                            <img src={brand1} alt="" />
                        </div>
                        <div>
                            <img src={brand1} alt="" />
                        </div>
                        <div>
                            <img src={brand1} alt="" />
                        </div>
                    </div>

                    <div className="img-container">

                        <div className="left">
                            <div className='text-left'>
                                Explore new and popular styles
                            </div>
                            <ProductBrand
                                img={imgLeft}
                                name='Dress'
                                quanlity='100' />

                        </div>

                        <div className="right">
                            <ProductBrand
                                img={imgRight}
                                name='Dress'
                                quanlity='100' />
                            <ProductBrand
                                img={imgRight}
                                name='Dress'
                                quanlity='100' />
                            <ProductBrand
                                img={imgRight}
                                name='Dress'
                                quanlity='100' />
                            <ProductBrand
                                img={imgRight}
                                name='Dress'
                                quanlity='100' />
                        </div>
                    </div>
                </div>

                <div className="content-category">
                    <div>
                        <h1 style={{ fontSize: 50, fontWeight: 500, fontFamily: 'cursive' }}>Or subscribe to the newsletter</h1>
                    </div>

                    <div className="title-container">
                        <div className="menu">
                            <span>All products</span>
                            <span>T-shirt</span>
                            <span>Hoodies</span>
                            <span>Jacket</span>
                        </div>

                        <div>
                            <button className="button-filter">
                                <FilterAltSharpIcon className="icon" />
                                <span className="text">Filter</span>
                            </button>
                        </div>
                    </div>

                    <div className="category-container">
                        <Product
                            image={product1}
                            name="Adicolor Classics Joggers"
                            price="$63.85"
                            category="Dress"
                            isSale={true}
                            isHot={true}
                        />
                        <Product
                            image={product1}
                            name="Adicolor Classics Joggers"
                            price="$63.85"
                            category="Dress"
                            isSale={true}
                            isHot={true}
                        />
                        <Product
                            image={product1}
                            name="Adicolor Classics Joggers"
                            price="$63.85"
                            category="Dress"
                            isSale={true}
                            isHot={true}
                        />
                        <Product
                            image={product1}
                            name="Adicolor Classics Joggers"
                            price="$63.85"
                            category="Dress"
                            isSale={true}
                            isHot={true}
                        />
                        <Product
                            image={product1}
                            name="Adicolor Classics Joggers"
                            price="$63.85"
                            category="Dress"
                            isSale={true}
                            isHot={true}
                        />
                        <Product
                            image={product1}
                            name="Adicolor Classics Joggers"
                            price="$63.85"
                            category="Dress"
                            isSale={true}
                            isHot={true}
                        />
                        <Product
                            image={product1}
                            name="Adicolor Classics Joggers"
                            price="$63.85"
                            category="Dress"
                            isSale={true}
                            isHot={true}
                        />
                        <Product
                            image={product1}
                            name="Adicolor Classics Joggers"
                            price="$63.85"
                            category="Dress"
                            isSale={true}
                            isHot={true}
                        />

                    </div>
                </div>
            </div>

            <div className="background">
                <img style={{ width: "100%" }} src={backgrounnd} alt="" />
                <div className="child-image">
                    <img src={zara} alt="" />
                </div>
                <div className="child-image1">
                    <img src={zaraBG} alt="" />
                </div>
                <div className="child-text">
                    <p>Lustrous yet understated. The new evening
                        wear collection exclusively offered at the
                        reopened Giorgio Armani boutique in Los
                        Angeles.</p>
                </div>
                <div className="child-button">
                    <span style={{ fontSize: 29, fontWeight: 400 }}>See Collection</span>
                </div>
            </div>

            <div className="bestSeller">
                <div>
                    <h1 style={{ fontSize: 50, fontWeight: 500, fontFamily: 'cursive' }}>Best sellers</h1>
                </div>

                <div className="title-container">
                    <div className="menu">
                        <span>All products</span>
                        <span>T-shirt</span>
                        <span>Hoodies</span>
                        <span>Jacket</span>
                    </div>

                    <div>
                        <button className="button-filter">
                            <span className="text">Show All</span>
                        </button>
                    </div>
                </div>

                <div className="category-container">
                    <Slider {...settings}>
                        <Product
                            image={product1}
                            name="Adicolor Classics Joggers"
                            price="$63.85"
                            category="Dress"
                            isSale={true}
                            isHot={true}
                        />

                        <Product
                            image={product1}
                            name="Adicolor Classics Joggers"
                            price="$63.85"
                            category="Dress"
                            isSale={true}
                            isHot={true}
                        />

                        <Product
                            image={product1}
                            name="Adicolor Classics Joggers"
                            price="$63.85"
                            category="Dress"
                            isSale={true}
                            isHot={true}
                        />

                        <Product
                            image={product1}
                            name="Adicolor Classics Joggers"
                            price="$63.85"
                            category="Dress"
                            isSale={true}
                            isHot={true}
                        />

                        <Product
                            image={product1}
                            name="Adicolor Classics Joggers"
                            price="$63.85"
                            category="Dress"
                            isSale={true}
                            isHot={true}
                        />

                        <Product
                            image={product1}
                            name="Adicolor Classics Joggers"
                            price="$63.85"
                            category="Dress"
                            isSale={true}
                            isHot={true}
                        />

                        <Product
                            image={product1}
                            name="Adicolor Classics Joggers"
                            price="$63.85"
                            category="Dress"
                            isSale={true}
                            isHot={true}
                        />

                        <Product
                            image={product1}
                            name="Adicolor Classics Joggers"
                            price="$63.85"
                            category="Dress"
                            isSale={true}
                            isHot={true}
                        />
                    </Slider>
                    {/* <Slider {...settings}>
                        <div style={{ backgroundColor: 'red', width: '100%', display: 'inline-block', height: '100px' }}></div>
                        <div style={{ backgroundColor: 'red', width: '100%', display: 'inline-block', height: '100px' }}></div>
                        <div style={{ backgroundColor: 'red', width: '100%', display: 'inline-block', height: '100px' }}></div>
                        <div style={{ backgroundColor: 'red', width: '100%', display: 'inline-block', height: '100px' }}></div>

                    </Slider> */}
                </div>


            </div>

            <div className="follow-product">
                <div>
                    <h1 style={{ fontSize: 50, fontWeight: 500, fontFamily: 'cursive' }}>Follow products and discounts on Instagram</h1>
                </div>

                <div className="img-product">
                    <ProductFollow
                        img={follow1} />
                    <ProductFollow
                        img={follow1} />
                    <ProductFollow
                        img={follow1} />
                    <ProductFollow
                        img={follow1} />
                    <ProductFollow
                        img={follow1} />
                    <ProductFollow
                        img={follow1} />

                </div>
                <div className="info">
                    <h4>@Uan.official</h4>
                </div>
            </div>
        </div>
    </>
}